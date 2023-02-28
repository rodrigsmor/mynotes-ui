import styled from 'styled-components';

export const IconButtonContainer = styled.button`
  width: 46px;
  height: 46px;
  display: grid;
  cursor: pointer;
  min-width: 38px;
  border-radius: 16px;
  place-items: center;
  transition: .5s all ease-out;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.background.light };
  
  :hover {
    background: ${({ theme }) => theme.colors.background.dark };
  }
  
  > svg {
    width: 32px;
    height: 32px;
  }

  @media ${({ theme }) => theme.media.desktop } {
    width: 38px;
    height: 38px;

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`;