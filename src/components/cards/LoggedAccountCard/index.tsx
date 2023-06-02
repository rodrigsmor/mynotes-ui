import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { IconButton } from '../../buttons/IconButton';
import { LoggedAccountCardContainer, ProfilePicture, UserName, UserEmail, DropdownNav, DropdownOption } from './styled';
import { useState } from 'react';

export const LoggedAccountCard = () => {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState<boolean>(false);

  return (
    <LoggedAccountCardContainer className={`logged_account_card`}>
      <ProfilePicture src='https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-52039.jpg?w=2000' alt='' />
      <div className='account_card_details'>
        <UserName>Nome de usuário</UserName>
        <UserEmail>email</UserEmail>
      </div>
      <IconButton 
        Icon={<HiOutlineEllipsisVertical />}
        onClick={(e) => setIsDropdownOpen(!isDropdownOpen)} 
        attributes={{ id: 'user-dropdown_button', "aria-haspopup": true, "aria-expanded": isDropdownOpen, "aria-controls": 'user-dropdown' }}
      />
      <DropdownNav id='user-dropdown' aria-hidden={!isDropdownOpen} aria-labelledby='user-dropdown_button'>
        <DropdownOption>
          
        </DropdownOption>
      </DropdownNav>
    </LoggedAccountCardContainer>
  );
}