import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Aboutme from '@/views/About'
import Life from '@/views/Life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aboutme',
      name: 'Aboutme',
      component: Aboutme
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    }
  ]
})
