import require from '../util/js/http'

export const login = (account, password) => {
  return require({
    method: 'GET',
    url: '/login',
    params: {
      account: account,
      password: password
    }
  })
}
