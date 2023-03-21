import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 40;
  width: 100%;
  height: 68px;
  display: flex;
  position: fixed;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light};

  > .search_bar {
    display: none;
  }

  &.landing-page_Header {
    > .logo {
      display: none;
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    height: 72px;
    padding: 0 32px;
    position: static;
    grid-area: header;
    box-shadow: none;

    > .search-button-mobile-header {
      display: none;
    }

    > .search_bar {
      display: flex;
    }

    &.landing-page_Header {
      box-shadow: ${({ theme }) => theme.shadow.main };

      > .logo {
        display: flex;
        width: fit-content;
      }
    }
  }
`;

export const ButtonWrappers = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  flex-directions: row;
  
  > .logged_account_card {
    display: none;
  }

  .landing-page_Header > & {
    gap: 14px;
    
    > .logged-button-options {
      display: none;
    }

    > .styled-button {
      width: 108px;
      max-width: 108px;
      min-width: 108px;
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    gap: 24px;

    > .logged_account_card {
      display: flex;
    }

    .landing-page_Header > & {
      > .logged-button-options {
        display: none;
      }

      > .styled-button {
        width: 132px;
      }
    }
  }
`;

export const LandingPageNavigationContainer = styled.nav`
  display: none;

  @media ${({ theme }) => theme.media.desktop } {
    width: 100px;
    height: 24px;
    background: red;
    display: flex;
  }
`;