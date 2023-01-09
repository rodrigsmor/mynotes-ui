import styled from 'styled-components';

export const IconButtonContainer = styled.button`
  width: 38px;
  height: 38px;
  cursor: pointer;
  min-width: 38px;
  border-radius: 16px;
  transition: .5s all ease-out;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.background.light };

  :hover {
    background: ${({ theme }) => theme.colors.background.dark };
  }
`;