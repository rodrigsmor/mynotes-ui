import { BsCheckAll } from "react-icons/bs";
import { ReactElement, useState } from "react";
import { notifications } from "../../../utils/mock";
import { IconButton } from "../../buttons/IconButton";
import { NotificationCard } from "../../cards/NotificationCard";
import { HiOutlineBell, HiOutlineCog6Tooth, HiOutlineQuestionMarkCircle, HiOutlineShieldExclamation, HiOutlineUser, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HeaderTabContainers, NotificationsListing, PanelDropdownContent, PanelDropdownWrapper, SettingsLink, SettingsOptionsWrapper } from "./styled";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";

interface TabsInfo {
  name: 'all' | 'notRead' | 'read';
  label: string;
}

interface SettingsTabType {
  name: string;
  path: string;
  title: string;
  Icon: ReactElement;
  description: string;
}

export const LoggedInButtons = () => {
  const { pathname } = useLocation();

  const [ hasSettingsOpen, setHasSettingsOpen ] = useState<boolean>(false);
  const [ hasNotificationOpen, setHasNotificationOpen ] = useState<boolean>(false);
  const [ currentTab, setCurrentTab ] = useState<'all' | 'notRead' | 'read'>('all');

  const tabs: Array<TabsInfo> = [
    {
      name: 'all',
      label: 'Todas',
    }, {
      name: 'read',
      label: 'Lidas',
    }, {
      name: 'notRead',
      label: 'Não lidas',
    }, 
  ]

  const settings: SettingsTabType[] = [
    {
      name: 'account',
      title: 'Minha conta',
      path: '/app/settings/account',
      Icon: <HiOutlineUser />,
      description: 'Suas informações pessoais.',
    }, {
      name: 'preferences',
      title: 'Preferências',
      path: '/app/settings/preferences',
      Icon: <HiOutlineWrenchScrewdriver />,
      description: 'Tema padrão, tamanho das fontes e outras preferências.',
    }, {
      name: 'security',
      title: 'Segurança',
      path: '/app/settings/security',
      Icon: <HiOutlineShieldExclamation />,
      description: 'Autenticação de dois fatores, navegadores conectados, contas vinculadas e outros.',
    }, {
      name: 'help',
      title: 'Ajuda',
      path: '/app/settings/help',
      Icon: <HiOutlineQuestionMarkCircle />,
      description: 'Termos de uso, FAQ e atendimento ao usuário.',
    }
  ]

  return (
    <>
      <PanelDropdownWrapper className='logged-button-options'>
        <IconButton
          onClick={e => setHasNotificationOpen(!hasNotificationOpen)}
          Icon={<HiOutlineBell />}
          attributes={{
            "aria-label": `${hasNotificationOpen ? 'Fechar' : 'Abrir'} notificações`, "aria-haspopup": true, "aria-expanded": hasNotificationOpen, "aria-controls": 'notifications-panel_Dropdown'
          }}
        />
        <PanelDropdownContent aria-labelledby="notifications-panel_title" id='notifications-panel_Dropdown' className="notification" aria-hidden={!hasNotificationOpen}>
          <span aria-hidden={true}></span>
          <header>
            <h3 id="notifications-panel_title">Suas notificações</h3>
            <button className="mark-read-button" tabIndex={hasNotificationOpen ? 0 : -1}> <BsCheckAll className="icon" size={18} /> marcar como lido</button>
            <HeaderTabContainers role="tablist">
              {
                tabs.map(({ name, label }) => (
                  <button key={name} role="tab" aria-selected={currentTab === name} disabled={currentTab === name} aria-controls="notifications-content_tab" tabIndex={hasNotificationOpen ? 0 : -1} onClick={e => setCurrentTab(name)}>
                    { label }
                  </button>
                ))
              }
            </HeaderTabContainers>
          </header>
          <NotificationsListing id="notifications-content_tab" aria-label="lista de notificações">
            {
              notifications.map((notification) => <li key={notification.id}><NotificationCard notification={notification} isFocusable={hasNotificationOpen} /></li>)
            }
          </NotificationsListing>
        </PanelDropdownContent>
      </PanelDropdownWrapper>
      <PanelDropdownWrapper >
        <IconButton
          onClick={e => setHasSettingsOpen(!hasSettingsOpen)}
          Icon={<HiOutlineCog6Tooth />}
          className='logged-button-options'
          attributes={{
            "aria-label": 'Abrir configurações', "aria-haspopup": true, "aria-expanded": hasSettingsOpen, "aria-controls": 'settings-panel_Dropdown'
          }}
        />
        <PanelDropdownContent aria-labelledby="settings-panel_title" id='settings-panel_Dropdown' aria-hidden={!hasSettingsOpen}>
          <span aria-hidden={true}></span>
          <header>
            <h3 id="settings-panel_title">Configurações</h3>
          </header>
          <SettingsOptionsWrapper>
            {
              settings.map((setting) => (
                <li key={setting.name} aria-labelledby={`settings-option-${setting.name}`}>
                  <SettingsLink to={setting.path} aria-selected={pathname === setting.name} tabIndex={hasSettingsOpen ? 0 : -1}>
                    <IconContext.Provider value={{ size: '18px', className: 'icon' }}>
                      { setting.Icon }
                    </IconContext.Provider>
                    <div>
                      <h4 id={`settings-option-${setting.name}`}>{ setting.title }</h4>
                      <p>{ setting.description }</p>
                    </div>
                  </SettingsLink>
                </li>
              ))
            }
          </SettingsOptionsWrapper>
        </PanelDropdownContent>
      </PanelDropdownWrapper>
    </>
  );
}