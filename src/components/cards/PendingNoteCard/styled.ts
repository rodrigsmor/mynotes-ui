import styled from "styled-components";
import { Link } from "react-router-dom";

export const PendingNoteCardWrapper = styled(Link)`
  gap: 14px;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  padding: 4px 0 4px 16px;

  &:before {
    left: 0;
    width: 2px;
    content: '';
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary.main };
  }

  > time {
    gap: 2px;
    width: 92px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.subtext.main };
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.medium};

    > span {
      color: ${({ theme }) => theme.colors.subtext.light };
      font-size: ${({ theme }) => theme.typography.size.h6 };
      font-weight: ${({ theme }) => theme.typography.weight.regular};
    }
  }

  > div {
    flex: 1;
    gap: 4px;
    height: 100%;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;

    > p {
      width: 100%;
      line-clamp: 1;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: ${({ theme }) => theme.typography.size.h5 };
      color: ${({ theme }) => theme.colors.typography.light };
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }
  }
`;