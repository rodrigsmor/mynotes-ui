import { useState } from 'react';
import { Logo } from '../../common/Logo';
import { Button } from '../../buttons/Button';
import { SearchBar } from "../../forms/Searchbar";
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '../../buttons/IconButton';
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';
import { LoggedInButtons } from '../../panels/LoggedInButtons';
import { LoggedAccountCard } from '../../cards/LoggedAccountCard';
import { ButtonWrappers, HeaderContainer, LandingPageNavigationContainer, LandingPageSectionsListing } from './styled';

interface HeaderProps {
  isLogged?: boolean;
  isScrolled?: boolean;
  isLandingPage?: boolean;
}

export const Header = ({ isLandingPage = false, isLogged = true, isScrolled = true }: HeaderProps) => {
  const [showMobileElement, setShowMobileElement] = useState<boolean>(false);

  const LandingPageButtons = () => (
    <>
      <Button type={'button'} theme={ThemeEnums.SURFACE} to={'/auth/login'}>
        <>entrar</>
      </Button>
      <Button type={'button'} theme={ThemeEnums.DEFAULT} to={'/auth/signup'}>
        <>cadastrar</>
      </Button>
    </>
  )

  return (
    <HeaderContainer className={`${isLandingPage && 'landing-page_Header'} ${(isLandingPage && !isScrolled) && 'Header_home_section'}`}>
      {isLandingPage && <Logo />}
      <IconButton
        onClick={event => setShowMobileElement(!showMobileElement)}
        Icon={isLandingPage ? <HiOutlineMenu /> : <HiMagnifyingGlass />}
        className={`${isLandingPage ? 'menu-navigation_Header' : 'search-button-mobile-header'}`}
      />
      {!isLandingPage && <SearchBar />}
      {isLandingPage && <LandingPageNavigation mobileMenuIsOpen={showMobileElement} closeMobileMenu={() => setShowMobileElement(false)} />}
      <ButtonWrappers>
        {isLogged && <LoggedInButtons />}
        {isLandingPage && <LandingPageButtons />}
        {isLogged && <LoggedAccountCard />}
      </ButtonWrappers>
    </HeaderContainer>
  );
}

interface LandingPageNavigationProps {
  mobileMenuIsOpen: boolean;
  closeMobileMenu: () => void;
}

const LandingPageNavigation = ({ mobileMenuIsOpen, closeMobileMenu }: LandingPageNavigationProps) => {
  const { hash } = useLocation();

  const options = [
    {
      id: 0,
      label: 'Início',
      path: '#home'
    }, {
      id: 1,
      label: 'O que é?',
      path: '#about-project',
    }, {
      id: 2,
      label: 'Recursos',
      path: '#features'
    }, {
      id: 3,
      label: 'Contatos',
      path: '#contact'
    },
  ]

  return (
    <LandingPageNavigationContainer className={`header_navigation-LandingPage ${mobileMenuIsOpen && 'open'}`}>
      <nav>
        <IconButton
          onClick={e => closeMobileMenu()}
          Icon={<HiX />}
          className='close-button'
          attributes={{
            "aria-label": 'Fechar menu de navegação'
          }}
        />
        <LandingPageSectionsListing>
          {
            options.map(({ id, label, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  aria-current={(hash.includes(path))}
                  className={`${hash.includes(path) && 'selected'}`}
                >
                  {label}
                </Link>
              </li>
            ))
          }
        </LandingPageSectionsListing>
      </nav>
    </LandingPageNavigationContainer>
  )
}