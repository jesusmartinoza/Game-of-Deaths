<template>
  <div>
    <h2 class="glow-text">
      This are my prediction for Season 8
    </h2>

    <!-- <img class="triangle-decorator" src="../assets/triangle_decorator.png" alt=""/> -->
    <div class="container">
      <h3>
        They will die
      </h3>
      <div class="characters">
        <Character v-for="character in all" :key="character.id"
          :name = "character.name"
          :picture = "character.picture"
          :isDead = "true"
          />
      </div>

      <h3>
        And the King of Westeros will be...
      </h3>
      <p id="king-of-westeros">
        <Character name="Knight King" picture="night_king.png" isKing="true" />
      </p>
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
    },
    computed: mapGetters(['all']),
    components: {
      SocialLogin,
      Character
    },
    methods: {
      ...mapActions(['getPredictionByUser'])
    }
}
</script>

<style scoped>
#king-of-westeros .character {
  margin: auto;
}

h2 {
  margin-bottom: 3em;
}

h3 {
  color: black;
  font-size: 24px;
}

.container {
  background-color: #fff;
  min-height: 100vh;
  margin-bottom: -1.25em; /* Super hacky x_x */
  margin-top: -1.25em; /* Super hacky x_x */
  padding-bottom: 2em;
  padding-top: 2em;
}
.triangle-decorator {
  width: 100%;
}
</style>
