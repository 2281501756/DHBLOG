<template>
  <div class="music-search-content">
    <div class="close"><i class="el-icon-close"></i></div>
    <div class="song-box">
      <song-item v-for="i of song" :key="i.id" :songData="i"></song-item>
    </div>
  </div>
</template>

<script>
import songItem from './songItem.vue'
export default {
  components: { songItem },
  props: {
    song: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
.music-search-content {
  position: absolute;
  top: 80px;
  width: 60vw;
  margin: 0 20vw;
  height: calc(100vh - 180px);
  background-color: #212121;
  border-radius: 20px;
  padding: 30px 45px;
}
.song-box {
  overflow-y: auto;
  height: 100%;
  background-color: #212121;
}
.close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 30px;
}
</style>
