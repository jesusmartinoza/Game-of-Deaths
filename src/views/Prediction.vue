<template>
  <div>
    <h2 class="glow-text">
      This are my prediction for Season 8
    </h2>

    <img class="triangle-decorator" src="../assets/triangle_decorator.png" alt=""/>
    <div class="container">
      <p>aa</p>
      <p>aa</p>
      <p>aa</p>
    </div>
  </div>
</template>

<script>
import SocialLogin from '../components/SocialLogin.vue'

export default {
    name : 'PredictionScreen',
    components: {
      SocialLogin
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
