import Vuex from 'vuex';
import Vue from 'vue';
import characters from './modules/Characters';
import user from './modules/User';

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules : {
    characters,
    user
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'src/assets'
  }
});