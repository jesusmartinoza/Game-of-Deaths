<template>
  <div>
    <h2 class="glow-text">
      Jesús's prediction for Season 8
    </h2>
    <p id="date" class="glow-text">
      Prediction done on June 22, 2019
    </p>

    <img class="triangle-decorator" src="../assets/triangle_decorator.png" alt=""/>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SocialLogin from '../components/SocialLogin.vue'
import Character from '../components/Character.vue'

export default {
    name : 'PredictionScreen',
    created() {
      var id = this.$route.query.id;
      this.getPredictionByUser(id);
    },
    computed: mapGetters(['all', 'king', 'prediction']),
    components: {
      SocialLogin,
      Character
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
            Velocity(
              el,
              { opacity: 1 },
              { complete: done }
            )
          }, delay)
        },
    }
}
</script>

<style scoped>
#king-of-westeros {
  margin: auto;
}

#date {
  font-size: 18px;
  margin-bottom: 7em;
}

.container {
  background-color: #fff;
  min-height: 100vh;
  margin-top: -5px; /* Super hacky x_x */
  padding-bottom: 2em;
  padding-top: 2em;
}
.triangle-decorator {
  width: 100%;
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

h3 {
  color: black;
  font-size: 24px;
}
</style>

