import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      user: {} as any,
      loginState: false
    }
  },
  getters: {
    LOGIN_STATE(state) {
      return state.loginState
    }
  },
  actions: {
    set_user(user: any) {
      this.user = user
      this.loginState = true
    },
    logout() {
      this.user = {}
      this.loginState = false
    }
  }
})

export default useStore
