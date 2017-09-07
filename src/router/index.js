import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Aboutme from '@/views/About'

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
    }
  ]
})
