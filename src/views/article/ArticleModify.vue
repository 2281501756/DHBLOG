<template>
  <div class="editor">
    <video
      :src="`${this.$base_url}/static/video/1.mp4`"
      preload="auto"
      loop
      playsinline
      autoplay
      tabindex="-1"
      muted="muted"
    ></video>
    <NavVue style="background-color: transparent"></NavVue>
    <div style="padding: 70px 60px 40px">
      <label for="title">
        <span class="label">标题</span>
        <el-input
          style="display: inline-block; width: 166px"
          placeholder="请输入标题"
          v-model="formdata.title"
          id="title"
          clearable
        >
        </el-input>
      </label>
      <label for="description">
        <span class="label">描述</span>
        <el-input
          style="display: inline-block; width: 166px"
          placeholder="请输入描述"
          v-model="formdata.description"
          id="description"
          clearable
        >
        </el-input>
      </label>
      <label for="label">
        <span class="label">标签</span>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入标签"
          clearable
        ></el-autocomplete>
      </label>
      <label for="photo">
        <span class="label">文章封面</span>
        <span class="img-box" v-for="img in imgList" :key="img.value">
          <img
            :src="img.value"
            alt="文章图片"
            @click="imgListClick(img.value)"
          />
          <div class="mark" v-if="img.value === formdata.photo">√</div>
        </span>
        <input
          type="file"
          ref="file"
          name="file"
          @change="up"
          fontSize="800px"
          style="display: none"
        />
        <div class="file-box" @click="handleImageRefresh">刷新</div>
        <div class="file-box" @click="fileBoxClick">上传图片</div>
      </label>
      <img
        class="now-imgae"
        :src="formdata.photo"
        alt="选中的文章封面"
        @click="createImg"
      />
      <span></span>
    </div>
    <mavonEditor
      ref="md"
      v-model="formdata.content"
      @imgAdd="$imgAdd"
      :ishljs="true"
      :scrollStyle="true"
      codeStyle="tomorrow-night"
      style="
        opacity: 0.75;
        z-index: 99;
        width: 90%;
        transform: translateX(5%);
        min-height: 70vh;
        max-height: 75vh;
      "
    ></mavonEditor>
    <button @click="modify">修改</button>
    <audio src=""></audio>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import NavVue from '../../layout/body/views/Nav.vue'

import { getArticleForID, articleModify } from '../../api/base/article'
import { mymixin } from './mixin/index'
export default {
  mixins: [mymixin],
  data() {
    return {
      formdata: {
        id: 0,
        userID: this.$store.state.user.id,
        title: '',
        description: '',
        content: '',
        label: '前端',
        photo: `${this.$base_url}/static/image/articleImage/1.jpg`
      },

      articleID: 0
    }
  },
  mounted() {
    this.getImgList()
    this.formdata.id = this.$route.params.id
    getArticleForID(this.formdata.id).then((res) => {
      if (res.data.message === 'error') {
        this.$router.replace('/404')
      } else if (res.data.data[0].user_id !== this.$store.state.user.id) {
        this.$router.replace('/')
        this.$message({
          type: 'error',
          message: '你不能访问别人的文章'
        })
      } else {
        this.formdata.title = res.data.data[0].title
        this.formdata.description = res.data.data[0].description
        this.formdata.content = res.data.data[0].content
        this.formdata.label = res.data.data[0].label
        this.formdata.photo = res.data.data[0].photo
        this.state1 = res.data.data[0].label
      }
    })
  },

  components: {
    mavonEditor,
    NavVue
  },
  methods: {
    modify() {
      if (this.formdata.title === '' || this.state1 === '') {
        this.$message.error('标题和标签不能为空')
        return
      } else if (this.state1.length > 10) {
        this.$message.error('标签太长')
        return
      }
      articleModify(this.formdata).then((res) => {
        console.log(res)
        if (res.data.message === 'succeed') {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        } else {
          this.$message.error('error 出错了😱')
        }
      })
    }
  }
}
</script>

<style scoped>
.editor {
  height: 100vh;
  width: 100vw;
}
.label {
  color: white;
  padding: 0 10px;
}
video {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  object-fit: cover;
  min-height: 800px;
  z-index: -99;
}
button {
  margin: 20px 70px 0;
  width: 70px;
  height: 30px;
}
.img-box {
  padding: 0 3px;
  position: relative;
}
.img-box img {
  width: 50px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}
.mark {
  position: absolute;
  background-color: lightgreen;
  color: green;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: 0;
  top: -10px;
}
.now-imgae {
  width: 70px;
  height: 40px;
  vertical-align: middle;
  cursor: pointer;
}
.file-box {
  vertical-align: middle;
  display: inline-block;
  height: 30px;
  padding: 0 20px;
  margin: 0 20px;
  background-color: white;
  user-select: none;
}
</style>
