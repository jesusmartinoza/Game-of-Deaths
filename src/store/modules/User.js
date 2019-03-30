import firebase from 'firebase';

const state = {
  userData: {},
  isAuthenticated: false
};

const getters = {
  data: state => state.userData,
  isAuthenticated : state => state.isAuthenticated
};

const actions = {
  /**
   * Google Auth using Firebase
   */
  async loginWithGoogle({ commit }) {
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
  async loginWithFacebook({ commit }) {
    console.log("Login with Facebook")
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then((user) => {
      commit('setUserData', user);
      commit('setIsAuthenticated', true);
    }).catch((err) => {
      console.log(err)
      alert('Oops. ' + err.message)
    });
  }
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