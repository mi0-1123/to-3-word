import Vue from 'vue'
import Router from 'vue-router'
import GeocodeList from '@/components/GeocodeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeocodeList',
      component: GeocodeList
    }
  ]
})
