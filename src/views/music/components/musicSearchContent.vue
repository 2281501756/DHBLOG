<template>
  <div class="music-search-content">
    <div class="close"><i class="el-icon-close"></i></div>
    <song-item></song-item>
    <song-item></song-item>
    <song-item></song-item>
  </div>
</template>

<script>
import songItem from './songItem.vue'
export default {
  components: { songItem }
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
