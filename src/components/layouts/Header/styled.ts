import styled from 'styled-components';

export const HeaderContainer = styled.header`
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
  
  @media ${({ theme }) => theme.media.desktop } {
    gap: 24px;

    > .logged_account_card {
      display: flex;
    }

  }
`;