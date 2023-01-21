import styled from 'styled-components';

export const FilterByContent = styled.div`
  gap: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  grid-row: 2 / 3;
  max-width: 100%;
  flex-direction: column;
`;

export const FilterBySections = styled.fieldset`
  gap: 14px;
  width: 100%;
  display: grid;
  max-width: 100%;
  border: 0px solid transparent;
  grid-template-columns: minmax(0, 1fr);
`;

export const SectionTitleModal = styled.legend`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.h4 };
  color: ${({ theme }) => theme.colors.typography.light };
  font-weight: ${({ theme }) => theme.typography.weight.semibold };
`;

export const SectionModalHeader = styled.header`
  gap: 8px;
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.main };
  font-size: ${({ theme }) => theme.typography.size.h5 };
`;

export const CategoriesWrapper = styled.ul`
  gap: 10px;
  width: 100%;
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
  height: fit-content;
  flex-direction: row;
  transition: all linear .5s;

  > li {
    list-style: none;
  }
  
  &::-webkit-scrollbar {
    height: 3px;
    transition: all linear .5s;
    background: ${({ theme }) => theme.colors.background.light };
  }
  
  &::-webkit-scrollbar-thumb {
    height: 3px;
    border-radius: 4px;
    transition: all linear .5s;
    background: ${({ theme }) => theme.colors.subtext.light}00;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      opacity: 1;
      background: ${({ theme }) => theme.colors.subtext.light}99;
    }
  }
`;

export const PeriodFields = styled.div`
  gap: 14px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  > .date-input {
    width: 100%;
  }
`;