import styled from 'styled-components';

export const CheckInputWrapper = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > p,
  > input {
    flex-grow: 1;
    color: ${({ theme }) => theme.colors.subtext.light};
    font-size: ${({ theme }) => theme.typography.size.h7} ;
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }
`;

export const InputCheckbox = styled.input`
  flex-grow: 1;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.subtext.light};
    font-size: ${({ theme }) => theme.typography.size.h7 };
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }

  &.enabled {
    opacity: 1;
    padding: 6px 8px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.subtext.light}33;
    color: ${({ theme }) => theme.colors.subtext.light};
    font-size: ${({ theme }) => theme.typography.size.h7} ;
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }
  
  &.disabled {
    outline: none;
    opacity: 0;
    border: 0px solid transparent;
  }
`;

export const CheckElement = styled.button`
  width: 16px;
  height: 16px
  display: grid;
  min-width: 16px;
  font-size: 16px;
  min-height: 16px;
  max-height: 16px;
  border-radius: 4px;
  place-items: center;
  cursor: pointer;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.background.main };

  &.checked {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  &.default {
    background: ${({ theme }) => theme.colors.disabled.main};
  }
`;

