import styled from 'styled-components';

export const ControllerWrapper = styled.footer`
  gap: 28px;
  width: 100%;
  display: grid;
  height: fit-content;
  place-items: center;
  grid-template-rows: fit-content;
  grid-template-columns: 2fr 1fr 2fr;
  
  @media screen and (max-width: 1024px) {
    > .next_buttonController, .previous_buttonController {
      grid-rows: 1 / 2;
      padding: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }

    > .next_buttonController {
      grid-columns: 3 / 4;
    }

    > .previous_buttonController {
      grid-columns: 1 / 2;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RouteIndication = styled.p`
  grid-rows: 1/2;
  grid-columns: 2 / 3;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;