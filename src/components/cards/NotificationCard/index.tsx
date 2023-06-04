import { NotificationType } from "../../../utils/types/notification";
import { NotificationCardContainer, NotificationLink } from "./styled";

interface NotificationCardType {
  notification: NotificationType,
}

export const NotificationCard = ({ notification }: NotificationCardType) => {
  return (
    <NotificationCardContainer>
      <NotificationLink to={'/'} data-read={notification.wasRead}>
        <span className="read-indicator" aria-label={`essa notificação não foi lida ainda.`}></span>
        <h3>{ notification.pendingName }</h3>
      </NotificationLink>
    </NotificationCardContainer>
  )
}