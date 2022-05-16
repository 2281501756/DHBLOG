<template>
  <div class="user-modify">
    <Nav style="color: #111"></Nav>
    <div class="user-photo-box">
      <img :src="$store.state.user.photo" alt="" />
      <div @click="cropperOpen" class="user-photo-cover">更换头像</div>
    </div>
    <div class="user-base-data">
      <div class="user-base-data-header">账号信息<span> *不可修改</span></div>
      <base-bar
        :title="'权限'"
        :message="$store.state.user.is_super ? '管理员' : '普通用户'"
      ></base-bar>
      <base-bar :title="'账号'" :message="$store.state.user.account"></base-bar>
      <base-bar :title="'邮箱'" :message="$store.state.user.email"></base-bar>
      <base-bar :title="'注册时间'" :message="createTime"></base-bar>
      <base-bar :title="'上次登录'" :message="loginTime"></base-bar>
    </div>

    <div class="user-data">
      <div class="user-data-header">基本信息</div>
      <user-bar
        :title="'昵称'"
        :message="$store.state.user.nickname"
        @change="nicknameChange"
      ></user-bar>
      <user-bar
        :title="'自我介绍'"
        :message="$store.state.user.description"
        @change="descriptionChange"
      ></user-bar>
    </div>
    <div class="photo-cropper" v-if="cropperShow">
      <div class="close" @click="cropperClose">
        <i class="el-icon-close"></i>
      </div>
      <div class="input" v-if="!hasimgFile">
        <input
          type="file"
          ref="file"
          style="display: none"
          @change="inputImage"
        />
        <div class="input-box" @click="inputBoxClick">
          <div><i class="el-icon-plus"></i></div>
          <div>上传你的头像</div>
        </div>
      </div>
      <div class="cropper" v-if="hasimgFile">
        <vueCropper
          ref="cropper"
          :img="imgaeDataUrl"
          :autoCrop="true"
          :fixed="true"
          :centerBox="true"
          style="margin-bottom: 20px"
        ></vueCropper>
        <div
          style="display: flex; justify-content: space-evenly; padding: 0 100px"
        >
          <el-button type="primary" @click="cutImage">上传</el-button>
          <el-button @click="imageReset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import Nav from '../../layout/body/views/Nav.vue'
import baseBar from './components/baseBar.vue'
import userBar from './components/userBar.vue'
import { YMD } from '../../util/js/time'
import require from '../../util/js/http/index'
import { updatePhoto } from '../../api/base/user'
export default {
  data() {
    return {
      cropperShow: false,
      hasimgFile: false,
      imgaeDataUrl: '',
      userDate: {
        nickname: this.$store.state.user.nickname,
        description: this.$store.state.user.description,
        gender: this.$store.state.user.gender,
        photo: this.$store.state.user.photo
      }
    }
  },
  computed: {
    createTime() {
      return YMD(this.$store.state.user.create_time)
    },
    loginTime() {
      return YMD(this.$store.state.user.login_time)
    }
  },
  components: {
    Nav,
    baseBar,
    userBar,
    VueCropper
  },
  methods: {
    nicknameChange(value) {
      this.userDate.nickname = value
    },
    descriptionChange(value) {
      this.userDate.description = value
    },
    cropperOpen() {
      this.cropperShow = true
    },
    cropperClose() {
      this.cropperShow = false
    },
    inputBoxClick() {
      this.$refs.file.click()
    },
    inputImage() {
      const file = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      let outer = this
      reader.onload = function () {
        outer.imgaeDataUrl = this.result
        outer.hasimgFile = true
      }
    },
    imageReset() {
      this.imgaeDataUrl = ''
      this.hasimgFile = false
    },
    cutImage() {
      this.$refs.cropper.getCropData((data) => {
        this.up(data)
      })
    },
    up(baseURL) {
      let file = this.dataURLtoFile(baseURL, 'demo')
      let data = new FormData()
      data.append('file', file)
      require({
        url: '/upload',
        method: 'POST',
        data: data
      }).then((res) => {
        let photo = `${this.$base_url + res.data.url}`
        updatePhoto(this.$store.state.user.id, photo).then((res) => {
          if (res.data.message === 'error') {
            this.$message({
              type: 'error',
              message: '出问题'
            })
          } else {
            this.$message({
              type: 'success',
              message: '上传成功'
            })
            this.$store.state.user.photo = photo
            this.cropperShow = false
          }
        })
      })
    },
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      if (mime === 'image/jpeg') filename = filename + '.jpg'
      if (mime === 'image/png') filename = filename + '.png'
      return new File([u8arr], filename, { type: mime })
    }
  }
}
</script>

<style scoped>
.user-modify {
  width: 100vw;
}
.user-photo-box {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.user-photo-box > img {
  height: 230px;
  width: 230px;
  border-radius: 50%;
}
.user-photo-cover {
  text-align: center;
  letter-spacing: 5px;
  line-height: 230px;
  font-size: 30px;
  height: 230px;
  width: 230px;
  border-radius: 50%;
  background-color: rgba(1, 1, 1, 0.5);
  position: absolute;
  color: white;
  opacity: 0;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.user-photo-cover:hover {
  display: block;
  opacity: 1;
}
.user-base-data,
.user-data {
  padding: 0 300px;
  margin-bottom: 40px;
}
.user-base-data-header,
.user-data-header {
  font-weight: 600;
  font-size: 20px;
  position: relative;
  margin-bottom: 15px;
}
.user-base-data-header::before,
.user-data-header::before {
  width: 4px;
  border-radius: 2px;
  height: 28px;
  content: '';
  position: absolute;
  left: -10px;
  background-color: #2e59a7;
}
.user-base-data-header > span {
  font-size: 13px;
  color: #666;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 28px;
  cursor: pointer;
}
.close:hover {
  color: #2e59a7;
}
.photo-cropper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 550px;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #666;
  padding: 50px;
}
.input-box {
  height: 400px;
  border: 4px solid #2e59a7;
  color: #2e59a7;
  font-size: 25px;
  padding: 150px 0;
}
.input-box > div {
  width: 100%;
  text-align: center;
}
.cropper {
  height: 400px;
}
</style>
