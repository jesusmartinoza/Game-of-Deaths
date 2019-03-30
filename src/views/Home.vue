<template>
  <div>
    <h1 class="glow-text">
      Play with your <br>
      friends about the final season <br>
      of <br>
      Game of Thrones!
    </h1>

    <FancyButton id="fancy-button" text="Start" />


    <div class="social-btns" v-if="!isAuthenticated">
        <p>Already have a prediction? <br> Login </p>
        <SocialLogin provider="Google" package="fab" icon="google" @click.native="loginWithGoogle" />
        <SocialLogin provider="Facebook" package="fab" icon="facebook-f" />
    </div>
    <div v-else>
      <SocialLogin provider="Logout" icon="sign-out-alt" package="fas" @click.native="logout" />
    </div>

    <footer>
      <!--p>
        Site made by fans
      </p>
      <p>
        There are so many visitors and web hosting are mountin’ up! So this site is supported by ads
      </p-->
    </footer>
  </div>
</template>

<script>
import FancyButton from '../components/FancyButton.vue'
import SocialLogin from '../components/SocialLogin.vue'

export default {
    name : 'MainScreen',
    components: {
      FancyButton,
      SocialLogin
    },
    computed: {
      isAuthenticated() {
        console.log(this.$store.getters.isAuthenticated)
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
      loginWithGoogle() {
        console.log("login")
        this.$store.dispatch('loginWithGoogle');
      },

      logout() {
        this.$store.dispatch('userSignOut');
      }
    }

}
</script>

<style scoped>
#fancy-button {
  margin-bottom: 2.5em;
}

h1 {
  font-size: 1.3rem;
  margin-top: 15vh;
}

footer {
  bottom: 0;
  font-size: 14px;
  left: 0;
  margin-top: 2em;
  padding: 1em;
}
</style>
