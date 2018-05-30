import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import sandbox from '../pages/sandbox'

export default new Router({
  // mode: 'history',
  // scrollBehavior(to, from, saved) {
  //   return saved ? saved : { x: 0, y: 0 }
  // },
  routes: [
    // { path: '/', name: 'home', component: home },
    { path: '/sandbox', name: 'home', component: sandbox },
    // { path: '*', component: lost },
  ],
})
