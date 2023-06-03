import { useState } from 'react';
import { IconButton } from '../../buttons/IconButton';
import { HiOutlineEllipsisVertical, HiOutlineUser } from 'react-icons/hi2';
import { LoggedAccountCardContainer, ProfilePicture, UserName, UserEmail, DropdownNav, DropdownOption, AccountsSection, AccountCardSummary } from './styled';
import { connectedAccounts } from '../../../utils/mock';

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
        attributes={{ id: 'user-dropdown_button', "aria-label": 'See user settings', "aria-haspopup": true, "aria-expanded": isDropdownOpen, "aria-controls": 'user-dropdown' }}
      />
      <DropdownNav id='user-dropdown' aria-hidden={!isDropdownOpen} aria-labelledby='user-dropdown_button'>
        <DropdownOption to='/app/profile' tabIndex={isDropdownOpen ? 0 : -1}>
          <HiOutlineUser size={18} /> Seu perfil
        </DropdownOption>
        <AccountsSection aria-labelledby='accounts-section-nav_title'>
          <h3 id='accounts-section-nav_title'>Outras contas</h3>
          <ul>
            {
              connectedAccounts.map((account, index) => (
                <li key={index}>
                  <AccountCardSummary tabIndex={isDropdownOpen ? 0 : -1}>
                    <img src={account.profilePicture} alt={`${account.name} portrait`} />
                    <div>
                      <p>{ account.name }</p>
                      <address>{ account.email }</address>
                    </div>
                  </AccountCardSummary>
                </li>
              ))
            }
          </ul>
        </AccountsSection>
      </DropdownNav>
    </LoggedAccountCardContainer>
  );
}