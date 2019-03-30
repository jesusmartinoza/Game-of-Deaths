<template>
  <div class="picker">
    <h2 class="glow-text">Who will die in season 8?</h2>
    <h3>Guess and bet with your friends about the final season of Game Of Thrones</h3>
    <div class="characters">
        <Character v-for="character in all" :key="character.id"
          :character="character" />
    </div>

    <h3 class="glow-text">Please login to sign your prediction</h3>

    <!-- Temporal routing -->
    <router-link to="/prediction">
      <SocialLogin />
    </router-link>

    <!-- <h2>Who will gonna be the king of Westeros?</h2> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SocialLogin from '../components/SocialLogin.vue'
import Character from '../components/Character.vue'

export default {
  name: "Picker",
  components: {
    SocialLogin,
    Character
  },
  computed: mapGetters(['all'])
}
</script>

<style scoped>
h3 {
  margin: 1em;
}
</style>