import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  height: fit-content;
  align-items: center;
  background: transparent;
  justify-content: center;
  overflow: visible;

  &:not(:focus),
  &:not(:focus-within) {
    > .menu-card {
      display: none;
    }
  }

  &:focus, &:focus-within {
    > .menu-card.opened {
      display: flex;
    }
  }
`;

export const MenuCardWrapper = styled.div`
  gap: 14px;
  top: 38px;
  right: 0px;
  z-index: 3;
  width: 320px;
  padding: 14px;
  position: absolute;
  height: fit-content;
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  border: 0px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.dark };
  background: ${({ theme }) => theme.colors.background.main };

  &.closed {
    display: none;
  }

  &.opened, &:focus-within, &:focus {
    display: flex !important;
  }
`; 

export const OptionsListingWrapper = styled.ul`
  gap: 4px;
  width: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;
`;

export const OptionButton = styled.button`
  gap: 8px;
  width: 100%;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  justify-content: stretch;
  transition: all ease-out .3s;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.main };
  background: ${({ theme }) => theme.colors.background.main};

  > .icon-options {

  }

  &:hover {
    background: ${({ theme }) => theme.colors.background.dark};
  }
`;

export const OptionButtonLabel = styled.p`
  flex-grow: 1;
  text-align: start;
  font-size: ${({ theme }) => theme.typography.size.h6 };
  font-weight: ${({ theme }) => theme.typography.weight.regular };
`;

export const OptionCommand = styled.code`
  padding: 0;
  text-align: end;
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.size.h7 };
  color: ${({ theme }) => theme.colors.subtext.light }99;
  font-weight: ${({ theme }) => theme.typography.weight.light };
`;

export const LastUpdateText = styled.em`
  width: 100%;
  text-align: start;
  color: ${({ theme }) => theme.colors.subtext.light};
  font-size: ${({ theme }) => theme.typography.size.h7};
  font-weight: ${({ theme }) => theme.typography.weight.light };

  > span {
    font-weight: ${({ theme }) => theme.typography.weight.medium };
  }
`;

export const Divider = styled.hr`
  width: 264px;
  height: 1px;
  display: block;
  border: 0px;
  opacity: .2;
  background: ${({ theme }) => theme.colors.subtext.light };
`;