import styled from "styled-components";
import { Link } from "react-router-dom";

interface CollectionSummaryContainerProps {
  category: string;
}

export const CollectionSummaryContainer = styled(Link)<CollectionSummaryContainerProps>`
  gap: 14px;
  width: 100%;
  padding: 14px;
  display: flex;
  min-width: 100%;
  align-items: center;
  border-radius: 16px;
  text-decoration: none;
  transition: all .5s ease;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main };

  > .icon {
    width: 38px;
    height: 38px;
    display: grid;
    min-width: 38px;
    min-height: 38px;
    place-items: center;
    border-radius: 12px;
    color: ${({ theme, category }) => theme.colors[category].main};
    background-color: ${({ theme, category }) => theme.colors[category].light};
  }

  > div {
    flex: 1;
    gap: 4px;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;

    > p {
      width: 100%;
      line-clamp: 1;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      
      &:first-of-type {
        font-size: ${({ theme }) => theme.typography.size.h5 };
        color: ${({ theme }) => theme.colors.typography.light };
        font-weight: ${({ theme }) => theme.typography.weight.semibold };
      }

      &:last-of-type {
        color: ${({ theme }) => theme.colors.subtext.light};
        font-size: ${({ theme }) => theme.typography.size.h6 };
        font-weight: ${({ theme }) => theme.typography.weight.regular };
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.main };
  }
`;