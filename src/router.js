import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/picker',
      name: 'picker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Picker.vue')
    },
    {
      path: '/prediction',
      component: () => import('./views/Prediction.vue')
    },

    {
      path: '/privacy-policy',
      component: () => import('./views/PrivacyPolicy.vue')
    },

    {
      path: '/stats',
      component: () => import('./views/Stats.vue')
    }
  ]
})
