import Vue from 'vue'
import Router from 'vue-router'
import GeocodeList from '@/components/GeocodeList'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeocodeList',
      component: GeocodeList
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
