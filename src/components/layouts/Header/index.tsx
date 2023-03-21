import { ButtonWrappers, HeaderContainer, LandingPageNavigationContainer } from './styled';
import { SearchBar } from "../../forms/Searchbar";
import { LoggedAccountCard } from '../../cards/LoggedAccountCard';
import { IconButton } from '../../buttons/IconButton';
import { HiOutlineBell, HiOutlineCog6Tooth, HiMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineMenu } from 'react-icons/hi';
import { Logo } from '../../common/Logo';
import { Button } from '../../buttons/Button';
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';

interface HeaderProps {
  isLogged?: boolean;
  isLandingPage?: boolean;
}

export const Header = ({ isLandingPage = false, isLogged = true }: HeaderProps) => {
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
      />
      <IconButton
        onClick={e => alert('configurações')}
        Icon={<HiOutlineCog6Tooth />}
        className='logged-button-options'
      />
    </>
  )
  
  return (
    <HeaderContainer className={`${isLandingPage && 'landing-page_Header'}`}>
      {isLandingPage && <Logo />}
      <IconButton
        onClick={e => alert('searchbar')}
        Icon={isLandingPage ? <HiOutlineMenu /> : <HiMagnifyingGlass />}
        className='search-button-mobile-header'
      />
      { !isLandingPage && <SearchBar />}
      { isLandingPage && <LandingPageNavigation /> }
      <ButtonWrappers>
        {isLogged && <LoggedInButtons />}
        {isLandingPage && <LandingPageButtons />}
        {isLogged && <LoggedAccountCard />}
      </ButtonWrappers>
    </HeaderContainer>
  );
}

const LandingPageNavigation = () => {
  return (
    <LandingPageNavigationContainer className='header_navigation-LandingPage'>

    </LandingPageNavigationContainer>
  )
}