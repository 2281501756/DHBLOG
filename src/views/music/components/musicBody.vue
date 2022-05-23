<template>
  <div class="music-body"></div>
</template>

<script>
export default {}
</script>

<style scoped>
.music-body {
  width: 100vw;
  height: calc(100vh - 140px);
  position: absolute;
  top: 50px;
  overflow: hidden;
}
.music-body > div {
  display: inline-block;
  height: 100%;
}
.left {
  width: 200px;
}
.right {
  width: 100%;
}
</style>
