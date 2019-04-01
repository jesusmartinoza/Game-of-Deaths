<template>
  <div>
    <div class="prediction-info">
      <div>
        <img class="user-picture" :src="predictionInfo.user.picture" alt="Profile picture">
        <h2 class="glow-text">
          {{predictionInfo.user.name}}'s prediction for Season 8
        </h2>
        <p id="date" class="glow-text">
          Prediction done on <span>{{ predictionInfo.date | moment("dddd, MMMM Do YYYY") }}</span>
        </p>
      </div>
    </div>

    <div class="container">
      <h3>
        They will die
      </h3>
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

      <div v-if="prediction.isKing != null">
        <h3>
          And the King of Westeros will be...
        </h3>
        <Character id="king-of-westeros"
            :character="king"/>
      </div>

      <div class="margin-top">
        <FancyButton text="Edit" v-if="showEditButton" @click.native="onEditClick" />
        <FancyButton text="Share" @click.native="savePrediction" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SocialLogin from '../components/SocialLogin.vue'
import FancyButton from '../components/FancyButton.vue'
import Character from '../components/Character.vue'
import router from '@/router'

export default {
    name : 'PredictionScreen',
    created() {
      var id = this.$route.query.id;
      this.getPredictionByUser(id);
    },
    computed: {
      ...mapGetters(['all', 'king', 'prediction', 'predictionInfo']),

      showEditButton() {
        var isAuthenticated = this.$store.getters.isAuthenticated;
        var userId = this.$store.getters.userUid;

        return isAuthenticated && userId == this.$route.query.id;
      }
    },
    components: {
      Character,
      FancyButton,
      SocialLogin
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

      onEditClick() {
        router.push("/picker");
      }
    }
}
</script>

<style scoped>
#king-of-westeros {
  margin: auto;
}

#date {
  font-size: 18px;
  margin-bottom: 4em;
}

.list-item {
  display: inline-block;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.prediction-info {
  min-height: 200px;
}

.user-picture {
  border-radius: 50%;
  border: 4px solid #1F3345;
  border-spacing: 4px;
  border-collapse: separate;
  height: 100px;
  margin-top: 2em;
}

h3 {
  color: white;
  font-size: 24px;
}
</style>

