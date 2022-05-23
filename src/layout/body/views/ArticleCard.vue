<template>
  <router-link :to="`/article/${articleData.id}`" class="article">
    <img
      :src="articleData.photo"
      alt=""
      width="100%"
      style="position: absolute; top: 0"
      @load="isloading = false"
    />
    <div class="loading" v-show="isloading">
      <div class="loading-container"></div>
    </div>
    <div class="hide"></div>
    <div class="label" ref="label">{{ articleData.label }}</div>
    <div class="title">
      {{ articleData.title }}
    </div>
    <div class="description">{{ articleData.description }}</div>
    <footer>
      <i class="el-icon-user"></i> {{ articleData.author }}&nbsp;&nbsp;
      <i class="el-icon-date"></i>{{ articleData.create_time }}&nbsp;&nbsp;
      <i class="el-icon-chat-line-round"></i>
      {{ articleData.comment + '条评论 ' }} &nbsp;&nbsp;<i
        class="el-icon-view"
      ></i>
      {{ articleData.readnum + '阅读量' }}
    </footer>
  </router-link>
</template>

<script>
export default {
  props: ['articleData'],
  data() {
    return {
      isloading: true
    }
  },
  mounted() {
    if (
      this.articleData.label === 'js' ||
      this.articleData.label === 'javascript'
    ) {
      this.$refs.label.style.backgroundColor = '#fceb3c'
      this.$refs.label.style.color = '#777'
    } else if (this.articleData.label === 'java') {
      this.$refs.label.style.backgroundColor = '#fa8c16'
    } else if (
      this.articleData.label === 'ts' ||
      this.articleData.label === 'typescript'
    ) {
      this.$refs.label.style.backgroundColor = '#1890ff'
    } else if (this.articleData.label === 'vue') {
      this.$refs.label.style.backgroundColor = '#389e0d'
    } else if (this.articleData.label === 'react') {
      this.$refs.label.style.backgroundColor = '#531dab'
    } else if (this.articleData.label === '后端') {
      this.$refs.label.style.backgroundColor = '#6c216d'
    } else if (this.articleData.label === 'spring') {
      this.$refs.label.style.backgroundColor = '#4f794a'
    }
  }
}
</script>

<style scoped>
.article {
  height: 350px;
  width: 90%;
  margin: 5% 5%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.4s;
  text-decoration: none;
  box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
}
.article:hover {
  transform: scale(1.02);
}
.article:hover > .label {
  transform: translateY(-60px) scale(0.7);
}
.article:hover > .title {
  transform: translateY(-60px) scale(0.7);
}
.article:hover > .description {
  /* transform: translateY(-50px) scale(0.7); */
  bottom: 40%;
}

.label {
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
  padding: 0 10px;
  height: 24px;
  background-color: #ee5253;
  font-size: 16px;
  color: white;
  z-index: 2;
  transition: all 1s cubic-bezier(0, 0.33, 0, 1.12);
}
.title {
  color: white;
  font-size: 32px;
  z-index: 2;
  transition: all 1s cubic-bezier(0, 0.33, 0, 1.12);
}
.description {
  z-index: 2;
  font-size: 32px;
  color: white;
  position: absolute;
  bottom: 0;
  width: 80%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 1s cubic-bezier(0, 0.33, 0, 1.12);
}
footer {
  position: absolute;
  bottom: 0%;
  height: 10%;
  width: 100%;
  font-size: 14px;
  padding-left: 30px;
  padding-top: 5px;
  background-color: white;
  color: #777;
  z-index: 2;
}
img {
  transition: all 0.5s;
}
.hide {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  bottom: 0%;
  transition: all 0.5s;
}
.article:hover > .hide {
  background-color: rgba(1, 1, 1, 0.35);
}
.article:hover > img {
  filter: blur(5px);
}
.loading {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.8);
}
.loading-container {
  width: 100px;
  height: 100px;
  background: linear-gradient(blue, transparent 40%);
  border-radius: 50%;
  position: relative;
  animation: loading 3s linear infinite;
  margin-bottom: 10px;
}
.loading-container::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(blue, transparent 40%);
  z-index: -1;
  filter: blur(10px);
}
.loading-container::after {
  content: '';
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(1, 1, 1, 0.8);
}
@keyframes loading {
  33% {
    transform: rotate(360deg);
    filter: hue-rotate(120deg);
  }
  66% {
    transform: rotate(720deg);
    filter: hue-rotate(240deg);
  }
  100% {
    transform: rotate(1080deg);
    filter: hue-rotate(360deg);
  }
}
</style>
