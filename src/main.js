// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Dialog, Popover, Loading} from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import app from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$http2 = axios
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Loading)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app v-bind="{tempData: tempData}" />',
  components: {
    app
  }
})
