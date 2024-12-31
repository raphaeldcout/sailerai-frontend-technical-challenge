import { FC } from 'react';

import { InputContainer, StyledInput } from './styles';
import { Props } from './types';

export const TextArea: FC<Props> = ({
  disabled,
  handleInputChange,
  onKeyDown,
  placeholder = 'Digite sua mensagem...',
  value,
}) => (
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
