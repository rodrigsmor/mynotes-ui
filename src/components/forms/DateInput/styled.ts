import styled from 'styled-components';

export const DateInputContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const LabelDateInput = styled.label`
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h6 };
  font-weight: ${({ theme }) => theme.typography.weight.regular};
`;

export const InputGroup = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.subtext.light };
  border: 2px solid ${({ theme }) => theme.colors.subtext.light }33;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.subtext.light };
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 14px;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  outline: none;
  height: fit-content;
  background: transparent;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.light}99;
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  &::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.subtext.light }99;
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  &:focus, ::-webkit-inner-spin-button, {
    color: ${({ theme }) => theme.colors.subtext.light};
  }
`;