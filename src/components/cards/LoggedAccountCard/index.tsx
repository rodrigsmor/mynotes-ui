import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { IconButton } from '../../buttons/IconButton';
import { LoggedAccountCardContainer, ProfilePicture, UserName, UserEmail } from './styled';

export const LoggedAccountCard = () => {
  return (
    <LoggedAccountCardContainer className={`logged_account_card`}>
      <ProfilePicture src='https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-52039.jpg?w=2000' alt='' />
      <div className='account_card_details'>
        <UserName>Nome de usuário</UserName>
        <UserEmail>email</UserEmail>
      </div>
      <IconButton 
        onClick={(e) => alert('clicou')} 
        Icon={<HiOutlineEllipsisVertical />} 
      />
    </LoggedAccountCardContainer>
  );
}