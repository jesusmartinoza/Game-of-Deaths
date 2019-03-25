import Vuex from 'vuex';
import Vue from 'vue';
import characters from './modules/Characters';

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules : {
    characters
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'src/assets'
  }
});