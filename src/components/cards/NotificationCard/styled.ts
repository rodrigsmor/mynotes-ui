import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotificationCardContainer = styled.article`
  width: 100%;
  position: relative;
`;

export const NotificationLink = styled(Link)`
  gap: 2px;
  width: 100%;
  padding: 12px;
  display: flex;
  max-width: 100%;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  flex-direction: column;
  transition: all .3s ease-in-out;
  color: ${({ theme }) => theme.colors.typography.light };
  background: ${({ theme }) => theme.colors.background.dark };

  &:focus-visible {
    transition: none;
    outline-offset: -2px;
    outline: 2px solid ${({ theme }) => theme.colors.primary.main}99;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background.main } !important;
  }

  &[data-read="true"] {
    background:  transparent;

    > .read-indicator {
      display: none;
    }
  }

  > * {
    text-decoration: none;
  }

  > h3 {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }

  > .description {
    width: 100%;
    flex-grow: 1;
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.size.h7 };
    color: ${({ theme }) => theme.colors.typography.light }CC;

    > strong {
      color: ${({ theme }) => theme.colors.primary.main };
    }
  }

  > .pending-date {
    gap: 4px;
    display: flex;
    max-width: 100%;
    width: fit-content;
    align-items: center;
    margin: 0 0 6px;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.size.h7};
    color: ${({ theme }) => theme.colors.typography.light}cc;
    font-weight: ${({ theme }) => theme.typography.weight.light};

    > abbr {
      display: flex;
      height: fit-content;
      align-items: center;
      max-height: fit-content;
      color: ${({ theme }) => theme.colors.primary.main };
    }
  }

  > .read-indicator {
    top: 0px;
    left: 0px;
    width: 6px;
    height: 6px;
    position: absolute;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.primary.main };
  }

  > .notification-date {
    width: 100%;
    margin: 4px 0 0;
    text-align: end;
    font-size: ${({ theme }) => theme.typography.size.h7};
    color: ${({ theme }) => theme.colors.typography.light }cc;
  }
`;