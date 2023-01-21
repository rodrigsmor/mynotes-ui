import styled from 'styled-components';

export const CheckBoxContainer = styled.button`
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 16px;
  transition: all .5s ease-out;
  background: ${({ theme }) => theme.colors.background.light };
  border: solid 2px ${({ theme }) => theme.colors.subtext.light }33;

  &:hover {
    background: ${({ theme }) => theme.colors.background.dark };
  }

  &.checked {
    background: ${({ theme }) => theme.colors.primary.light };
    border: 2px solid ${({ theme }) => theme.colors.primary.main };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };

    > p {
      color: ${({ theme }) => theme.colors.primary.main };
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }
  }
`;

export const LabelCheckbox = styled.p`
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h6 };
  font-weight: ${({ theme }) => theme.typography.weight.light };
`;