import { useRef, useState } from 'react';
import { Button } from '../../buttons/Button';
import { IconButton } from '../../buttons/IconButton';
import { connectedAccounts } from '../../../utils/mock';
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';
import { HiArrowLeftOnRectangle, HiOutlineEllipsisVertical, HiOutlineUser, HiOutlineUserPlus } from 'react-icons/hi2';
import { LoggedAccountCardContainer, ProfilePicture, UserName, UserEmail, DropdownNav, DropdownOption, AccountsSection, AccountCardSummary } from './styled';
import useOutsideClick from '../../../utils/hooks/useOutsideClick';

export const LoggedAccountCard = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ isDropdownOpen, setIsDropdownOpen ] = useState<boolean>(false);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));
  
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
      <DropdownNav ref={dropdownRef} id='user-dropdown' aria-hidden={!isDropdownOpen} aria-labelledby='user-dropdown_button'>
        <DropdownOption to='/app/profile' tabIndex={isDropdownOpen ? 0 : -1}>
          <HiOutlineUser size={18} /> Seu perfil
        </DropdownOption>
        <AccountsSection aria-labelledby='accounts-section-nav_title'>
          <h3 id='accounts-section-nav_title'>Outras contas</h3>
          <ul role='tablist'>
            {
              connectedAccounts.map((account, index) => (
                <li key={index} role='presentation'>
                  <AccountCardSummary role='tab' aria-selected={false} to={`/auth/login?token=${account.id}`} tabIndex={isDropdownOpen ? 0 : -1}>
                    <img src={account.profilePicture} alt={`${account.name} portrait`} />
                    <div>
                      <p>{ account.name }</p>
                      <address>{ account.email }</address>
                    </div>
                  </AccountCardSummary>
                </li>
              ))
            }
            <li>
              <Button theme={ThemeEnums.SURFACE} onClick={() => { }} name='add-account_button' props={{ tabIndex: isDropdownOpen ? 0 : -1 }}>
                <><span><HiOutlineUserPlus size={18} /></span> adicionar novas</>
              </Button>
            </li>
          </ul>
          <Button theme={ThemeEnums.SURFACE} onClick={() => { }} name='add-account_button' props={{ tabIndex: isDropdownOpen ? 0 : -1 }}>
            <><span><HiArrowLeftOnRectangle size={18} /> </span> desconectar</>
          </Button>
        </AccountsSection>
      </DropdownNav>
    </LoggedAccountCardContainer>
  );
}