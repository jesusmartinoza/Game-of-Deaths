<template>
  <div>
    <div class="prediction-info">
      <loading :active.sync="prediction.length == 0"
      :can-cancel="false"
      :color="loaderColor"
      :background-color="loaderBk"
      :is-full-page="true"></loading>
      <div>
        <img class="user-picture" :src="predictionInfo.user.picture" alt="Profile picture">
        <h2 class="glow-text">
          {{predictionInfo.user.name}}'s prediction for Season 8
        </h2>
        <p id="date" class="glow-text">
          Prediction done on <span>{{ predictionInfo.date | moment("dddd, MMMM Do YYYY") }}</span>
        </p>
      </div>
    </div>

    <div class="container">
      <h3>
        I think they will die
      </h3>
      <div class="characters">
        <transition-group
          name="list"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter">
            <Character v-for="(character, index) in prediction"
              class="list-item"
              :key="character.id"
              :character="character"
              :disabled="true"
              v-if="character.isDead"
              v-bind:data-index="index"
            />
        </transition-group>
      </div>

      <div v-if="king != null">
        <h3>
          And the King of Westeros will be...
        </h3>
        <Character id="king-of-westeros" class="margin-top"
            :character="king"
            :disabled="true"/>
      </div>

      <div class="margin-top">
        <FancyButton text="Edit" v-if="showEditButton" @click.native="onEditClick" />
        <FancyButton text="Make prediction" v-else @click.native="onEditClick" />

        <h5>
          Share
        </h5>
        <social-sharing :url="'https://gameofdeaths.com' + $route.fullPath"
                      title="Game of Deaths"
                      description="This is my prediction for season 8 of Game of Thrones"
                      quote="This is my prediction for season 8 of Game of Thrones"
                      hashtags="GameOfThrones,GameOfDeaths"
                      media="https://gameofdeaths.com/daenerys_king_of_westeros.jpg"
                      twitter-user="game_of_deaths"
                      inline-template>
          <div>
              <network network="facebook">
                  <button class="share-btn fb">Facebook <font-awesome-icon :icon="['fab', `facebook-f`]"/></button>
              </network>
              <!-- <network network="line">
                  <button class="share-btn line">Line <font-awesome-icon :icon="['fab', `line`]"/></button>
              </network> -->
              <network network="reddit">
                  <button class="share-btn reddit">Reddit <font-awesome-icon :icon="['fab', `reddit`]"/></button>
              </network>
              <network network="twitter">
                  <button class="share-btn twitter">Twitter <font-awesome-icon :icon="['fab', `twitter`]"/></button>
              </network>
              <network network="whatsapp">
                  <button class="share-btn whatsapp">Whatsapp <font-awesome-icon :icon="['fab', `whatsapp`]"/></button>
              </network>
              <network network="telegram">
                  <button class="share-btn telegram">Telegram <font-awesome-icon :icon="['fab', `telegram-plane`]"/></button>
              </network>
          </div>
        </social-sharing>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SocialLogin from '../components/SocialLogin.vue'
import FancyButton from '../components/FancyButton.vue'
import Character from '../components/Character.vue'
import router from '@/router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    name : 'PredictionScreen',
    data() {
      return {
        isLoading: false,
        loaderBk: "#000000",
        loaderColor: "#FFB309"
      }
    },
    created() {
      var id = this.$route.query.id;
      this.getPredictionByUser(id);
    },
    computed: {
      ...mapGetters(['all', 'king', 'prediction', 'predictionInfo']),

      showEditButton() {
        var isAuthenticated = this.$store.getters.isAuthenticated;
        var userId = this.$store.getters.userUid;

        return isAuthenticated && userId == this.$route.query.id;
      },
    },
    components: {
      Character,
      FancyButton,
      Loading,
      SocialLogin
    },
    methods: {
      ...mapActions(['getPredictionByUser', 'getKingByUser']),

      beforeEnter: function (el) {
        el.style.opacity = 0
      },

      enter: function (el, done) {
        var delay = el.dataset.index * 300;

        delay = delay % 2500; // Max animation duration to 2.5s

        setTimeout(function () {
          Velocity(el, {opacity: 1}, {complete: done});
        }, delay);
      },

      onEditClick() {
        if(!this.showEditButton)
          this.$ga.event('Prediction', 'startClick', 'start')
        router.push("/picker");
      }
    }
}
</script>

<style scoped>
#king-of-westeros {
  margin: auto;
}

#date {
  font-size: 18px;
  margin-bottom: 4em;
}

.prediction-info {
  min-height: 200px;
}

.user-picture {
  border-radius: 50%;
  border: 4px solid #1F3345;
  border-spacing: 4px;
  border-collapse: separate;
  height: 100px;
  margin-top: 2em;
}

h3, h5 {
  color: white;
  font-size: 24px;
}

h5 {
  margin-top: 0.5em;
  margin-bottom: 8px;
}

</style>

<style>
.list-item {
  display: inline-block !important;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.share-btn {
  background-color: 0;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin: 6px;
  padding: 8px 12px;
  transition: all .3s;
}
.share-btn:hover {
  background: #FFB309;
  color: #fff;
  border-color: #FFB309;
  box-shadow: 0px 0 5px 0 #FFB309;
}

.line {
  border: 2px solid #00B401;
  background-color: #00B401;
}
.fb {
  border: 2px solid #2e4da7;
  background-color: #2e4da7;
}
.reddit {
  border: 2px solid #F84201;
  background-color: #F84201;
}
.telegram {
  border: 2px solid #228AE6;
  background-color: #228AE6;
}
.twitter {
  border: 2px solid #53A8E7;
  background-color: #53A8E7;
}
.whatsapp {
  border: 2px solid #40BF50;
  background-color: #40BF50;
}
</style>
