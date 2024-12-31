import { FC } from 'react';

import { InputStyled, LabelStyled, Root } from './style';
import { Props } from './types';

export const TextInput: FC<Props> = ({ id, label, onChange, value }) => (
  <Root>
    <InputStyled
      id={id}
      value={value}
      onChange={onChange}
      placeholder=" "
    />
    <LabelStyled htmlFor={id}>{label}</LabelStyled>
  </Root>
);