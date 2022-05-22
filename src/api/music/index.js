import require from '../../util/js/http/musicRequire'

export const search = async (keywords, limit = 30, offset = 0) => {
  try {
    let res = await require({
      url: '/search',
      method: 'GET',
      params: {
        keywords,
        limit,
        offset
      }
    })
    res = res.data.result.songs
    for (let i = 0; i < res.length; i++) {
      let res2 = await require({
        url: '/song/url',
        method: 'GET',
        params: {
          id: res[i].id
        }
      })
      res[i].url = res2.data.data[0].url
    }
    return Promise.resolve(res)
  }
  catch (e) {
    return Promise.reject()
  }
}
