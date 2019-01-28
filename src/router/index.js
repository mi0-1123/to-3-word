import Vue from 'vue'
import Router from 'vue-router'
import GeocodeList from '@/components/GeocodeList'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeocodeList',
      component: GeocodeList
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
