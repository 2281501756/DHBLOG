import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    loginState: false
  },
  mutations: {},
  actions: {
    set_user(context, user) {
      context.state.user = user
      context.state.loginState = true
    },
    logout(context) {
      context.state.user = {}
      context.state.loginState = false
    }
  },
  getters: {
    LOGIN_STATE(state) {
      return state.loginState
    }
  },
  modules: {}
})
