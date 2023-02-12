import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: grid;
  width: fit-content;
  position: relative;
  place-items: center;
`;

export const SelectInput = styled.button`
  gap: 6px;
  width: 178px;
  height: 28px;
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  align-items: center;
  transition: all ease-out .5s;
  border: 2px solid transparent;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.disabled.light };

  &:hover {
    background: ${({ theme }) => theme.colors.disabled.main };
  }

  > .arrow-icon {
    transform: rotate(0deg);
    transition: all .5s ease;
  }

  &.focus {
    border: 2px solid ${({ theme }) => theme.colors.subtext.light }33;
    background: ${({ theme }) => theme.colors.disabled.light }00;

    > .arrow-icon {
      transform: rotate(-180deg);
    }
  }
`;

export const SelectOptionsWrapper = styled.ul`
  top: 0;
  gap: 8px;
  padding: 0;
  height: 0px;
  width: 200px;
  display: flex;
  list-style: none;
  position: absolute;
  overflow-y: scroll;
  visibility: hidden;
  border-radius: 16px;
  flex-direction: column;
  transition: all .3s ease-out;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.main };
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &.opened {
    top: 36px;
    padding: 8px;
    height: 200px;
    visibility: visible;
  }
`;

export const SelectOption = styled.li`
  height: 33px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border-radius: 14px;
  align-items: center;
  transition: ease .5s all;
  font-size: ${({ theme }) => theme.typography.size.h6 };
  color: ${({ theme }) => theme.colors.typography.light }99;
  background: ${({ theme }) => theme.colors.background.main };
  font-weight: ${({ theme }) => theme.typography.weight.regular };

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main }1a;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.primary.main }1a;
    border: 2px solid ${({ theme }) => theme.colors.primary.main }1a;
  }
`;