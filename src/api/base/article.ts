import require from '../../util/ts/http/index'

export const getArticle = (num: number, pageSize: number) => {
  return require({
    method: 'GET',
    url: '/article/get',
    params: {
      num: num,
      pageSize: pageSize
    }
  })
}

export const getArticleForID = (id: number) => {
  return require({
    method: 'GET',
    url: '/article/getforid',
    params: {
      id: id
    }
  })
}

export const articleAdd = (data: any) => {
  return require({
    method: 'POST',
    url: '/article/add',
    data: data
  })
}

export const articleModify = (data: any) => {
  return require({
    method: 'POST',
    url: '/article/modify',
    data: data
  })
}

export const readNumAdd = (id: number, userid: number) => {
  console.log(userid)
  return require({
    method: 'GET',
    url: '/article/read/num/add',
    params: {
      id,
      userid
    }
  })
}

export const getUserArticle = (id: number) => {
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

export const articleDelete = (id: number) => {
  return require({
    method: 'POST',
    url: '/article/delete',
    data: {
      id: id
    }
  })
}

export const commentNumAdd = (articleID: number) => {
  return require({
    method: 'GET',
    url: '/article/commentNumAdd',
    params: {
      articleID
    }
  })
}
