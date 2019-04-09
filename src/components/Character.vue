<template>
  <div class="character">
    <div id="crown" :class="{'scaleUp': character.isKing && disabled}"><span></span></div>
    <span id="dizzy" :class="{'scaleUp': character.isDead && !character.isKing && disabled}">😵</span>
    <img :src="require('../assets/characters/' + character.picture)" alt="Game of Deaths - ${character.name}">
    <div class="name">
      <p class="triangle-bottom-left"></p>
      {{character.name}}
    </div>
    <div id="options" v-if="!disabled">
      <img v-on:click="changeKingStatus" src="../assets/emoji_crown_color.png" alt="" v-show="character.isKing">
      <img v-on:click="changeKingStatus" src="../assets/emoji_crown.png" alt="" v-if="!character.isKing">
      <img v-on:click="changeDeadStatus" src="../assets/emoji_dead_color.png" alt="" v-show="character.isDead">
      <img v-on:click="changeDeadStatus" src="../assets/emoji_dead.png" alt="" v-if="!character.isDead">
    </div>

    <div class="dead-counter" v-if="character.deadCounter != null">
      <span>😵 {{character.deadCounter}} votes</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Character",
  components: {
  },
  props: ['character', 'disabled'],
  methods : {
    changeDeadStatus() {
      if(!this.disabled)
        this.character.isDead = !this.character.isDead;
    },

    changeKingStatus() {
      if(!this.disabled)
        this.$store.dispatch('changeKing', this.character);
    }
  }
}
</script>

<style scoped>
#dizzy {
  font-size: 44px;
  position: absolute;
  right: -10px;
  top: -5px;
  transition: 150ms ease-out;
  transform: rotateZ(10deg) scale(0);
}

#options img {
  border-radius: 0;
  height: 30px;
  margin: 0 8px 8px 8px;
  transition: 300ms;
  width: 30px;
}

#options .opacity100 {
  opacity: 1;
}

.dead-counter {
  font-weight: bold;
  height: 14px;
  line-height: 14px;
  padding: 0.5em 0;
}

.character {
  background: #1F3345;
  border-radius: 13px 3px 13px 3px;
  box-shadow: 0px 0px 8px #000a;
  cursor: pointer;
  display: inline-block;
  flex-direction: column;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#364154', endColorstr='#0a2535',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  margin: 0.5em;
  position: relative;
  transition: 500ms;
  width: 155px;
}

.character img {
  border-radius: 13px 3px 0 0;
  height: 155px;
  width: 100%;
}

.character .name {
  font-size: 18px;
  padding: 0.5em 0;
}

.name {
  position: relative;
}

.triangle-bottom-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 12px 155px;
  margin: 0 !important;
  position: absolute;
  top: -15px;
  border-color: transparent transparent #203345 transparent;
}

/**
 * The shiny crown
 */
 #crown {
	background: url("../assets/crown_emoji.png") 0 0 no-repeat;
  background-size: contain;
  display: block;
	height: 44px;
  overflow: hidden;
  position: absolute;
  right: -20px;
  top: -20px;
  transition: transform 0.6s cubic-bezier(0.39, 0.475, 0.565, 1.37);
  transition-delay: 400ms;
  transform: rotateZ(10deg) scale(0);
  width: 55px;
}

#crown span {
  animation: sheen 4s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
	display: block;
	background: url("../assets/shine.png") no-repeat;
  border-radius: 50%;

  opacity: 0.8;
  transform: rotateZ(-60deg);
	transition-property: all;

	height: 44px;
	width: 34px;
}

.scaleUp {
  transform: rotateZ(15deg) scale(1) !important;
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes sheen {
  0% {
  	background-position: -40px -60px;
  }
  50%, 100% {
  	background-position: 100px 100px;
  }
}
</style>