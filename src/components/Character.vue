<template>
  <div class="character">
    <img :src="require('../assets/characters/' + picture)" alt="Game of Deaths - ${name}">
    <p>{{name}}</p>
  </div>
</template>

<script>

export default {
  name: "Character",
  components: {
  },
  props: ['name', 'picture', 'isDead', 'lightComponent']
}
</script>

<style scoped>
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


</style>