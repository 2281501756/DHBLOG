<template>
  <div
    class="watch"
    :style="{
      background: `url(${this.$base_url}/static/image/background/7.jpg) no-repeat center/cover`,
    }"
  >
    <div class="num">
      <div>{{ hours }}</div>
      <div>:</div>
      <div>{{ minutes }}</div>
      <div>:</div>
      <div>{{ seconds }}</div>
    </div>
    <div class="word">
      <div>hour</div>
      <div>minute</div>
      <div>second</div>
    </div>
    <div class="hide"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    if (this.hours < 10) this.hours = "0" + this.hours;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    if (this.seconds < 10) this.seconds = "0" + this.seconds;
    setInterval(() => {
      this.seconds = parseInt(this.seconds);
      this.minutes = parseInt(this.minutes);
      this.hours = parseInt(this.hours);
      this.seconds += 1;
      if (this.seconds % 60 === 0) {
        this.seconds = 0;
        this.minutes += 1;
        if (this.minutes % 60 === 0) {
          this.minutes = 0;
          this.hours += 1;
          if (this.hours % 24 === 0) {
            this.hours = 0;
          }
        }
      }

      if (this.hours < 10) this.hours = "0" + this.hours;
      if (this.minutes < 10) this.minutes = "0" + this.minutes;
      if (this.seconds < 10) this.seconds = "0" + this.seconds;
    }, 1000);
  },
};
</script>

<style scoped>
.watch {
  width: 100%;
  height: 100%;

  position: relative;
}
.num {
  display: flex;
  position: absolute;
  left: 50%;
  top: 40%;
  color: white;
  font-size: 35px;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.num > div {
  margin: 0 6px;
}
.word {
  display: flex;
  position: absolute;
  left: 53%;
  top: 75%;
  color: white;
  font-size: 12px;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.word > div {
  margin: 0 20px;
}
.word > div:nth-child(3) {
  margin-left: 10px;
  margin-right: 30px;
}
.hide {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  transition: all 0.5s;
}
.watch:hover .hide {
  background-color: rgba(1, 1, 1, 0.3);
}
</style>