<template>
  <div class="baseBar">
    <div class="title">{{ title }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      typeof: String,
      default: '标题'
    },
    message: {
      typeof: String,
      default: '信息'
    }
  }
}
</script>

<style scoped>
.baseBar {
  width: 100%;
  height: 50px;
  margin: 10px 0;
  border-bottom: 1px solid #aaa;
}
.baseBar > div {
  height: 100%;
  line-height: 40px;
  display: inline-block;
}
.title {
  width: 20%;
  font-size: 20px;
  padding-left: 5px;
}
</style>
