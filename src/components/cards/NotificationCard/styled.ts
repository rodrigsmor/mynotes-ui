import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotificationCardContainer = styled.article`
  width: 100%;
  position: relative;
`;

export const NotificationLink = styled(Link)`
  gap: 4px;
  width: 100%;
  padding: 12px;
  display: flex;
  max-width: 100%;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.typography.light };
  background: ${({ theme }) => theme.colors.background.dark };

  > * {
    text-decoration: none;
  }

  &[data-read="true"] {
    background:  transparent;

    > .read-indicator {
      display: none;
    }
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
`;