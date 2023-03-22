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
    position: relative;
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
        width: 230px;
        justify-content: flex-start;
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
    position: relative;

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

export const LandingPageNavigationContainer = styled.div`
  bottom: 0;
  width: 100vw;
  z-index: 50;
  left: -110vw;
  display: flex;
  height: 100dvh;
  position: fixed;
  transition: .2s ease-out;
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadow.dark };
  background: ${({ theme }) => theme.colors.typography.main}66;
  
  > nav {
    z-index: 51;
    width: 87%;
    height: 100%;
    padding: 13px 16px;
    background: ${({ theme }) => theme.colors.background.light };

    > .close-button {
      top: 12px;
      left: 16px;
      cursor: pointer;
      position: absolute;
      background: ${({ theme }) => theme.colors.background.light };
  
      &:hover {
        background: ${({ theme }) => theme.colors.background.dark };
      }
    }
  }

  &.open {
    left: 0;
  }


  @media ${({ theme }) => theme.media.desktop } {
    top: 0;
    left: 0;
    margin: auto;
    display: flex;
    box-shadow: none;
    position: static;
    width: fit-content;
    height: fit-content;
    backdrop-filter: none;
    background: transparent;

    > nav {
      position: relative;
      padding: 0;
      background: transparent;

      > .close-button {
        display: none;
      }
    }
  }
`;

export const LandingPageSectionsListing = styled.ul`
  gap: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > li {
    width: 80%;
    padding: 12px;
    cursor: pointer;
    list-style: none;
    text-align: center;
    border-radius: 16px;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.background.light };
    
    &:hover {
      background: ${({ theme }) => theme.colors.background.dark };
    }
    
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.subtext.main };
      font-size: ${({ theme }) => theme.typography.size.h5 };
      font-weight: ${({ theme }) => theme.typography.weight.regular };

      &.selected {
        color: ${({ theme }) => theme.colors.primary.main };
        font-weight: ${({ theme }) => theme.typography.weight.semibold };
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 16px;
    width: fit-content;
    height: fit-content;
    flex-direction: row;

    > li {
      width: 72px;
      padding: 0px;
      min-width: 72px;
      border-radius: 0px;
      background: transparent;

      &:hover {
        background: transparent;
      }
    }
  }
`;