import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledInput = styled.textarea`
  all: unset;
  width: 100%;
  min-height: 40px;
  resize: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.surface};
  outline: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  background-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutralLowDark};
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `}
`;
