import firebase from 'firebase'
import 'firebase/firestore'

var db = firebase.firestore();

// Hard coded characters to save up firebase read transactions
const state = {
  characters : [
    {
      id: 1,
      name: "Jon Snow",
      picture: "jon_snow.png"
    },

    {
      id: 2,
      name: "Cersei Lannister",
      picture: "cersei_lannister.png"
    }
  ]
};

const getters = {
  all: state => state.characters
};

const actions = {
  async getCharacters({ commit }) {
      await db.collection("characters")
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            if(!state.characters.includes(doc.data()))
              commit('addCharacter', doc.data());
          });
      });
  }
};
const mutations = {
  addCharacter: (state, character) => (state.characters.push(character))
};

export default {
  state,
  getters,
  actions,
  mutations
}