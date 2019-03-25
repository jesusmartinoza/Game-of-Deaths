<template>
  <div>
    <img id="logo" src="../assets/game_of_deaths.png" alt="Game of Deaths">

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

    <div class="crossfade">
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
    </div>
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
#logo {
  max-width: 400px;
  width: 100%;
}

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

/* Background animation */
.crossfade > figure {
  animation: imageAnimation 30s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100vh;
  left: 0px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: -9999;
}

.crossfade > figure:nth-child(1) { background-image: url('https://wallpapercave.com/wp/wp2062228.jpg'); }

.crossfade > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: url('https://wallpapercave.com/wp/wp2062229.jpg');
}

.crossfade > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: url('https://wallpapercave.com/wp/wp2062334.jpg');
}

.crossfade > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: url('https://wallpapercave.com/wp/wp2062291.jpg');
}

.crossfade > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: url('https://wallpapercave.com/wp/wp2062265.jpg');
}
@keyframes
imageAnimation {  0% {
 animation-timing-function: ease-in;
 opacity: 0;
}
 8% {
 animation-timing-function: ease-out;
 opacity: 0.3;
}
 17% {
 opacity: 0.35;
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
}
</style>
