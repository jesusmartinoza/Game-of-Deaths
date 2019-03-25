<template>
  <div class="picker">
    <h2>Who will die in season 8?</h2>
    <div class="characters">
      <div class="character" v-for="character in all" :key="character.id">
        <img :src="require('../assets/characters/' + character.picture)" alt="Game of Deaths - ${character.picture}">
        <p>{{character.name}}</p>
      </div>
    </div>

    <h2>Who will gonna be the king of Westeros?</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Picker",
  methods: {
    ...mapActions(['getCharacters'])
  },
  computed: mapGetters(['all']),
  created(){
    this.getCharacters();
  }
}
</script>

<style scoped>
.characters {
  align-items: center;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#364154+0,0a2535+100 */
  background: #364154; /* Old browsers */
  background: -moz-linear-gradient(45deg, #364154 0%, #0a2535 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #364154 0%,#0a2535 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #364154 0%,#0a2535 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  backdrop-filter: blur(2px);
  border-radius: 3px;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#364154', endColorstr='#0a2535',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  margin: 0.5em;
  padding: 0.5em;
  width: 140px;
}

.character img {
  height: 100px;
  width: 100%;
}

</style>