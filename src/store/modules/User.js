import firebase from 'firebase'
import 'firebase/firestore'
import router from '@/router';

var db = firebase.firestore();

const state = {
  userData: null,
  isAuthenticated: false,
  hasPrediction: false
};

const getters = {
  data: state => state.userData,
  isAuthenticated : state => state.userData !== null && state.userData !== undefined,
  hasPrediction : state => state.hasPrediction
};

/**
 * Register error in Firebase
 **/
function registerError(context, error) {

console.log(typeof(error))
  if(typeof error === 'object')
    error = JSON.stringify(error);
  console.log(error)

  db.collection('errors').add({
    date: new Date(),
    error: error,
    context: context
  });
}

const actions = {
  /**
   * Google Auth using Firebase
   */
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      //console.log(result)

      db.doc(`users/${result.user.uid}`).get()
        .then((querySnapshot) => {
          commit('setHasPrediction', querySnapshot.data().hasPrediction);
          commit('setUserData', result.user);
          commit('setIsAuthenticated', true);
        }).catch((error) => {
          console.log(error)
          registerError("Writing user data", error)
        });
    }).catch((err) => {
      console.log(err)
      registerError("loginWithGoogle()", err.message)
    });
  },

  /**
   * Facebook Auth using Firebase
   */
  loginWithFacebook({ commit }) {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      //console.log(result)

      db.doc(`users/${result.user.uid}`).get()
        .then((querySnapshot) => {
          commit('setHasPrediction', querySnapshot.data().hasPrediction);
          commit('setUserData', result.user);
          commit('setIsAuthenticated', true);
        }).catch((error) => {
          console.log(error)
          registerError("Writing user data", error)
        });
    }).catch((err) => {
      console.log(err)
      registerError("loginWithGoogle()", err.message)
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
        .catch((error) => {
          registerError("userSignOut", error);

          commit('setUserData', null);
          commit('setIsAuthenticated', false);
          router.push('/');
        });
  },
};

const mutations = {
  setUserData: (state, userData) => (state.userData = userData),
  setIsAuthenticated: (state, authenticated) => (state.isAuthenticated = authenticated),
  setHasPrediction: (state, hasPrediction) => (state.hasPrediction = hasPrediction)
};

export default {
  state,
  getters,
  actions,
  mutations
}