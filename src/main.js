import Vue from 'vue'
import App from './App.vue'
import '@/firebase/';
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGoogle, faFacebookF)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
