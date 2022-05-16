import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layout/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/article/contribute',
    component: () => import('../views/article/ArticleContribute')
  },
  {
    path: '/article/modify/:id',
    component: () => import('../views/article/ArticleModify')
  },
  {
    path: '/article/:id',
    component: () => import('../views/article/index')
  },
  {
    path: '/user/modify',
    component: () => import('../views/userModify')
  },
  {
    path: '/user/personal/center/:id',
    component: () => import('../views/personalCenter/PersonalCenter')
  },
  {
    path: '/news',
    component:() => import('../views/news/news')
  },
  {
    path: '/demo',
    component: () => import('../components/cropper')
  },
  {
    path: '/404',
    component: () => import('../components/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
