<template>
  <div class="card">
    <div
      class="img"
      :style="{ background: `url(${article.photo}) no-repeat center/cover` }"
    ></div>
    <div class="article-data">
      <div class="title">{{ article.title }}</div>
      <div class="description">{{ article.description }}</div>
      <div class="icon">
        <span> <i class="el-icon-date"></i>{{ article.create_time }} </span>
        <span>
          <i class="el-icon-view"></i>
          {{ article.readnum + '阅读量' }}
        </span>
        <span>
          <i class="el-icon-chat-line-round"></i>
          {{ article.comment + '条评论 ' }}
        </span>
      </div>
    </div>
    <div class="button">
      <el-button type="primary" @click="openArticle">查看</el-button>
      <el-button
        type="warning"
        :disabled="article.user_id !== this.$store.state.user.id"
        @click="openArticleModify"
        >编辑</el-button
      >
      <el-button
        type="danger"
        :disabled="article.user_id !== this.$store.state.user.id"
        @click="open"
        >删除</el-button
      >
    </div>
  </div>
</template>

<script>
import { articleDelete } from '../../../api/base/article'
export default {
  props: ['article'],
  data() {
    return {
      text: 0
    }
  },
  methods: {
    openArticle() {
      this.$router.push('/article/' + this.article.id)
    },
    openArticleModify() {
      this.$router.push('/article/modify/' + this.article.id)
    },
    deleteArticle() {
      articleDelete(this.article.id).then((res) => {
        console.log(res)
        if (res.data.message === 'succeed') {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.$el.parentNode.removeChild(this.$el)
          this.$destroy(this.$options.name)
        }
      })
    },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteArticle()
        })
        .catch(() => {
          console.log('取消')
        })
    }
  }
}
</script>

<style scoped>
.card {
  height: 180px;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  margin: 20px;
  display: flex;
  padding: 20px 15px;
  justify-content: left;
  transition: all 0.3s;
  position: relative;
}
.img {
  border-radius: 15px;
  height: 140px;
  width: 220px;
  margin-right: 20px;
}
.article-data {
  position: relative;
}
.title {
  margin: 3px 0;
  font-size: 28px;
  font-weight: 600;
}
.description {
  color: rgba(1, 1, 1, 0.7);
}
.icon {
  position: relative;
  bottom: -50px;
  font-size: 13px;
}
.icon > span {
  margin: 0 3px;
}
.card:hover {
  transform: scale(1.02) translateY(-3px);
  box-shadow: 0px 3px 25px -1px rgba(0, 0, 0, 0.13);
}
.button {
  float: right;
  position: absolute;
  width: 250px;
  height: 50px;
  right: 0;
  bottom: 0;
}
</style>
