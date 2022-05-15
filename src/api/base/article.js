import require from '../../util/js/http/index'

export const getArticle = (num, pageSize) => {
  return require({
    method: 'GET',
    url: '/article/get',
    params: {
      num: num,
      pageSize: pageSize
    }
  })
}


export const getArticleForID = (id) => {
  return require({
    method: 'GET',
    url: '/article/getforid',
    params: {
      id: id
    }
  })
}

export const articleAdd = (data) => {
  return require({
    method: 'POST',
    url: '/article/add',
    data: data
  })
}

export const articleModify = (data) => {
  return require({
    method: 'POST',
    url: '/article/modify',
    data: data
  })
}

export const readNumAdd = (id) => {
  return require({
    method: 'GET',
    url: '/article/read/num/add',
    params: {
      id: id
    }
  })
}

export const getUserArticle = (id) => {
  return require({
    method: 'GET',
    url: '/article/get/user/article',
    params: {
      id: id
    }
  })
}

export const getFavour = () => {
  return require({
    method: 'GET',
    url: '/article/get/favour'
  })
}

export const articleDelete = (id) => {
  return require({
    method: 'POST',
    url: '/article/delete',
    data: {
      id: id
    }
  })
}

export const commentNumAdd = (articleID) => {
  return require({
    method: 'GET',
    url: '/article/commentNumAdd',
    params: {
      articleID
    }
  })
}
