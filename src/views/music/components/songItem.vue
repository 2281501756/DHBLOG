<template>
  <div class="song-item" @click="playMusic">
    <div>{{ song.name }}</div>
    <!-- <div>{{ song.artists[0].name || '无' }}</div> -->
  </div>
</template>

<script>
export default {
  props: ['songData'],
  data() {
    return {
      song: {}
    }
  },
  mounted() {
    this.song = this.songData
  },
  methods: {
    playMusic() {
      this.$store.dispatch('playMusic', this.song.url)
    }
  }
}
</script>

<style scoped>
.song-item {
  height: 40px;
  width: 100%;
  line-height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  color: white;
}
.song-item:hover {
  background-color: #434343;
}
.song-item > div {
  display: inline-block;
  width: 25%;
  margin: 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
