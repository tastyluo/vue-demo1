import Vue from 'vue'
import Router from 'vue-router'
import Monitor from '@/components/monitor/module'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monitor',
      component: Monitor
    }
  ]
})
