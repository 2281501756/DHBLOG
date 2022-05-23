import require from '../../util/ts/http/index'

export function getForID(id: number) {
  return require({
    method: 'GET',
    url: '/user/get/for/id',
    params: {
      id: id
    }
  })
}

export function judge_account(account: number) {
  return require({
    method: 'GET',
    url: '/user/judge/account',
    params: {
      account: account
    }
  })
}

export function updatePhoto(id: number, photo: string) {
  return require({
    method: 'POST',
    url: '/user/update/photo',
    data: {
      id,
      photo
    }
  })
}

export function updateData(id: number, nickname: string, description: string) {
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
