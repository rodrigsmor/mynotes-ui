import styled from 'styled-components';

export const ButtonContainer = styled.button`
  gap: 10px;
  height: 44px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  border-radius: 24px;
  justify-content: center;
  border: 0px solid transparent;
  transition: all .4s ease-in-out;
  min-width: fit-content;
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  > svg {
    width: 24px;
    height: 24px;
  }

  &.default {
    color: ${({ theme }) => theme.colors.background.light };
    background: ${({ theme }) => theme.colors.primary.main };

    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark };
    }
  }

  &.surface {
    color: ${({ theme }) => theme.colors.subtext.light};
    background: ${({ theme }) => theme.colors.surface.main};

    &:hover {
      background: ${({ theme }) => theme.colors.surface.dark };
    }
  }
`;