import { ButtonWrappers, HeaderContainer } from './styled';
import { SearchBar } from "../../forms/Searchbar";
import { LoggedAccountCard } from '../../cards/LoggedAccountCard';
import { IconButton } from '../../buttons/IconButton';
import { HiOutlineBell, HiOutlineCog6Tooth } from 'react-icons/hi2';

export const Header = () => {
  return (
    <HeaderContainer>
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