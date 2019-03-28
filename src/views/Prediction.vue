<template>
  <div>
    <h2 class="glow-text">
      This are my prediction for Season 8
    </h2>

    <!-- <img class="triangle-decorator" src="../assets/triangle_decorator.png" alt=""/> -->
    <div class="container">
      <div class="characters">
        <Character v-for="character in all" :key="character.id"
          :name = "character.name"
          :picture = "character.picture"
          />
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
h3 {
  margin-bottom: 3em;
}
.container {
  background-color: #fff;
  min-height: 100vh;
  margin-bottom: -1.25em; /* Super hacky x_x */
  margin-top: -1.25em; /* Super hacky x_x */
}
.triangle-decorator {
  width: 100%;
}
</style>
