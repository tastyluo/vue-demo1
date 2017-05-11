import Vue from 'vue'
import Router from 'vue-router'
// import topNav from '@/components/navigation/topNav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        // default: topNav
      }
    }
  ]
})
