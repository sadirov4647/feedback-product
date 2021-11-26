import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn:false,
    loggedUsers:[]
  },
  getters:{},
  mutations: {
    USER_LOGIN(state, newUser){
      state.loggedUsers = newUser
    }
  },
  actions: {
    user_login({ commit }){
      commit('USER_LOGIN', )
    }
  },
  modules: {},
});
