import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/admin/admin.vue'),
      children: [
        {
          path: 'basic',
          name: 'basic',
          title: '基本表格',
          component: () => import('../pages/admin/basic')
        }
      ]
    }
  ]
})
