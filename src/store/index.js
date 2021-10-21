import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },

  //MUTATIONS are functions that effects the state
  mutations: {
    SET_USER(state, user){
      state.user = user;
    }
  },

  // Actions are functions that we call throughout your application that call mutation
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },

  modules: { 
  }
})
