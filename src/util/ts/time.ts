const time_all = (T: string): string => {
  let date = new Date(T)
  let minutes: number | string = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    minutes
  )
}

const YMD = (T: string): string => {
  let date = new Date(T)
  let minutes: number | string = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

export { time_all, YMD }
