<template>
  <div>
    <h1 class="glow-text">
      Play with your <br>
      friends about the final season <br>
      of <br>
      Game of Thrones!
    </h1>

    <FancyButton id="fancy-button" />

    <p>Already have a prediction? <br> Login </p>

    <SocialLogin />

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
