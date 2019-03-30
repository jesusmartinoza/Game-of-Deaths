import firebase from 'firebase';
import router from '@/router';

const state = {
  userData: null,
  isAuthenticated: false
};

const getters = {
  data: state => state.userData,
  isAuthenticated : state => state.userData !== null && state.userData !== undefined
};

const actions = {
  /**
   * Google Auth using Firebase
   */
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((user) => {
      console.log(user)
      commit('setUserData', user);
      commit('setIsAuthenticated', true);
    }).catch((err) => {
      console.log(err)
      alert('Oops. ' + err.message)
    });
  },

  /**
   * Facebook Auth using Firebase
   */
  loginWithFacebook({ commit }) {
    console.log("Login with Facebook")
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then((user) => {
      commit('setUserData', user);
      commit('setIsAuthenticated', true);
    }).catch((err) => {
      console.log(err)
      alert('Oops. ' + err.message)
    });
  },

  userSignOut({ commit }) {
      firebase
          .auth()
          .signOut()
          .then(() => {
              commit('setUserData', null);
              commit('setIsAuthenticated', false);
              router.push('/');
          })
          .catch(() => {
              commit('setUserData', null);
              commit('setIsAuthenticated', false);
              router.push('/');
          });
  },
};

const mutations = {
  setUserData: (state, userData) => (state.userData = userData),
  setIsAuthenticated: (state, authenticated) => (state.isAuthenticated = authenticated)
};

export default {
  state,
  getters,
  actions,
  mutations
}