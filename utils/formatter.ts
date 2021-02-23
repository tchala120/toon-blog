import dayjs from 'dayjs'

export function formatDate(date: number | string | Date, format = 'DD/MM/YYYY HH:mm'): string {
  return dayjs(date).format(format)
}

export function limitTextAndEllipse(text: string, length: number): string {
  return text.substring(0, length).concat('...')
}
