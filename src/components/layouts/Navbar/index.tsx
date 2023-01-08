import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import { ListOptions, NavbarContainer, PagesNavWrapper, TopContent } from './styled';
import { HiOutlineHome, HiHome, HiOutlineTrash, HiTrash, HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineDocumentText, HiDocumentText, HiRectangleGroup, HiOutlineRectangleGroup } from 'react-icons/hi2';
import { Logo } from '../../common/Logo';

type NavPathsTypes = {
  id: number;
  path: string;
  icon: {
    fill: ReactNode;
    outline: ReactNode;
  };
  label: string;
}

export const Navbar = () => {
  const { pathname } = useLocation();

  const navPaths: Array<NavPathsTypes> = [
    {
      id: 0,
      path: '/home',
      icon: {
        fill: <HiHome />,
        outline: <HiOutlineHome />,
      },
      label: 'Visão geral',
    }, {
      id: 1,
      path: '/notes',
      icon: {
        fill: <HiDocumentText />,
        outline: <HiOutlineDocumentText />,
      },
      label: 'Todas anotações',
    }, {
      id: 2,
      path: '/collections',
      icon: {
        fill: <HiRectangleGroup />,
        outline: <HiOutlineRectangleGroup />,
      },
      label: 'Coleções',
    }, {
      id: 3,
      path: '/favorites',
      icon: {
        fill: <HiHeart />,
        outline: <HiOutlineHeart />,
      },
      label: 'Favoritas',
    }, {
      id: 4,
      path: '/trash',
      icon: {
        fill: <HiTrash />,
        outline: <HiOutlineTrash />,
      },
      label: 'Lixeira',
    },
  ]

  return (
    <NavbarContainer>
      <TopContent>
        <Logo />
        <PagesNavWrapper>
          {
            navPaths.map(({ icon, id, path, label }) => (
              <li key={id}>
                <ListOptions
                  to={path}
                  className={`${(pathname.includes(path)) && 'current'}`}
                >
                  <IconContext.Provider value={{ size: '32px', }} >
                    { (pathname.includes(path)) ? icon.fill  : icon.outline }
                  </IconContext.Provider>
                  <span>
                    {label}
                  </span>
                </ListOptions>
              </li>
            ))
          }
        </PagesNavWrapper>
      </TopContent>
    </NavbarContainer>
  );
}