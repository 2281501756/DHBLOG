<template>
  <div class="music-footer">
    <div class="left">
      <div class="left-box">
        <img
          class="music-img"
          src="~@/assets/images/music/shangyishou.svg"
          alt=""
        />
        <img
          class="music-img music-img-center"
          src="~@/assets/images/music/bofang.svg"
          alt=""
        />
        <img
          class="music-img"
          src="~@/assets/images/music/xiayishou.svg"
          alt=""
        />
      </div>
    </div>
    <div class="center" style="width: 35%"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.music-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: #212121;
}
.music-footer > div {
  display: inline-block;
  width: 25%;
  position: relative;
}
.left-box {
  height: 40px;
  position: absolute;
  top: 20px;
  left: 40px;
}
.music-img {
  width: 24px;
  height: 24px;
  margin: 0 20px;
  vertical-align: middle;
}
.music-img-center {
  width: 40px;
  height: 40px;
}
</style>
