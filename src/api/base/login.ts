import require from '../../util/ts/http'

export const login = (account: string, password: string) => {
  return require({
    method: 'GET',
    url: '/login',
    params: {
      account: account,
      password: password
    }
  })
}
