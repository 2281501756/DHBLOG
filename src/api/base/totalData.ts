import require from '../../util/ts/http/index'

export function totalData() {
  return require({
    method: 'get',
    url: '/totalData'
  })
}
