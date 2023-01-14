import styled from 'styled-components';

export const NoteCardWrapper = styled.button`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 14px;
  max-width: 100%;
  border-radius: 16px;
  flex-direction: column;
  border: 0px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light };
`;

export const MainInfos = styled.header`
  gap: 4px;
  width: 100%;
  display: grid;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  grid-template-rows: 20px 15px;
  grid-template-columns: 42px minmax(0, 1fr) 38px;

  > img {
    width: 32px;
    height: 32px;
    grid-row: 1 / 3;
    object-fit: cover;
    grid-column: 1 / 2;
    border-radius: 8px;
  }

  > h3 {
    width: 100%;
    max-width: 100%; 
    overflow: hidden;
    grid-row: 1 / 2;
    text-align: start;
    grid-column: 2 / 3;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }

  > p {
    width: 100%;
    max-width: 100%;
    grid-row: 2 / 3;
    overflow: hidden;
    grid-column: 2 / 3;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h7 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }

  > .icon-button {
    width: 38px;
    height: 38px;
    padding: 0;
    grid-row: 1 / 3;
    place-items: center;
    grid-column: 3 / 4;
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

  > span {
    padding: 2px 8px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary.main };
    font-size: ${({ theme }) => theme.typography.size.h7};
    background: ${({ theme }) => theme.colors.primary.light };
    font-weight: ${({ theme }) => theme.typography.weight.medium };
  }
`;