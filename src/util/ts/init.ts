import require from './http'
import cookies from 'js-cookie'
// import store from '../../store/index'

async function init() {
  let token = cookies.get('token')
  let res = await require({
    url: `/useToken?token=${token}`,
    method: 'GET'
  })
  // if (res.data.message === 'succeed') {
  //   store.dispatch('set_user', res.data.user)
  // }
}
export default init
