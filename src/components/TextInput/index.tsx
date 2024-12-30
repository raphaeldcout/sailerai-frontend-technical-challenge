import { FC } from 'react';

import { useTextInput } from './hooks/useTextInput';
import { InputContainer, StyledInput } from './styles';
import { Props } from './types';

export const TextInput: FC<Props> = ({
  disabled,
  onKeyDown,
  placeholder = 'Digite sua mensagem...',
}) => {
  const { handleInputChange, value } = useTextInput();

  return (
    <InputContainer>
      <StyledInput
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        rows={1}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </InputContainer>
  );
};
