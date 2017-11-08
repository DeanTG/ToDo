import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      meta: {
        title: '首页'
      },
      component: Index
    },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router