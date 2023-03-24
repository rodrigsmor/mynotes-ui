import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-y: auto;
  height: fit-content;
  /* background: ${({ theme }) => theme.colors.background.light }; */
`;

export const HomeSectionLP = styled.div`
  width: 100vw;
  display: flex;
  height: 100dvh;
  padding: 0 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light};

  > * {
    text-align: center;
  }

  > h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.typography.main};
    font-size: ${({ theme }) => theme.typography.size.h1 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };

    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  > small {
    gap: 22px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.medium };

    &:after,
    &:before {
      width: 53px;
      height: 2px;
      content: '';
      display: block;
      background: ${({ theme }) => theme.colors.subtext.light };
    }
  }

  > p {
    width: 100%;
    margin: 36px 0 68px 0;
    color: ${({ theme }) => theme.colors.subtext.main };
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };

    > strong {
      color: ${({ theme }) => theme.colors.primary.main };
    }
  }

  > .landingPage-Home_ButtonGroup {
    gap: 16px;
    width: 100%;
    display: grid;
    min-width: 100%;
    height: fit-content;
    align-items: center;
    grid-auto-flow: row;
    justify-content: stretch;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 15.12%;

    > h1 {
      font-size: 64px;
      max-width: 706px;
      text-align: center;
      line-height: 68px;
    }

    > p {
      margin: 18px 0 36px 0;
      font-size: ${({ theme }) => theme.typography.size.h4 };
    }

    > .landingPage-Home_ButtonGroup {
      width: 37.2vw;
      min-width: 37.2vw;
    }
  }
`;

export const HomeArrowAnchor = styled(Link)`
  bottom: 24px;
  height: 44px;
  position: absolute;
  transition: ease .5s;
  color: ${({ theme }) => theme.colors.subtext.light };

  &:hover {
    margin: 0 0 20px 0;
    transform: scale(1.5);
  }
`;