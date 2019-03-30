<template>
  <div class="picker">
    <h2 class="glow-text">Who will die in season 8?</h2>
    <h3>Guess and bet with your friends about the final season of Game Of Thrones</h3>
    <div class="characters">
        <Character v-for="character in all" :key="character.id"
          :character="character" />
    </div>

    <h3 class="glow-text">Please login to sign your prediction</h3>

    <SocialLogin @click.native="signWithGoogle" />

    <!-- <h2>Who will gonna be the king of Westeros?</h2> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SocialLogin from '../components/SocialLogin.vue'
import Character from '../components/Character.vue'
import firebase from 'firebase'
import 'firebase/firestore'

var db = firebase.firestore();

export default {
  name: "Picker",
  components: {
    SocialLogin,
    Character
  },
  computed: mapGetters(['all']),
  methods: {
    ...mapActions(['loginWithGoogle', 'loginWithFacebook']),

    signWithGoogle() {
      this.loginWithGoogle();
    },
    
    /**
     * Get all characters marked as dead and send it to Firebase
     */
    savePrediction() {
      var prediction = this.all.filter( c => c.isDead);
      var userRef = db.collection('people').doc('1');

      // Convert Character objects to pure JS objetcs
      prediction = prediction.map((obj)=> {return Object.assign({}, obj)});

      userRef.set({
        prediction: prediction
      }, {merge:true});
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 1em;
}
</style>