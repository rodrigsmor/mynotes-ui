import styled from 'styled-components';

export const SelectButtonWrapper = styled.button`
  display: grid;
  padding: 10px;
  cursor: pointer;
  place-items: center;
  border-radius: 16px;
  transition: .5s ease-out;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.background.light };
  border: 1px solid ${({ theme }) => theme.colors.subtext.light }4D;

  > svg {
    width: 24px;
    height: 24px;
  }

  &.isSelected {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.background.light };
    background: ${({ theme }) => theme.colors.primary.main };
  }
`;