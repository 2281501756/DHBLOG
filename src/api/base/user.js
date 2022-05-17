import require from '../../util/js/http/index'

export function getForID(id) {
  return require({
    method: 'GET',
    url: '/user/get/for/id',
    params: {
      id: id
    }
  })
}

export function judge_account(account) {
  return require({
    method: 'GET',
    url: '/user/judge/account',
    params: {
      account: account
    }
  })
}

export function updatePhoto(id, photo) {
  return require({
    method: 'POST',
    url: '/user/update/photo',
    data: {
      id,
      photo
    }
  })
}

export function updateData(id, nickname, description) {
  return require({
    method: 'POST',
    url: '/user/update/data',
    data: {
      id,
      nickname,
      description
    }
  })
}
