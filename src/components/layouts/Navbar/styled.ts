import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.aside`
  width: 100vw;
  height: 68px;
  position: fixed;
  grid-area: navbar;
  border-radius: 16px 16px 0 0;
  box-shadow: ${({ theme }) => theme.shadow.dark };
  background: ${({ theme }) => theme.colors.surface.main };

  figure {
    display: none;
  }

  @media ${({theme }) => theme.media.desktop } {
    width: 260px;
    height: 100%;
    padding: 24px 16px;
    border-radius: 0 0 0 0;
    box-shadow: none;
    position: static;

    figure {
      display: flex;
    }
  }
`;

export const TopContent = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  @media ${({ theme }) => theme.media.desktop } {
    gap: 36px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  `;

export const PagesNavWrapper = styled.ul`
  gap: 12px;
  width: 100%;
  display: grid;
  padding: 0 16px;
  list-style: none;
  grid-template-columns: repeat(5, 1fr);

  @media ${({ theme }) => theme.media.desktop } {
    width: 100%;
    padding: 0 0;
    display: flex;
    flex-direction: column;
  }
`;

export const ListOptions = styled(Link)`
  height: 48px;
  display: flex;
  border-radius: 16px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  transition: .5s all ease-out;
  color: ${({ theme }) => theme.colors.subtext.light };
  background-color: ${({ theme }) => theme.colors.surface.main };

  span {
    display: none;
  }

  &.current {
    color: ${({ theme }) => theme.colors.background.light };
    background-color: ${({ theme }) => theme.colors.primary.main };
    font-weight: ${({ theme }) => theme.typography.weight.medium };
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main };
    }
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.dark };
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    gap: 10px;
    width: 100%;
    padding: 8px 18px;
    height: fit-content;
    justify-content: start;
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };

    span {
      display: block;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;