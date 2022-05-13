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
    component: () => import('../views/Login.vue')
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
    path: '/user/personal/center/:id',
    component: () => import('../views/personalCenter/PersonalCenter')
  },
  {
    path: '/news',
    component:() => import('../views/news/news')
  },

  // 后台
  {
    path: '/admin',
    redirect: '/admin/user'
  },
  {
    path: '/manageLogin',
    component: () => import('../components/admin/manageLogin')
  },
  {
    path: '/admin',
    component: () => import('../components/admin/admin'),
    children: [
      {
        path: '/admin/user',
        component: () => import('../views/admin/user')
      }
    ]
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
