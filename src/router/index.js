import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
