<template>
    <router-link to="/picker" class="button">Start</router-link>
</template>

<script>
export default {
    name : 'FancyButton'
}
</script>

<style scoped lang="scss">
$color: #FFB309;

@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.button {
  padding: 0.5em 2em;
  text-align: center;
  text-decoration: none;
  color: $color;
  border: 2px solid $color;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.6em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  margin-top: 1em;
  font-family: "Cinzel";
  &:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: $color;
    color: #fff;
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.5s ease-in-out;
    }
  }
}
</style>
