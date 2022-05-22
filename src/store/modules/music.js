const  music = {
  state: {

  },
  mutations: {},
  actions: {
    playMusic(state, url) {
      let audio = document.querySelector('#audio')
      audio.src = url
      audio.play()
    }
  },
  getters: {

  },
}

export default music
