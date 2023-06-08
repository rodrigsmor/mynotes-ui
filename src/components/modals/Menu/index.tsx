import { IconContext } from "react-icons";
import { IconButton } from "../../buttons/IconButton";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { MenuCardWrapper, MenuContainer, OptionsListingWrapper, OptionButton, OptionButtonLabel, OptionCommand, LastUpdateText, Divider } from './styled';
import { MouseEventHandler, useRef, useState } from 'react';
import useOutsideClick from "../../../utils/hooks/useOutsideClick";

type MenuProps = {
  name: string;
  className?: string;
  date?: string;
  time?: string;
  options: Array<OptionsProps>;
}

export type OptionsProps = {
  id: number;
  label: string;
  command?: string;
  Icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  elementId?: number | string;
}

export const Menu: React.FC<MenuProps> = ({ name, className, options, date = '', time = '' }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [ showMenu, setShowMenu ] = useState<boolean>(false);

  useOutsideClick(menuRef, () => setShowMenu(false));
  console.log(menuRef)
  
  return (
    <MenuContainer className="menu">
      <IconButton
        Icon={<HiOutlineEllipsisVertical />}
        onClick={e => {
          e.preventDefault();
          setShowMenu(!showMenu)
        }}
        className={className}
        attributes={{
          "aria-haspopup": true,
          "aria-controls": `Menu_${name}`,
          "aria-expanded": showMenu,
          "aria-label": 'Menu',
          "id": `Menu-Button_${name}`
        }}
      />
      <MenuCardWrapper 
        ref={menuRef}
        role={'menu'}
        id={`Menu_${name}`}
        aria-hidden={!showMenu}
        aria-labelledby={`Menu-Button_${name}`}
        className={`menu-card ${showMenu ? 'opened' : 'closed'}`}
        onBlurCapture={e => setShowMenu(false)}
      >
        <OptionsListingWrapper>
          {
            options.map(({ Icon, id, label, command, onClick }) => (
              <li key={id} role={'menuitem'}>
                <Options
                  id={id}
                  Icon={Icon}
                  label={label}
                  elementId={name}
                  command={command}
                  onClick={onClick}
                />
              </li>
            ))
          }
        </OptionsListingWrapper>
        {
          (date && time) && (
            <>
              <Divider />
              <LastUpdateText>
                editado pela última vez em <span>{ date }</span> às <span>{ time }</span>.
              </LastUpdateText>
            </>
          )
        }
      </MenuCardWrapper>
    </MenuContainer>
  );
}

const Options: React.FC<OptionsProps> = ({ id, elementId, Icon, label, command, onClick }) => {
  return (
    <OptionButton aria-labelledby={`optionButton-label_${id}-${elementId}`} onClick={onClick}>
      <IconContext.Provider value={{ size: '14px', className: 'icon-options' }}>
        { Icon }
      </IconContext.Provider>
      <OptionButtonLabel id={`optionButton-label_${id}-${elementId}`}> { label } </OptionButtonLabel>
      <OptionCommand> { command } </OptionCommand>
    </OptionButton>
  )
}