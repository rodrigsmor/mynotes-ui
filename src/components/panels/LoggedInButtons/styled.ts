import styled from "styled-components";

export const PanelDropdownWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: fit-content;
  max-height: fit-content;
  justify-content: center;
`;

export const PanelDropdownContent = styled.nav`
  top: 54px;
  width: 265px;
  padding: 14px;
  display: flex;
  position: absolute;
  border-radius: 14px;
  flex-direction: column;
  transition: all .3s ease-in;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light };

  > header {
    flex-grow: 1;
    gap: 14px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;

    > .mark-read-button {
      gap: 4px;
      display: flex;
      cursor: pointer;
      padding: 2px 4px;
      border-radius: 4px;
      align-items: center;
      background: transparent;
      background: red;
      border: 0px solid transparent;
      transition: all .3s ease-in-out;
      background: ${({ theme }) => theme.colors.background.light };

      &:hover {
        background: ${({ theme }) => theme.colors.background.dark };
      }

      > .icon {
        color: ${({ theme }) => theme.colors.primary.main };
      }
    }
  }

  > * > h3 {
    font-size: ${({ theme }) => theme.typography.size.h6};
    color: ${({ theme }) => theme.colors.typography.light}CC;
    font-weight: ${({ theme }) => theme.typography.weight.semibold };  }

  &[aria-hidden="true"] {
    opacity: 0;
    pointer-events: none;
  }

  &.notification {
    width: 368px;
  }
`;

export const HeaderTabContainers = styled.div`
  gap: 4px;
  width: 100%;
  display: grid;
  max-width: 100%;
  flex-basis: 100%;
  grid-template-columns: repeat(3, 1fr);

  > button {
    height: 28px;
    display: flex;
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    align-items: center;
    background: transparent;
    justify-content: center;
    border: 0px solid transparent;
    transition: all .3s ease-in-out;
    font-size: ${({ theme }) => theme.typography.size.h6 };
    color: ${({ theme }) => theme.colors.typography.light }b3;
    font-weight: ${({ theme })=> theme.typography.weight.regular};

    &::after {
      width: 0;
      bottom: 0;
      content: '';
      height: 2px;
      position: absolute;
      transition: all .3s ease-out;
      background-color: ${({ theme }) => theme.colors.primary.main };
    }

    &:not([aria-selected="true"]) {
      :hover {
        background-color: ${({ theme }) => theme.colors.primary.light };
      }
    }

    &[aria-selected="true"] {
      color: ${({ theme }) => theme.colors.primary.main };
      font-weight: ${({ theme }) => theme.typography.weight.semibold };

      &::after {
        width: 100%;
      }
    }
  }
`;

export const NotificationsListing = styled.ul`
  gap: 4px;
  width: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;

  > li {
    width: 100%;
  }
`;