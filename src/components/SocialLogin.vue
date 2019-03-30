<template>
  <div id="social-btns">
    <button class="movebtn" :class="[ provider == 'Google' ? 'google' : 'facebook' ]">
      {{provider}} <font-awesome-icon :icon="['fab', `${icon}`]"/>
    </button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "SocialLogin",

  created() {
    console.log(this.provider)
  },

  props: ['icon', 'provider']
}
</script>

<style scoped>
/***
 * Social buttons by Peeyush Gupta
 * https://codepen.io/Peeyush200/pen/mLwvJB
 */

button {
  padding: 8px 12px;
  margin: 4px 0;
  font-family: 'Montserrat', sans-serif;
  border: 2px solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all .3s;
}
button:hover {
  background: #646171;
  color: #fff;
  border-color: #646171;
  box-shadow: 0px 0 5px 0 #646171;
}

/* --- Animated Buttons --- */
.movebtn{
  background-color: transparent;
  display:inline-block;
  max-width: 140px;
  width:100%;
  background-image: none;
  padding: 8px 10px;
  border-radius: 0;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
}

.google {
  border: 2px solid #e04c40;
  color: #ffffff;
  background-color: #e04c40;
}
.facebook {
  border: 2px solid #2e4da7;
  color: #ffffff;
  background-color: #2e4da7;
}
.google:focus,
.google:hover,
.google:active {
  background-color: #ea3728;
  color: #FFF;
  border-color: #ea3728;
  box-shadow: none;
}
.facebook:focus,
.facebook:hover,
.facebook:active {
  background-color: #1e439b;
  color: #FFF;
  border-color: #1e439b;
  box-shadow: none;
}
</style>