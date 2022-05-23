<template>
  <div class="image">
    <div class="title">
      <div style="margin: 20px">{{ title }}</div>
      <div style="position: relative" class="talk">
        <div v-for="(item, i) in talkData" :key="i">
          <transition name="talk">
            <div v-if="i === talkIndex" style="line-height: 25px">
              {{ item }}
            </div>
          </transition>
        </div>
      </div>
    </div>
    <img
      class="header-image"
      :src="`${base_url}/static/image/background/` + imageURL1 + '.jpg'"
      alt=""
      style="width: 100%; object-position: center; object-fit: cover"
    />
    <img
      class="header-image"
      :src="`${base_url}/static/image/background/` + imageURL2 + '.jpg'"
      alt=""
      style="width: 100%; object-position: center; object-fit: cover"
    />
    <div class="arrows"><i class="el-icon-d-arrow-left"></i></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import $base_url from '../../../util/ts/http/baseURL'
export default defineComponent({
  data() {
    return {
      imageURL1: Math.floor(Math.random() * 14 + 1),
      imageURL2: Math.floor(Math.random() * 14 + 1),
      imageActive: 1,
      talkIndex: 1,
      intervalID1: 0 as any,
      intervalID2: 0 as any,
      base_url: $base_url
    }
  },
  props: ['talkData', 'title'],
  mounted() {
    if (this.talkData) {
      this.intervalID1 = setInterval(() => {
        this.talkIndex = (this.talkIndex + 1) % this.talkData.length
      }, 5000)
    }

    //轮播图动画
    let img: any = document.querySelectorAll('.header-image')
    this.intervalID2 = setInterval(() => {
      if (this.imageActive === 1) {
        img[1].style.opacity = 0
        img[0].style.opacity = 100
        setTimeout(() => {
          this.imageURL2 = Math.floor(Math.random() * 14 + 1)
        }, 2000)
        this.imageActive = 0
      } else {
        img[1].style.opacity = 100
        img[0].style.opacity = 0
        setTimeout(() => {
          this.imageURL1 = Math.floor(Math.random() * 14 + 1)
        }, 2000)
        this.imageActive = 1
      }
    }, 8000)
  },
  unmounted() {
    clearInterval(this.intervalID1)
    clearInterval(this.intervalID2)
  }
})
</script>

<style scoped>
.image {
  position: relative;
  height: 100vh;
}
.image > img {
  position: absolute;
  transition: opacity 1s;
}
.title {
  height: 100vh;
  width: 100%;
  z-index: 10;
  position: absolute;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title > div {
  font-size: 30px;
}
.talk > div {
  font-size: 18px;
  position: absolute;
  width: 500px;
  margin-left: -250px;
  text-align: center;
}
.talk-enter-active {
  animation: bounce-in 1s;
}
.arrows {
  position: absolute;
  bottom: 20%;
  left: 50%;
  font-size: 50px;
  color: #fff;
  transform: translateX(-50%) rotateZ(-90deg);
  animation: 2s arrows linear infinite;
}

@keyframes arrows {
  0% {
    opacity: 0;
    transform: translateY(0px) rotateZ(-90deg);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(75px) rotateZ(-90deg);
    opacity: 0;
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(100px) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
</style>
