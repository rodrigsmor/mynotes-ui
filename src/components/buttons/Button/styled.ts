import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const baseStyle = css`
  gap: 10px;
  height: 44px;
  display: flex;
  padding: 0 24px;
  cursor: pointer;
  align-items: center;
  border-radius: 24px;
  justify-content: center;
  border: 0px solid transparent;
  transition: all .4s ease-in-out;
  min-width: fit-content;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  > svg {
    width: 24px;
    height: 24px;
  }

  &.default {
    color: ${({ theme }) => theme.colors.background.light};
    background: ${({ theme }) => theme.colors.primary.main};

    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  &.surface {
    color: ${({ theme }) => theme.colors.subtext.light};
    background: ${({ theme }) => theme.colors.surface.main};

    &:hover {
      background: ${({ theme }) => theme.colors.surface.dark};
    }
  }
`;

export const ButtonContainer = styled.button`
  ${baseStyle}
`;

export const LinkButtonContainer = styled(Link)`
  ${baseStyle}
`