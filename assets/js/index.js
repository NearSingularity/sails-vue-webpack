import Vue from 'vue'
import Resource from 'vue-resource'

import { sync } from 'vuex-router-sync'

import app from './app.vue'
import store from './stores'
import router from './router'

Vue.use(Resource)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')

