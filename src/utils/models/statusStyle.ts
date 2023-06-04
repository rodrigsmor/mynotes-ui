import { StatusEnums } from "../enums/StatusEnums";

type StatusStyleType = {
  [key in StatusEnums]: string;
}

export const StatusStyle: StatusStyleType = {
  [StatusEnums.PENDING]: 'warning',
  [StatusEnums.LATE]: 'danger',
  [StatusEnums.DONE]: 'success',
  [StatusEnums.DONELATE]: 'subtext'
}