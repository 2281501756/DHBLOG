<template>
  <div class="editor">
    <video
      src="@/assets/videos/1.mp4"
      preload="auto"
      loop
      playsinline
      autoplay
      tabindex="-1"
      muted="muted"
    ></video>
    <NavVue></NavVue>
    <div style="padding: 70px 60px 40px">
      <label for="title">
        <span class="label">标题</span>
        <input type="text" v-model="formdata.title" id="title" />
      </label>
      <label for="description">
        <span class="label">描述</span>
        <input type="text" v-model="formdata.description" id="description" />
      </label>
      <label for="label">
        <span class="label">标签</span>
        <select v-model="selected" id="label">
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.value }}
          </option>
        </select>
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
        />
      </label>
      <img
        class="now-imgae"
        :src="formdata.photo"
        alt="选中的文章封面"
        @click="craeteImg"
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
import axios from '../../util/js/http/index'
import NavVue from '../../layout/body/views/Nav.vue'
import { createDOM } from '../../util/js/create'
import ImageFill from '@/components/imageFill'
import { getArticleForID, articleModify } from '../../api/article'
export default {
  data() {
    return {
      imgList: [
        {
          value: `${this.$base_url}/static/image/articleImage/1.jpg`
        },
        {
          value: `${this.$base_url}/static/image/articleImage/2.jpg`
        },
        {
          value: `${this.$base_url}/static/image/articleImage/3.jpg`
        },
        {
          value: `${this.$base_url}/static/image/articleImage/4.jpg`
        },
        {
          value: `${this.$base_url}/static/image/articleImage/5.jpg`
        },
        {
          value: `${this.$base_url}/static/image/articleImage/6.jpg`
        }
      ],
      formdata: {
        id: 0,
        userID: this.$store.state.user.id,
        title: '',
        description: '',
        content: '',
        label: '前端',
        photo: `${this.$base_url}/static/image/articleImage/1.jpg`
      },
      selected: '前端',
      options: [
        { text: '前端', value: '前端' },
        { text: '后端', value: '后端' },
        { text: 'css', value: 'css' },
        { text: 'js', value: 'js' },
        { text: 'ts', value: 'ts' },
        { text: 'vue', value: 'vue' },
        { text: 'react', value: 'react' }
      ],
      articleID: 0
    }
  },
  mounted() {
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
        this.selected = res.data.data[0].label
      }
    })
  },
  watch: {
    selected(newValue) {
      this.formdata.label = newValue
    },
    $route() {
      this.$destroy(this.$options.name)
    }
  },
  components: {
    mavonEditor,
    NavVue
  },
  methods: {
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('file', $file)
      axios({
        url: '/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        this.$refs.md.$img2Url(pos, `${this.$base_url + res.data.url}`)
      })
    },
    up() {
      let file = this.$refs.file.files[0]
      let data = new FormData()
      data.append('file', file)
      axios.post('/upload', data, {}).then((res) => {
        this.formdata.photo = `${this.$base_url + res.data.url}`
      })
    },
    modify() {
      if (this.formdata.title === '') {
        this.$message.error('标题不能为空')
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
    },
    imgListClick(value) {
      this.formdata.photo = value
    },
    craeteImg() {
      createDOM(ImageFill, { url: this.formdata.photo })
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
</style>
