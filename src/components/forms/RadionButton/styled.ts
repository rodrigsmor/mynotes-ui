import styled from 'styled-components';

export const RadionContainer = styled.button`
  gap: 14px;
  flex-grow: 1;
  display: flex;
  cursor: pointer;
  padding: 12px 14px;
  border-radius: 16px;
  align-items: center;
  transition: all ease-out .5s;
  background: ${({ theme }) => theme.colors.background.light };
  border: 2px solid ${({ theme }) => theme.colors.subtext.light }33;

  &.checked {
    border: 2px solid ${({ theme }) => theme.colors.primary.main };
  }
`;

export const LabelRadionButton = styled.p`
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h6 };
  font-weight: ${({ theme }) => theme.typography.weight.regular };

  .checked > & {
    color: ${({ theme }) => theme.colors.primary.main };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }
`;

export const RadionElement = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.subtext.light }33;
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.subtext.light  }33;
  
  .checked > & {
    background: ${({ theme }) => theme.colors.primary.main };
    border: 2px solid ${({ theme }) => theme.colors.background.light };
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary.main };
  }
`;