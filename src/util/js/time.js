const time_all = (T) => {
  let date = new Date(T)
  let minutes = date.getMinutes()
  if(minutes<10) minutes = '0' + minutes
  return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+minutes
}

export {
  time_all
}
