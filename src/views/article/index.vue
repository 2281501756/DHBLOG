<template>
  <div>
    <Header
      :title="articleData.title"
      :talkData="[articleData.description, '']"
    ></Header>
    <div class="content">
      <div class="left">
        <div class="a-box">
          <h2 style="margin: 0 0 10px">导航目录</h2>
          <hr />
          <div class="a-box-content">
            <div
              v-for="(item, index) in toc"
              :key="index"
              :class="item.label"
              @click="scrollToPosition(item.href)"
            >
              <a> {{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text">
        <div class="head">
          <div style="font-size: 40px; font-weight: 800; margin: 20px 0">
            {{ articleData.title }}
          </div>
          <div class="article_message">
            <span><i class="el-icon-position"></i>{{ articleData.label }}</span>
            <span><i class="el-icon-user"></i>{{ articleData.author }}</span>
            <span
              ><i class="el-icon-date"></i>{{ articleData.create_time }}</span
            >
            <span
              ><i class="el-icon-view"></i>{{ articleData.readnum }}阅读量</span
            >
            <span>
              <i class="el-icon-chat-line-round"></i
              >{{ articleData.comment }}条评论</span
            >
          </div>
          <mavonEditor
            v-model="articleData.content"
            :ishljs="true"
            :toolbarsFlag="false"
            :subfield="false"
            defaultOpen="preview"
            :navigation="true"
            :imageClick="imageClick"
            codeStyle="tomorrow-night-eighties"
            style="z-index: 1"
          ></mavonEditor>
          <div class="comment" style="height: 300px"></div>
        </div>
      </div>
      <div class="right">
        <div class="watch">
          <Watch></Watch>
        </div>
        <div class="user-card">
          <CardVue
            height="200px"
            width="250px"
            title="作者信息"
            style="margin: 20px 0 0 0"
          >
            <div
              style="
                height: 60px;
                width: 100%;
                display: flex;
                justify-content: center;
              "
            >
              <img
                @click="$router.push(`/user/personal/center/${userData.id}`)"
                style="height: 60px; width: 60px; border-radius: 50%"
                :src="userData.photo"
                alt="作者头像"
              />
            </div>
            <div
              style="
                height: 30px;
                width: 100%;
                text-align: center;
                line-height: 30px;
                color: rgb(30, 144, 255);
                font-weight: 800;
                cursor: pointer;
              "
            >
              {{ userData.nickname }}
            </div>
            <div style="font-size: 14px; color: #666">
              {{ userData.description }}
            </div>
          </CardVue>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Watch from '../../layout/body/views/Watch.vue'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer.vue'
import CardVue from '../../layout/body/views/Card.vue'
import { markdown } from '../../util/js/markdown'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Clipboard from 'clipboard'
import $ from 'jquery'
import { createDOM } from '../../util/js/create'
import ImageFill from '../../components/imageFill'
import { getArticleForID, readNumAdd } from '../../api/article'
import { getForID } from '../../api/user'
export default {
  data() {
    return {
      articleid: 0,
      articleData: {},
      userData: {},
      toc: []
    }
  },
  components: {
    Header,
    Footer,
    Watch,
    CardVue,
    mavonEditor
  },
  watch: {
    $route() {
      this.$destroy(this.$options.name)
    }
  },
  methods: {
    imageClick(img) {
      createDOM(ImageFill, { url: img.src })
    },
    scrollToPosition(id) {
      let position = $(id).offset()
      position.top = position.top - 80
      $('html,body').animate({ scrollTop: position.top }, 500)
    }
  },
  beforeCreate() {
    this.articleid = this.$route.params.id
    readNumAdd(this.articleid)
    getArticleForID(this.articleid).then((res) => {
      if (res.data.message === 'error') {
        this.$router.replace('/404')
      }
      this.articleData = res.data.data[0]
      getForID(this.articleData.user_id).then((res2) => {
        this.userData = res2.data[0]
        console.log(this.userData)
      })
    })
  },
  async mounted() {
    this.$nextTick(() => {
      let clipboard = new Clipboard('.copy-btn')
      // 复制成功失败的提示
      clipboard.on('success', () => {
        this.$message({
          message: '复制成功',
          type: 'success'
        })
      })
      clipboard.on('error', () => {
        this.$message.error('失败')
      })
    })

    this.articleData.content = markdown(
      mavonEditor,
      this.articleData.content + ''
    )

    this.$nextTick(() => {
      const aArr = $(
        '.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content  a'
      ).toArray()
      let toc = []
      aArr.forEach((item) => {
        let href = $(item).attr('id')
        let name = $(item).parent().text()
        let label = $(item).parent()[0].nodeName
        if (href) {
          toc.push({
            href: '#' + href,
            name: name,
            label: label
          })
        }
      })
      this.toc = toc
    })
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  background-color: #e5e5e5;
  padding: 40px 0;
}
.text {
  padding: 20px 50px;
  width: 60vw;
  border-radius: 20px;
  background-color: white;
}
.article_message {
  color: #999;
  margin: 20px 0;
}
.article_message > span {
  margin: 0 10px;
}
.left {
  width: 20vw;
}
.right {
  width: 20vw;
  padding-left: 20px;
}
.a-box {
  position: sticky;
  top: 80px;
  margin-left: 20px;
  width: 230px;
  border-radius: 5px;
  padding: 10px 0 10px 10px;
  overflow: hidden;
  background-color: #fff;
}
.a-box-content {
  max-height: 70vh;
  overflow-y: scroll;
}
.a-box > .a-box-content > div {
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 30px;
  border-radius: 5px;
  margin: 6px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.a-box > .a-box-content > div:hover {
  background-color: #e5e5e5;
  color: #2836ff;
}
.watch {
  position: sticky;
  top: 80px;
  height: 150px;
  width: 230px;
  border-radius: 10px;
  overflow: hidden;
}
.H1 {
  text-indent: 0em;
}
.H2 {
  text-indent: 1em;
}
.H3 {
  text-indent: 2em;
}
.H4 {
  text-indent: 3em;
}
.H5 {
  text-indent: 4em;
}
.head >>> .v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition {
  display: none;
}
.user-card {
  position: sticky;
  top: 250px;
}
</style>
