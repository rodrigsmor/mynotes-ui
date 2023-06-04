import { HiOutlineBell, HiOutlineCog6Tooth } from "react-icons/hi2";
import { IconButton } from "../../buttons/IconButton";
import { HeaderTabContainers, NotificationsListing, PanelDropdownContent, PanelDropdownWrapper } from "./styled";
import { useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { notifications } from "../../../utils/mock";
import { NotificationCard } from "../../cards/NotificationCard";

interface TabsInfo {
  name: 'all' | 'notRead' | 'read';
  label: string;
}

export const LoggedInButtons = () => {
  const [ currentTab, setCurrentTab ] = useState<'all' | 'notRead' | 'read'>('all');
  const [ hasNotificationOpen, setHasNotificationOpen ] = useState<boolean>(false);

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

  return (
    <>
      <PanelDropdownWrapper className='logged-button-options'>
        <IconButton
          onClick={e => setHasNotificationOpen(!hasNotificationOpen)}
          Icon={<HiOutlineBell />}
          attributes={{
            "aria-label": 'Abrir notificações', "aria-haspopup": true, "aria-expanded": hasNotificationOpen, "aria-controls": 'notifications-panel_Dropdown'
          }}
        />
        <PanelDropdownContent aria-labelledby="notifications-panel_title" id='notifications-panel_Dropdown' className="notification" aria-hidden={!hasNotificationOpen}>
          <header>
            <h3 id="notifications-panel_title">Suas notificações</h3>
            <button className="mark-read-button"> <BsCheckAll className="icon" size={18} /> marcar como lido</button>
            <HeaderTabContainers role="tablist">
              {
                tabs.map(({ name, label }) => (
                  <button key={name} role="tab" aria-selected={currentTab === name} disabled={currentTab === name} aria-controls="notifications-content_tab" onClick={e => setCurrentTab(name)}>
                    { label }
                  </button>
                ))
              }
            </HeaderTabContainers>
          </header>
          <NotificationsListing id="notifications-content_tab" aria-label="lista de notificações">
            {
              notifications.map((notification) => <li key={notification.id}><NotificationCard notification={notification} /></li>)
            }
          </NotificationsListing>
          <footer>

          </footer>
        </PanelDropdownContent>
      </PanelDropdownWrapper>
      <IconButton
        onClick={e => alert('configurações')}
        Icon={<HiOutlineCog6Tooth />}
        className='logged-button-options'
        attributes={{
          "aria-label": 'Abrir configurações'
        }}
      />
    </>
  );
}