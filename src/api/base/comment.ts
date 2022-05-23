import require from '../../util/ts/http'

export const getComment = (articleID: number) => {
  return require({
    url: '/comment/get',
    method: 'GET',
    params: {
      articleID
    }
  })
}

export const addcomment = (
  userID: number,
  articleID: number,
  content: string
) => {
  return require({
    url: '/comment/add',
    method: 'POST',
    data: {
      userID,
      articleID,
      content
    }
  })
}

export const reply = (userID: number, parent: number, content: string) => {
  return require({
    url: '/comment/reply',
    method: 'POST',
    data: {
      userID,
      parent,
      content
    }
  })
}
