import { ButtonWrappers, HeaderContainer, LandingPageNavigationContainer, LandingPageSectionsListing } from './styled';
import { SearchBar } from "../../forms/Searchbar";
import { LoggedAccountCard } from '../../cards/LoggedAccountCard';
import { IconButton } from '../../buttons/IconButton';
import { HiOutlineBell, HiOutlineCog6Tooth, HiMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Logo } from '../../common/Logo';
import { Button } from '../../buttons/Button';
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLogged?: boolean;
  isScrolled?: boolean;
  isLandingPage?: boolean;
}

export const Header = ({ isLandingPage = false, isLogged = true, isScrolled = true }: HeaderProps) => {
  const [ showMobileElement, setShowMobileElement ] = useState<boolean>(false);

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

  const LoggedInButtons = () => (
    <>
      <IconButton
        onClick={e => alert('notificações')}
        Icon={<HiOutlineBell />}
        className='logged-button-options'
        attributes={{
          "aria-label": 'Abrir notificações'
        }}
      />
      <IconButton
        onClick={e => alert('configurações')}
        Icon={<HiOutlineCog6Tooth />}
        className='logged-button-options'
        attributes={{
          "aria-label": 'Abrir configurações'
        }}
      />
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
      { !isLandingPage && <SearchBar />}
      { isLandingPage && <LandingPageNavigation mobileMenuIsOpen={showMobileElement} closeMobileMenu={() => setShowMobileElement(false)} /> }
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
  const options = [
    {
      id: 0,
      label: 'Início',
      path: '/#home'
    }, {
      id: 1,
      label: 'O que é?',
      path: '/#about-project',
    }, {
      id: 2,
      label: 'Recursos',
      path: '/#features'
    }, {
      id: 3,
      label: 'Contatos',
      path: '/#contact'
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
                <Link to={path}>
                  { label }
                </Link>
              </li>
            ))
          }
        </LandingPageSectionsListing>
      </nav>
    </LandingPageNavigationContainer>
  )
}