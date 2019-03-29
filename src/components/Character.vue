<template>
  <div class="character">
    <div id="crown" v-if="isKing"><span></span></div>
    <span id="dizzy" class="emoji" v-if="isDead">😵<span></span></span>
    <img :src="require('../assets/characters/' + picture)" alt="Game of Deaths - ${name}">
    <p>{{name}}</p>
  </div>
</template>

<script>

export default {
  name: "Character",
  components: {
  },
  props: ['name', 'picture', 'isDead', 'isKing', 'lightComponent']
}
</script>

<style scoped>
.emoji {
  position: absolute;
  right: -10px;
  overflow: hidden;
}

#dizzy {
  font-size: 44px;
  position: absolute;
  right: -10px;
  top: -5px;
  transform: rotateZ(10deg);
}

.character {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#364154+0,0a2535+100 */
  background: #364154; /* Old browsers */
  background: -moz-linear-gradient(45deg, #364154 0%, #0a2535 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #364154 0%,#0a2535 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #364154 0%,#0a2535 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  border-radius: 13px 3px 13px 3px;
  box-shadow: 0px 0px 8px #000a;
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#364154', endColorstr='#0a2535',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  margin: 0.5em;
  position: relative;
  transition: 500ms;
  width: 120px;
}

.character:hover {
  transform: scale(1.05);
}

.character img {
  border-radius: 13px 3px 0 0;
  width: 100%;
}

.character p {
  font-size: 18px;
  height: 40px;
  margin: 0.25em 0.5em;
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
  transform: rotateZ(10deg);
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
	transition-property: all;

	height: 44px;
	width: 55px;
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