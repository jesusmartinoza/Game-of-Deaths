<template>
  <div>
    <h1>
      Play with your <br>
      friends about the final season <br>
      of <br>
      Game of Thrones!
    </h1>

    <FancyButton />

    <footer>
      <p>
        Site made by fans
      </p>
      <!--p>
        There are so many visitors and web hosting are mountin’ up! So this site is supported by ads
      </p-->
    </footer>
  </div>
</template>

<script>
import FancyButton from '../components/FancyButton.vue'

export default {
    name : 'MainScreen',
    components: {
      FancyButton
    }
}
</script>

<style scoped>
h1 {
  font-size: 1.3rem;
  margin-top: 15vh;
  text-shadow: 0px 0px 4px #ffaa;
}

footer {
  bottom: 0;
  font-family: "Avenir";
  font-size: 14px;
  left: 0;
  margin-top: 2em;
  padding: 1em;
}
</style>
