import Vue from 'vue'
import App from './App.vue'
import '@/firebase/';
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faWhatsapp, faReddit, faTwitter, faLine, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import Meta from 'vue-meta'

Vue.use(VueAnalytics, {
  id: 'UA-55847702-7',
  router,
  disable: true // or function
});

var SocialSharing = require('vue-social-sharing');

library.add(
  faGoogle,
  faFacebook,
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
Vue.use(Meta);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
