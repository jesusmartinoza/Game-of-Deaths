import Vue from 'vue'
import App from './App.vue'
import '@/firebase/';
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF, faWhatsapp, faReddit, faTwitter, faLine, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

var SocialSharing = require('vue-social-sharing');

library.add(
  faGoogle,
  faFacebookF,
  faSignOutAlt,
  faCheck,
  faExclamationCircle,
  faWhatsapp,
  faReddit,
  faTwitter,
  faLine,
  faTelegramPlane
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'));
Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
