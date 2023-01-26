import { Field } from 'formik';
import styled from 'styled-components';

export const InputContainer = styled.div`
  gap: 8px;
  display: flex;
  padding: 14px 18px;
  border-radius: 16px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.background.light };
  border: 2px solid ${({ theme }) => theme.colors.subtext.light }33;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.subtext.light };
  }
`;

export const InputElement = styled(Field)`
  width: 100%;
  outline: none;
  height: fit-content;
  background: transparent;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.light};
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  &::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.subtext.light}99;
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }

  &:focus, ::-webkit-inner-spin-button, {
    color: ${({ theme }) => theme.colors.subtext.light};
  }
`;