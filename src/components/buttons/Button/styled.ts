import styled from 'styled-components';

export const ButtonContainer = styled.button`
  gap: 10px;
  display: flex;
  height: fit-content;
  padding: 12px 24px;
  align-items: center;
  border-radius: 24px;
  justify-content: center;
  border: 0px solid transparent;
  transition: all .4s ease-in-out;
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