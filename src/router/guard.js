import router from ".";
import store from '../store/index'
import NProgress from "nprogress";
import init from '../util/js/init'

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 1000 });

const blackList = ['/article/contribute', '/user/personal/center/', '/article/modify']

const inBlackList = (path) => {
  let flag = false
  blackList.forEach(e => {
    if (path.indexOf(e) != -1) {
      flag = true
    }
  })
  return flag
}

let LOGIN_STATE_ROUTER_FIRST_CHECK = false
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (!LOGIN_STATE_ROUTER_FIRST_CHECK) {
    await init()
    LOGIN_STATE_ROUTER_FIRST_CHECK = true
  }
  if(!store.getters.LOGIN_STATE && inBlackList(to.path))
    next('/')

  from.meta.scrollHeight = document.documentElement.scrollTop
  next()
})
router.afterEach((to) => {
  NProgress.done()
  window.scrollTo(0, to.meta.scrollHeight || 0);
})
