import { FC } from 'react';

import { TextInput } from '@/components/TextInput';
import { useStore } from '@tanstack/react-store';

import { formGroupStore } from './store';
import { Root } from './style';

export const FormGroup: FC = () => {
  const { firstParticipantInputValue } = useStore(
    formGroupStore,
    (state) => state
  );

  return (
    <Root>
      <TextInput
        id="participant-1"
        label="Nome do participante"
        value={firstParticipantInputValue}
        onChange={(e) =>
          formGroupStore.setState((prev) => ({
            ...prev,
            firstParticipantInputValue: e.target.value,
          }))
        }
      />

      {/* <TextInput
        id="participant-2"
        label="Nome do segundo participante"
        value={secondParticipantInputValue}
        onChange={(e) =>
          formGroupStore.setState((prev) => ({
            ...prev,
            secondParticipantInputValue: e.target.value,
          }))
        }
      /> */}
    </Root>
  );
};
