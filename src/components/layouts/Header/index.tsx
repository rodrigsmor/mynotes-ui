import { ButtonWrappers, HeaderContainer } from './styled';
import { SearchBar } from "../../forms/Searchbar";
import { LoggedAccountCard } from '../../cards/LoggedAccountCard';
import { IconButton } from '../../buttons/IconButton';
import { HiOutlineBell, HiOutlineCog6Tooth, HiMagnifyingGlass } from 'react-icons/hi2';

export const Header = () => {
  return (
    <HeaderContainer>
      <IconButton
        onClick={e => alert('searchbar')}
        Icon={<HiMagnifyingGlass />}
        className='search-button-mobile-header'
      />
      <SearchBar />
      <ButtonWrappers>
        <IconButton
          onClick={e => alert('notificações')}
          Icon={<HiOutlineBell />}
        />
        <IconButton
          onClick={e => alert('configurações')}
          Icon={<HiOutlineCog6Tooth />}
        />
        <LoggedAccountCard />
      </ButtonWrappers>
    </HeaderContainer>
  );
} 