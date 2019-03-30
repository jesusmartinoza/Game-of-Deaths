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
        <Character v-for="character in all"
          :key="character.id"
          :character="character"
          v-if="character.isDead"
          />
      </div>

      <h3>
        And the King of Westeros will be...
      </h3>
        <Character id="king-of-westeros"
          :character="king" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SocialLogin from '../components/SocialLogin.vue'
import Character from '../components/Character.vue'

export default {
    name : 'PredictionScreen',
    created(){
      this.getPredictionByUser("1");
      this.getKingByUser("1");
    },
    computed: mapGetters(['all', 'king']),
    components: {
      SocialLogin,
      Character
    },
    methods: {
      ...mapActions(['getPredictionByUser', 'getKingByUser'])
    }
}
</script>

<style scoped>
#king-of-westeros {
  margin: auto;
}

h3 {
  color: black;
  font-size: 24px;
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
</style>
