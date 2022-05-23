import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layout/index.vue')
  }
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../components/Login.vue')
  // },
  // {
  //   path: '/article/contribute',
  //   component: () => import('../views/article/ArticleContribute.vue')
  // },
  // {
  //   path: '/article/modify/:id',
  //   component: () => import('../views/article/ArticleModify.vue')
  // },
  // {
  //   path: '/article/:id',
  //   component: () => import('../views/article/index.vue')
  // },
  // {
  //   path: '/user/modify',
  //   component: () => import('../views/userModify/index.vue')
  // },
  // {
  //   path: '/user/personal/center/:id',
  //   component: () => import('../views/personalCenter/PersonalCenter.vue')
  // },
  // {
  //   path: '/news',
  //   component: () => import('../views/news/news.vue')
  // },
  // {
  //   path: '/music',
  //   component: () => import('../views/music/index.vue')
  // },
  // {
  //   path: '/404',
  //   component: () => import('../components/404.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
