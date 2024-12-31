import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutralMediumLight};
  transition: all 0.2s ease;
  pointer-events: none;

  input:focus + &,
  input:not(:placeholder-shown) + & {
    top: -5px;
    transform: translateY(-120%);
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutralMedium};
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.neutralMedium};
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: 0 0 0 0.2rem rgba(24, 49, 69, 0.25);
  }
`;