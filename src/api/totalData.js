import require from '../util/js/http/index'

export function totalData() {
  return require({
    method: 'get',
    url: '/totalData'
  })
}
