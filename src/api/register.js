import require from '../util/js/http/index'

export const sendEmailCode = (email) => {
  return require({
    method: 'GET',
    url: '/send/email/code',
    params: {
      email: email
    }
  })
}

export const acceptEmailCode = (email, code) => {
  return require({
    method: 'GET',
    url: '/accept/email/code',
    params: {
      email: email,
      code: code
    }
  })
}

export const userCreate = (account, password, nickname, email, description) => {
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
