import { ReactNode } from "react";
import { NotificationType } from "../../../utils/types/notification";
import { NotificationCardContainer, NotificationLink } from "./styled";
import { formatFullDateTime } from "../../../utils/functions/formatDate";
import { HiCalendar } from "react-icons/hi2";
import { StatusStyle } from "../../../utils/models/statusStyle";

interface NotificationCardType {
  notification: NotificationType,
}

export const NotificationCard = ({ notification }: NotificationCardType) => {
  function handleDescription(description: string[]): ReactNode {
    return description.map((value) => {
      if (value.match(/<[^>]+>/g))
        return <strong> {value.replaceAll(/<[^>]+>/g, '')} </strong>
      else
        return <>{value}</>
    })
  }

  return (
    <NotificationCardContainer>
      <NotificationLink statusColor={StatusStyle[notification.status]} to={'/'} data-read={notification.wasRead}>
        <span className="read-indicator" aria-label={`essa notificação não foi lida ainda.`}></span>
        <h3>{ notification.pendingName }</h3>
        <time className="pending-date" aria-label='data da pendência' dateTime={notification.pendingDate.toISOString()}>
          <abbr title="data da pendência"><HiCalendar size={12} /></abbr> { formatFullDateTime(notification.pendingDate) }
        </time>
        <p className="description">{ handleDescription(notification.description) }</p>
        <footer>
          <p aria-label='status da pendência'>{ notification.status }</p>
          <time className="notification-date" aria-label='data da notificação' dateTime={notification.createdAt.toISOString()}>{ formatFullDateTime(notification.createdAt) }</time>
        </footer>
      </NotificationLink>
    </NotificationCardContainer>
  )
}