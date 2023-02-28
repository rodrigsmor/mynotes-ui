export function formatFullDateTime(date: Date) {
  let currentYear = new Date(Date.now()).getFullYear();
  let time = `${addZeroToTime(date.getHours())}:${addZeroToTime(date.getMinutes())}h`;

  return `${date.getDate()} de ${months[date.getMonth() + 1]}${currentYear !== date.getFullYear() ? ` de ${date.getFullYear()},` : ','} ${time}`;
}

export function formatDate(date: Date) {
  return `${addZeroToTime(date.getDate())}/${addZeroToTime(date.getMonth())}/${date.getFullYear()}`;
}

export function formatTime(date: Date) {
  return `${addZeroToTime(date.getHours())}:${addZeroToTime(date.getMinutes())}`;
}

function addZeroToTime(time: number) {
  return time < 10 ? '0' + time : time;
}

type MonthsTypes = {
  [name: number]: string;
}

let months: MonthsTypes = {
  1: 'janeiro',
  2: 'fevereiro',
  3: 'março',
  4: 'abril',
  5: 'maio',
  6: 'junho',
  7: 'julho',
  8: 'agosto',
  9: 'setembro',
  10: 'outubro',
  11: 'novembro',
  12: 'dezembro'
}