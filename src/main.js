// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'animate.css'
import 'vue-awesome/icons'
import axios from 'axios'
import router from './router'
import store from './store'
import Icon from 'vue-awesome/components/Icon'
import app from './App.vue'

// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app />',
  components: {
    app,
    Icon
  }
})
