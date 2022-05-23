<template>
  <div class="card" ref="root">
    <div class="head">{{ title }}</div>
    <div class="bod">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['title', 'height', 'width'],
  mounted() {
    this.$refs.root.style.height = this.height
    this.$refs.root.style.width = this.width
  }
}
</script>

<style scoped>
.card {
  width: 90%;
  height: 350px;
  margin: 50px auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 0 20px;
  position: relative;
  box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
}
.head {
  height: 55px;
  padding-top: 20px;
  color: rgb(46, 38, 38);
  border-bottom: 1px solid #999;
  position: relative;
  margin-bottom: 20px;
}
.head::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -1px;
  border-radius: 2px;
  height: 4px;
  width: 100px;
  background-color: red;
}
a {
  display: block;
  height: 25px;
  width: 100%;
  color: #999;
  background-color: #f5f5f5;
  margin: 20px 0;
  text-decoration: none;
  font-size: 14px;
  line-height: 25px;
  margin-left: 5px;
  padding-left: 8px;
  transition: all 0.1s;
}
a:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 2px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 16px -8px rgba(0, 0, 0, 0.75);
}
button {
  transition: all 0.1s;
}
button:active {
  transform: scale(0.9);
}
.favour {
  height: 65px;
  display: flex;
  margin: 2.5px 5px;
  justify-content: left;
  cursor: pointer;
  transition: all 0.3s;
}
.favour:hover {
  transform: scale(1.02) translateY(-3px);
  background-color: #f1f1f1;
}
.favour-img {
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background-color: red;
  margin-right: 5px;
}
.favour-data {
  padding-top: 4px;
}
.favour-data .title {
  color: #768791;
  font-size: 11px;
  margin-bottom: 13px;
}
.favour-data .view {
  color: #8696a0;
  font-size: 8px;
}
</style>
