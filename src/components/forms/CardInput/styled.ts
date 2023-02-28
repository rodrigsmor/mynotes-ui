import styled from 'styled-components';

export const CardInputContainer = styled.input`
  flex-grow: 1;
  outline: none;
  height: fit-content;
  background: transparent;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.typography.main };
  font-size: ${({ theme }) => theme.typography.size.h4 };
  font-weight: ${({ theme }) => theme.typography.weight.semibold };

  &::placeholder {
    opacity: .5;
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h4 };
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }
`;