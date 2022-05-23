import cookies from 'js-cookie'
export const set_token = (token: string): void => {
  cookies.set('token', token, { expires: 7 })
}
export const delete_token = (): void => {
  cookies.remove('token')
}
