import firebase from 'firebase'
import 'firebase/firestore'
import router from '@/router';

var db = firebase.firestore();

const state = {
  userData: null,
  isAuthenticated: false,
  hasPrediction: null
};

const getters = {
  data: state => state.userData,
  isAuthenticated : state => state.userData !== null && state.userData !== undefined,
  hasPrediction : state => state.hasPrediction,
  userUid: state => {
    if(state.userData !== null)
      return state.userData.uid;
    else
      return 0;
  }
};

/** Login using Firebase **/
firebase.auth().onAuthStateChanged(function(user) {
  if (user && state.hasPrediction == null) {
    state.userData = user;
    state.isAuthenticated = true;
    db.doc(`users/${user.uid}`).get()
      .then((querySnapshot) => {
        if(querySnapshot.data() != undefined)
          state.hasPrediction = querySnapshot.data().hasPrediction;
        else
          state.hasPrediction = false;
      });
  } else {
    console.log("User not authenticated");
  }
});

/**
 * Register error in Firebase
 **/
function registerError(context, error) {
  if(typeof error === 'object')
    error = JSON.stringify(error);

  db.collection('errors').add({
    date: new Date(),
    error: error,
    context: context
  });
}

/**
 * Google/Facebook Auth using firebase
 **/
function firebaseAuth(commit, provider) {
  return new Promise(function(resolve, reject) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      //console.log(result)

      db.doc(`users/${result.user.uid}`).get()
        .then((querySnapshot) => {
          if(querySnapshot.data() != undefined)
            commit('setHasPrediction', querySnapshot.data().hasPrediction);
          else
            commit('setHasPrediction', false);

          commit('setUserData', result.user);
          commit('setIsAuthenticated', true);

          resolve('Success');
        }).catch((error) => {
          registerError("Writing user data", error.message);
          reject(error);
        });
    }).catch((err) => {
      registerError("loginWithGoogle()", err.message)
      reject(err);
    });
  });
}

const actions = {
  /**
   * Google Auth using Firebase
   */
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebaseAuth(commit, provider);
  },

  /**
   * Facebook Auth using Firebase
   */
  loginWithFacebook({ commit }) {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebaseAuth(commit, provider);
  },

  userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUserData', null);
          commit('setIsAuthenticated', false);
          commit('setHasPrediction', false);
          router.push('/');
        })
        .catch((error) => {
          registerError("userSignOut", error);

          commit('setUserData', null);
          commit('setIsAuthenticated', false);
          commit('setHasPrediction', false);
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