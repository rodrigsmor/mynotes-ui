import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.aside`
  width: 260px;
  height: 100%;
  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.surface.main };
`;

export const TopContent = styled.nav`
  width: 100%;
  height: 100%;
`;

export const PagesNavWrapper = styled.ul`
  gap: 12px;
  width: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;
`;

export const ListOptions = styled(Link)`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 8px 18px;
  border-radius: 16px;
  text-decoration: none;
  font-family: 'Readex Pro', sans-serif;;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.regular };

  &.current {
    color: ${({ theme }) => theme.colors.background.light };
    background-color: ${({ theme }) => theme.colors.primary.main };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }
`;