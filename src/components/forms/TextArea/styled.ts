import styled from 'styled-components';

export const TextAreaWrapper = styled.textarea`
  height: 340px;
  flex-grow: 1;
  padding: 14px;
  border-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.typography.light};
  font-size: ${({ theme }) => theme.typography.size.h6};
  background: ${({ theme }) => theme.colors.primary.light };
  font-weight: ${({ theme }) => theme.typography.weight.regular };

  &::placeholder {
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.subtext.light}66;
    border: 2px solid ${({ theme }) => theme.colors.primary.light};
  }
`;