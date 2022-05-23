import require from '../../util/ts/http/index'

export const sendEmailCode = (email: string) => {
  return require({
    method: 'GET',
    url: '/send/email/code',
    params: {
      email: email
    }
  })
}

export const acceptEmailCode = (email: string, code: string) => {
  return require({
    method: 'GET',
    url: '/accept/email/code',
    params: {
      email: email,
      code: code
    }
  })
}

export const userCreate = (
  account: string,
  password: string,
  nickname: string,
  email: string,
  description: string
) => {
  return require({
    method: 'post',
    url: '/user/create',
    data: {
      account: account,
      password: password,
      nickname: nickname,
      email: email,
      description: description
    }
  })
}
