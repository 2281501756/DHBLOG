import require from '../../util/js/http'

export const getComment = (articleID) => {
  return require({
    url: '/comment/get',
    method: 'GET',
    params: {
      articleID
    }
  })
}

export const addcomment = (userID, articleID, content) => {
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

export const reply = (userID, parent, content) => {
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
