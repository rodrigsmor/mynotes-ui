import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotificationCardContainer = styled.article`
  width: 100%;
  padding: 4px 8px;
  position: relative;
`;

export const NotificationLink = styled(Link)`
  width: 100%;
  padding: 6px;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
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

  > .read-indicator {
    width: 5px;
    height: 5px;
    position: absolute;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary.main };
  }
`;