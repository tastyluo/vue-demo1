import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Monitor from '@/components/monitor'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ {
      path: '/',
      components: {
        // default: topNav
      }
    }, {
      path: '/hello',
      component: Hello
    }, {
      path: '/monitor',
      component: Monitor
    }
  ]
})
