import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  FiMic,
  FiPaperclip,
  FiSend,
  FiStopCircle,
  FiTrash2,
} from 'react-icons/fi';

import { AnimatedRecording } from '@/components/AnimatedRecording';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Avatar } from '@/components/Avatar';
import { ButtonIcon } from '@/components/ButtonIcon';
import { TextInput } from '@/components/TextInput';
import { useTextInput } from '@/components/TextInput/hooks/useTextInput';
import { Tooltip } from '@/components/Tooltip';
import { TooltipContent } from '@/components/Tooltip/styles';
import { useBotSailerMessage } from '@/layouts/Chat/hooks/useBotSailerMessage';
import theme from '@/styles/theme';

import {
  HiddenInput,
  Root,
  WrapperActions,
  WrapperArea,
  WrapperImagesAttached
} from './style';
import { HandleSendMessage } from './types';

export const Footer: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const { addMessage, initialLoderMessagesDone } = useBotSailerMessage();
  const { handleInputChange, value: textInputValue } = useTextInput();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const thereAreImagesAttached = !!images.length;

  const showImagesAttachedContent = useMemo(
    () => thereAreImagesAttached && !textInputValue && !audioSrc,
    [audioSrc, textInputValue, thereAreImagesAttached]
  );

  const showTextInputContent = useMemo(
    () => !thereAreImagesAttached && !audioSrc && !isRecording,
    [audioSrc, thereAreImagesAttached, isRecording]
  );

  const showAudioPlayerContent = useMemo(
    () => audioSrc && !thereAreImagesAttached && !textInputValue,
    [audioSrc, textInputValue, thereAreImagesAttached]
  );

  const canSendMessage = useMemo(
    () => textInputValue || thereAreImagesAttached || audioSrc,
    [textInputValue, thereAreImagesAttached, audioSrc]
  );

  const clearInputImages = useCallback(() => setImages([]), []);

  const clearInputAudio = useCallback(() => {
    setAudioSrc(null);
    setIsRecording(false);
  }, []);

  const handleSendMessage = useCallback(
    ({ content, type }: HandleSendMessage) => {
      addMessage({
        id: new Date().getTime(),
        user_id: 'owner',
        type,
        content,
        timestamp: new Date().toISOString(),
      });
      handleInputChange('');
    },
    [addMessage, handleInputChange]
  );

  const handleSend = useCallback(() => {
    if (thereAreImagesAttached) {
      handleSendMessage({ content: images[0], type: 'image' });
      clearInputImages();
      return;
    }

    if (textInputValue.trim()) {
      handleSendMessage({ content: textInputValue, type: 'text' });
      return;
    }

    if (audioSrc) {
      handleSendMessage({ content: audioSrc, type: 'audio' });
      clearInputAudio();
      return;
    }
  }, [
    audioSrc,
    clearInputImages,
    clearInputAudio,
    handleSendMessage,
    images,
    textInputValue,
    thereAreImagesAttached,
  ]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [fileInputRef]);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;

    const files = Array.from(e.target.files);

    const validImages = files.filter((file) =>
      [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/webp',
        'image/gif',
      ].includes(file.type)
    );

    if (validImages.length) {
      const imageUrls = validImages.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  }, []);

  const handleStartRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/mp3',
        });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioSrc(audioURL);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (_) {
      alert('Não foi possível acessar o microfone. Verifique as permissões.');
    }
  }, []);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, []);

  return (
    <Root>
      <WrapperArea>
        {showImagesAttachedContent && (
          <WrapperImagesAttached>
            {images.map((src, index) => (
              <Avatar key={index} src={src} alt={`Imagem ${index + 1}`} />
            ))}
          </WrapperImagesAttached>
        )}

        {showTextInputContent && (
          <TextInput
            disabled={!initialLoderMessagesDone}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        )}

        {showAudioPlayerContent && audioSrc && <AudioPlayer src={audioSrc} />}

        <WrapperActions>
          {thereAreImagesAttached || audioSrc ? (
            <Tooltip
              text={
                thereAreImagesAttached
                  ? 'Remover imagem'
                  : 'Remover mensagem de voz'
              }
              tooltipPosition="top"
            >
              <TooltipContent>
                <ButtonIcon
                  onClick={() => {
                    if (thereAreImagesAttached) return clearInputImages();
                    if (audioSrc) return clearInputAudio();
                  }}
                  disabled={!initialLoderMessagesDone}
                >
                  <FiTrash2 size={20} color={theme.colors.surface} />
                </ButtonIcon>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Tooltip text="Enviar imagem" tooltipPosition="top">
              <TooltipContent>
                <ButtonIcon
                  onClick={handleButtonClick}
                  disabled={!initialLoderMessagesDone}
                >
                  <HiddenInput
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
                    onChange={(e) => handleFileChange(e)}
                  />
                  <FiPaperclip size={20} color={theme.colors.surface} />
                </ButtonIcon>
              </TooltipContent>
            </Tooltip>
          )}

          {isRecording && <AnimatedRecording />}

          {canSendMessage ? (
            <Tooltip text="Enviar" tooltipPosition="top">
              <TooltipContent>
                <ButtonIcon
                  onClick={handleSend}
                  disabled={!initialLoderMessagesDone}
                >
                  <FiSend size={20} color={theme.colors.surface} />
                </ButtonIcon>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Tooltip
              text={isRecording ? 'Parar gravação' : 'Enviar mensagem de voz'}
              tooltipPosition="top"
            >
              <TooltipContent>
                <ButtonIcon
                  onClick={
                    isRecording ? handleStopRecording : handleStartRecording
                  }
                  disabled={!initialLoderMessagesDone}
                >
                  {isRecording ? (
                    <FiStopCircle size={20} color={theme.colors.surface} />
                  ) : (
                    <FiMic size={20} color={theme.colors.surface} />
                  )}
                </ButtonIcon>
              </TooltipContent>
            </Tooltip>
          )}
        </WrapperActions>
      </WrapperArea>
    </Root>
  );
};
