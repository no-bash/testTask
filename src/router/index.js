import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import Request from '@/views/Request'
import Admin from '@/views/Admin'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
      },
      {
        path: '/request',
        name: 'RequestPage',
        component: Request
      },
      {
        path: '/admin',
        name: 'AdminPage',
        component: Admin
      }
  ]
})