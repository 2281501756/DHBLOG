<template>
  <div class="introduce">
    <div class="head">
      <Watch />
    </div>
    <div class="body">
      <div class="title">Dong Hao Blog</div>
      <div class="description">
        动漫、游戏、前端编程，这是博主的三大标签。本站推荐博主喜欢的动漫、自己所总结的知识，也会分享一些日常心得~
      </div>
    </div>
    <div class="footer">
      <div class="item">
        <div>用户</div>
        <div>{{ total.usernum || 0 }}</div>
      </div>
      <div class="item">
        <div>文章</div>
        <div>{{ total.articlenum || 0 }}</div>
      </div>
      <div class="item">
        <div>评论</div>
        <div>{{ total.commentnum || 0 }}</div>
      </div>
      <div class="item">
        <div>浏览</div>
        <div>{{ total.readnum || 0 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Watch from './Watch.vue'
import { totalData } from '../../../api/base/totalData'
export default {
  data() {
    return {
      total: {}
    }
  },
  components: {
    Watch
  },
  async mounted() {
    let res = (await totalData()).data
    this.total = res.data
  }
}
</script>

<style scoped>
.introduce {
  width: 280px;
  height: 350px;
  margin: 50px auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 4px 5px 31px -7px rgba(0, 0, 0, 0.41);
}
.head {
  width: 280px;
  height: 150px;
}
.body {
  width: 100%;
  height: 200px;
}
.title {
  font-weight: 800;
  margin: 10px 15px;
  color: #1e90ff;
}
.description {
  padding: 0 15px;
  text-indent: 2em;
  font-size: 14px;
  line-height: 18px;
}
.footer {
  height: 60px;
  width: 100%;
  border-top: 1px solid #eee;
  position: absolute;
  bottom: 0%;
  display: flex;
}
.item {
  width: 25%;
  height: 100%;
  border-right: 1px solid #eee;
}
.item:last-child {
  border-right: none;
}
.item > div:nth-child(1) {
  width: 100%;
  height: 50%;
  text-align: center;
  padding-top: 10%;
  font-size: 14px;
  color: #999;
}
.item > div:nth-child(2) {
  width: 100%;
  height: 50%;
  text-align: center;
}
</style>
