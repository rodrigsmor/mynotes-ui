import { ReactNode } from 'react';
import { HiOutlineHome, HiHome } from 'react-icons/hi2';
import { ListOptions, NavbarContainer, PagesNavWrapper, TopContent } from './styled';
import { useLocation } from 'react-router-dom';

type navPaths = {
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

  const navPaths: Array<navPaths> = [
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
        fill: <HiHome />,
        outline: <HiOutlineHome />,
      },
      label: 'Todas anotações',
    }, {
      id: 2,
      path: '/collections',
      icon: {
        fill: <HiHome />,
        outline: <HiOutlineHome />,
      },
      label: 'Coleções',
    }, {
      id: 3,
      path: '/favorites',
      icon: {
        fill: <HiHome />,
        outline: <HiOutlineHome />,
      },
      label: 'Favoritas',
    }, {
      id: 4,
      path: '/trash',
      icon: {
        fill: <HiHome />,
        outline: <HiOutlineHome />,
      },
      label: 'Lixeira',
    },
  ]

  return (
    <NavbarContainer>
      <TopContent>
        <PagesNavWrapper>
          {
            navPaths.map(({ icon, id, path, label }) => (
              <li key={id}>
                <ListOptions
                  to={path}
                  className={`${(pathname.includes(path)) && 'current'}`}
                >
                  { (pathname.includes(path)) ? icon.fill  : icon.outline }
                  <span>{label}</span>
                </ListOptions>
              </li>
            ))
          }
        </PagesNavWrapper>
      </TopContent>
    </NavbarContainer>
  );
}