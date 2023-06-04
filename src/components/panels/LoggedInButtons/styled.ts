import { Link } from "react-router-dom";
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
  gap: 12px;
  z-index: 10;
  width: 80vw;
  padding: 14px;
  display: flex;
  max-width: 265px;
  position: absolute;
  border-radius: 14px;
  flex-direction: column;
  transition: all .3s ease-in;
  max-height: calc(100dvh - 148px);
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light };

  > span {
    top: -16px;
    align-self: center;
    position: absolute;
    filter: drop-shadow(0px -3px 2px rgba(17, 17, 17, 0.1));

    &::before {
      content: '';
      width: 40px;
      height: 18px;
      display: block;
      background: red;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      background: ${({ theme }) => theme.colors.background.light };
    }
  }

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
    max-width: 368px;
  }
  
  @media ${({ theme }) => theme.media.tablet } {
    width: 265px;

    &.notification {
      width: 368px;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    max-height: 86dvh;
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
  gap: 8px;
  width: 100%;
  display: flex;
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  flex-direction: column;
  scrollbar-gutter: stable;

  > li {
    width: 100%;
  }
  

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.subtext.light}66;
    border: 2px solid ${({ theme }) => theme.colors.background.light};
  }
`;

export const SettingsOptionsWrapper = styled.ul`
  gap: 4px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  list-style: none;
  flex-direction: column;

  > li {
    width: 100%;
    max-width: 100%;
    list-style: none;
  }
`;

export const SettingsLink = styled(Link)`
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  display: flex;
  max-width: 100%;
  border-radius: 14px;
  align-items: center;
  text-decoration: none;
  background: transparent;
  transition: all .3s ease-out;
  color: ${({ theme }) => theme.colors.subtext.light };

  &:hover {
    background: ${({ theme }) => theme.colors.background.dark};
  }

  &:focus-visible {
    transition: none;
    outline-offset: -2px;
    outline: 2px solid ${({ theme }) => theme.colors.primary.main}99;
  }

  > div {
    width: 100%;
    flex-grow: 1;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;

    > h4 {
      color: ${({ theme }) => theme.colors.subtext.dark }CC;
      font-size: ${({ theme }) => theme.typography.size.h6 };
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }

    > p {
      width: 100%;
      line-clamp: 1;
      max-width: 100%;
      overflow: hidden;
      line-break: loose;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: ${({ theme }) => theme.typography.size.h7 };
    }
  }

  &[aria-selected="true"] {
    position: relative;
    background: ${({ theme }) => theme.colors.background.dark };

    > .icon {
      color: ${({ theme }) => theme.colors.primary.main };
    }

    > div {

      > h4 {
        color: ${({ theme }) => theme.colors.primary.main };
      }
    }
  }
`;