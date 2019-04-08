<template>
  <div class="picker">
    <loading :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="true"></loading>
    <h2 class="glow-text">Who will die in season 8?</h2>
    <h3>Guess and bet with your friends about the final season of Game Of Thrones</h3>
    <div class="characters margin-bottom">
        <Character v-for="character in all" :key="character.id"
          :character="character" />
    </div>

    <div class="social-btns" v-if="!isAuthenticated">
        <h3 class="glow-text">Please login to sign your prediction</h3>
        <SocialLogin provider="Google" package="fab" icon="google" @click.native="signWithGoogle" />
        <SocialLogin provider="Facebook" package="fab" icon="facebook-f" />
    </div>

    <div class="margin-top prediction-box" v-else>

      <div v-if="hasPrediction">
        <font-awesome-icon :icon="['fas', 'exclamation-circle']"/> <br>
        It seems that you already have a prediction, <br> clicking Save will update your last prediction date.
      </div>

      <p>
        <FancyButton text="Save" @click.native="savePrediction" />
      </p>
    </div>

    <!-- <h2>Who will gonna be the king of Westeros?</h2> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SocialLogin from '../components/SocialLogin.vue'
import FancyButton from '../components/FancyButton.vue'
import Character from '../components/Character.vue'
import firebase from 'firebase'
import 'firebase/firestore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

var db = firebase.firestore();

export default {
  name: "Picker",
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    this.$store.dispatch('getPredictionByUser', -1);
  },
  components: {
    SocialLogin,
    Character,
    FancyButton,
    Loading
  },
  computed: {
    ...mapGetters(['all', 'hasPrediction', 'getPredictionByUser']),

    isAuthenticated() {
      var isAuthenticated = this.$store.getters.isAuthenticated;

      return isAuthenticated;
    }
  },
  methods: {
    signWithGoogle() {
      this.$store.dispatch('loginWithGoogle');
    },

    /**
     * Get all characters marked as dead and send it to Firebase
     */
    savePrediction() {
      this.isLoading = true;
      var prediction = this.all.filter( c => c.isDead);
      this.$store.dispatch('savePrediction', prediction).then(() => {
        this.isLoading = false;
      }).catch(() => this.isLoading = false);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 1em;
}
.prediction-box {
  font-size: 18px;
}
</style>