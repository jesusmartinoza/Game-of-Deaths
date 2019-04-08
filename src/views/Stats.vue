<template>
  <div class="picker">
    <loading :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="true"></loading>
    <h2 class="glow-text">The world thinks the following characters will die</h2>
    <h3>Total users: 800</h3>
    <div class="characters">
      <transition-group
        name="list"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter">
          <Character v-for="(character, index) in prediction"
            class="list-item"
            :key="character.id"
            :character="character"
            :disabled="true"
            v-if="character.isDead"
            v-bind:data-index="index"
          />
      </transition-group>
    </div>

    <div v-if="king != null">
      <h3>
        And the King of Westeros will be...
      </h3>
      <Character id="king-of-westeros" class="margin-top"
          :character="king"
          :disabled="true"/>
    </div>

    <FancyButton text="Make prediction" v-else @click.native="onEditClick" />
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
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

var db = firebase.firestore();

export default {
  name: "Stats",
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    this.getPredictionByUser(id);
  },
  components: {
    SocialLogin,
    Character,
    FancyButton,
    Loading
  },
  computed: {
    ...mapGetters(['all', 'king', 'prediction', 'predictionInfo']),

    isAuthenticated() {
      var isAuthenticated = this.$store.getters.isAuthenticated;

      return isAuthenticated;
    }
  },
  methods: {
    ...mapActions(['getPredictionByUser', 'getKingByUser']),

    beforeEnter: function (el) {
      el.style.opacity = 0
    },

    enter: function (el, done) {
      var delay = el.dataset.index * 300;

      delay = delay % 2500; // Max animation duration to 2.5s

      setTimeout(function () {
        Velocity(el, {opacity: 1}, {complete: done});
      }, delay);
    },
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