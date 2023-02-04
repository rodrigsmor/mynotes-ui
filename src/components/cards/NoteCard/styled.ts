import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoteCardWrapper = styled(Link)`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 14px;
  max-width: 100%;
  border-radius: 16px;
  text-decoration: none;
  flex-direction: column;
  border: 0px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light };
  
  &.GRID {
    display: grid;
    gap: 4px 10px;
    position: relative;
    padding: 36px 12px 12px;
    grid-template-columns: 1fr max-content;
    grid-template-rows: repeat(4, fit-content);

    > .menu {
      top: 12px;
      z-index: 2;
      right: 12px;
      width: 38px;
      height: 38px;
      overflow: visible;
      position: absolute;
      background: transparent;
      
      > button {
        width: 38px;
        height: 38px;
        padding: 0;
        place-items: center;
        background: transparent;
        color: ${({ theme }) => theme.colors.background.light };

        &:hover {
          background: ${({ theme }) => theme.colors.background.light }26;
        }
      }

    }

    > .icon-image, p, footer {
      grid-column: 1 / 3;
    }

    > .icon-image {
      grid-row: 1 / 2;
      margin-bottom: 6px;
    }

    > h3 {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }

    > span {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }

    > p {
      grid-row: 3 / 4;
    }

    > footer {
      margin-top: 8px;
      grid-row: 4 / 5;
    }
  }
`;

export const MainInfos = styled.header`
  gap: 4px;
  width: 100%;
  display: grid;
  max-width: 100%;
  align-items: center;
  grid-template-rows: 20px 15px;
  grid-template-columns: 42px minmax(0, 1fr) 38px;

  > .menu {
    width: 38px;
    height: 38px;
    padding: 0;
    grid-row: 1 / 3;
    place-items: center;
    grid-column: 3 / 4;

    > button {
      width: 38px;
      height: 38px;
      padding: 0;
      place-items: center;
    }
  }
`;

export const NoteDetails = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > time {
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h7 };
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }
`;

export const CoverImage = styled.img`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 56px;
  object-fit: cover;
  position: absolute;
  border-radius: 16px 16px 0 0;
`;

export const IconImage = styled.img`
  z-index: 2;
  width: 32px;
  height: 32px;
  grid-row: 1 / 3;
  object-fit: cover;
  grid-column: 1 / 2;
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  grid-row: 1 / 2;
  text-align: start;
  grid-column: 2 / 3;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.typography.main};
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.semibold };
`;

export const CardContent = styled.p`
  width: 100%;
  max-width: 100%;
  grid-row: 2 / 3;
  overflow: hidden;
  grid-column: 2 / 3;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.subtext.light};
  font-size: ${({ theme }) => theme.typography.size.h7};
  font-weight: ${({ theme }) => theme.typography.weight.regular };
`;

export const Category = styled.span`
  padding: 2px 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.size.h7};
  background: ${({ theme }) => theme.colors.primary.light};
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;