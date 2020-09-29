import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Inicializando estados
const state = {
  users: [],
  crews: [],
  loading: false,
  usuarioLogado: false,
};

const actions = {
  addUser({ commit }, user) {
    return new Promise((resolve) => {
      commit("setLoading", true);
      setTimeout(() => {
        user.id = Date.now();
        commit("addUser", user);
        resolve(user);
        commit("setLoading", false);
      }, 2500);
    });
  },
  // login({commit, state}, loginUser){
  //   const usuarioLogado = state.users.map((user) => {
  //     return loginUser.includes(user.email)
  //       ? { ...user}
  //       : user;
  //   });
  //   usuarioLogado = 
  //   commit("login", true)
  // }
};
const getters = {};
const mutations = {
  addUser(state, payload) {
    state.users.push(payload);
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  login(state, payload){
    state.usuarioLogado = payload;
    state.users
  }
};

const store = new Vuex.Store({ state, mutations, actions, getters });

export default store;
