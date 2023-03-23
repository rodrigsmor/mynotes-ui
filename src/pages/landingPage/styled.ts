import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background.light };
`;

export const HomeSectionLP = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
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
  }
`;