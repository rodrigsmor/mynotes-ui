import { StatusEnums } from "../enums/StatusEnums";

export type NotificationType = {
  id: number,
  createdAt: Date,
  wasRead: boolean,
  pendingDate: Date,
  pendingName: string,
  status: StatusEnums,
  description: string[],
}