import firebase from 'firebase'
import 'firebase/firestore'

/**
 * Class to represent a Game Of Thrones Character
 */
class Character {
  constructor(id, name, picture, isDead = false, isKing = false) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.isDead = isDead;
    this.isKing = isKing;
  }
}

var db = firebase.firestore();

// Hard coded characters to save up firebase read transactions
const state = {
  king : new Character(1, "Jon Snow", "jon_snow.png"),
  characters : [
    new Character(1, "Jon Snow", "jon_snow.png"),
    new Character(2, "Daenerys Targaryen", "daenerys.png"),
    new Character(3, "Cersei Lannister", "cersei_lannister.png"),
    new Character(4, "Tyrion Lannister", "tyrion_lannister.png"),
    new Character(5, "Sansa Stark", "sansa_stark.png"),
    new Character(6, "Ayra Stark", "arya_stark.png"),
    new Character(7, "Bran Stark", "bran_stark.png"),
    new Character(8, "Jaime Lannister", "jaime_lannister.png"),
    new Character(9, "Brienne of Tarth", "brienne_of_tarth.png"),
    new Character(10, "Theon Greyjoy", "theon_greyjoy.png"),
    new Character(11, "Samwell Tarly", "samwell_tarly.png"),
    new Character(12, "Davos Seaworth", "davos_seaworth.png"),
    new Character(13, "The Mountain", "the_mountain.png"),
    new Character(14, "Varys", "varys.png"),
    new Character(15, "Jorah Mormont", "jorah_mormont.png"),
    new Character(16, "Melisandre", "melisandre.png"),
    new Character(17, "Euron Greyjoy", "euron_greyjoy.png"),
    new Character(18, "The Hound", "the_hound.png"),
    new Character(19, "Bronn", "bronn.png"),
    new Character(20, "Tormund", "tormund_giantsbane.png"),
    //new Character(21, "Gendry", "gendry.png"),
    new Character(23, "Yara Greyjoy", "yara_greyjoy.png"),
    new Character(24, "Grey Worm", "grey_worm.png"),
    new Character(25, "Missandei", "missandei.png"),
    new Character(26, "Daario Naharis", "daario_naharis.png"),
    new Character(27, "Jaqen H’ghar", "jaqen_h’ghar.png"),
    new Character(28, "Beric Dondarrion", "beric_dondarrion.png"),
    new Character(29, "Meera Reed", "meera_reed.png"),
    new Character(30, "Podrick Payne", "podrick_payne.png"),
    new Character(31, "Gilly", "gilly.png"),
    new Character(32, "Lyanna Mormont", "lyanna_mormont.png"),
    //new Character(33, "Ellaria Sand", "ellaria_sand.png"),
    new Character(34, "Qyburn", "qyburn.png"),
    new Character(35, "Hot Pie", "hot_pie.png"),
    new Character(36, "Eddison Tollett", "eddison_tollett.png"),
    new Character(37, "Drogon", "drogon.png"),
    new Character(38, "Rhaegal", "rhaegal.png"),
    new Character(39, "Viserion", "viserion.png"),
    new Character(40, "Night King", "night_king.png"),
  ],
  prediction: []
};

// Sort by name
state.characters = state.characters.sort((a, b) => a.name.localeCompare(b.name));

const getters = {
  all: state => state.characters,
  king: state => state.king,
  prediction: state => state.prediction
};

const actions = {
  /**
  * Read prediction from userId
  **/
  async getPredictionByUser({ commit }, userId) {
    await db.doc(`people/${userId}`)
      .get().then((querySnapshot) => {
        commit('setPrediction', querySnapshot.data().prediction);
        commit('setKing', querySnapshot.data().king);
    });
  },

  /**
  * Get king selection by userId
  *
  * This method is a tricky one 'cause it iterates over N characters.
  * The goal is to simulate a roulette and finally set the king of Westeros!
  **/
  async getKingByUser({ commit }, userId) {
    var i = 0;
    var limit = 15;

    for(let c of state.characters) {
      if(i < limit) {
        setTimeout(() => {
          commit('setKing', c);
        }, 100 * ++i);
      }
    }

    // When finish to mutate beetween characters
    // then read from Firebase the right king
    setTimeout(() => {
      db.doc(`people/${userId}`)
        .get().then((querySnapshot) => {
          commit('setKing', querySnapshot.data().king);
      });
    }, 100 * limit);
  }
};

const mutations = {
  setPrediction: (state, characters) => (state.prediction = characters),
  setKing: (state, character) => (state.king = character)
};

export default {
  state,
  getters,
  actions,
  mutations
}