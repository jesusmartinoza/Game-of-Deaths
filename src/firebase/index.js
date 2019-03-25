import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLIgraxIw7zGqIgyJ_ERCn65LGmW6bbrk",
  authDomain: "game-of-deaths.firebaseapp.com",
  databaseURL: "https://game-of-deaths.firebaseio.com",
  projectId: "game-of-deaths",
  storageBucket: "game-of-deaths.appspot.com",
  messagingSenderId: "422575326716"
};
firebase.initializeApp(config);
