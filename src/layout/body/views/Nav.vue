<template>
  <div class="nav">
    <aside class="left">
      <div
        style="
          font-family: logo;
          font-size: 25px;
          text-shadow: 3px 3px 10px RGBA(1, 1, 1, 0.4);
        "
        @click="routerPush('/')"
      >
        DH|BLOG
      </div>
      <div @click="routerPush('/news')">新闻</div>
      <div>音乐</div>
      <div>动漫</div>
      <div>关于</div>
      <div>网站导航</div>
    </aside>
    <aside v-if="this.$store.state.loginState === false">
      <div @click="showLogin(true)">登录</div>
      <div @click="showLogin(false)">注册</div>
    </aside>
    <aside class="user" v-else>
      <div>
        <img
          :src="this.$store.state.user.photo"
          id="nav-user-photo"
          ref="nav_user_photo"
          alt="头像"
          width="40px"
          height="40px"
          style="border-radius: 50%"
        />
      </div>
      <div><i class="el-icon-mic"></i>音乐</div>
      <div><i class="el-icon-star-off"></i>收藏</div>
      <div><i class="el-icon-message"></i>消息</div>
      <div class="button">
        <button @click="routerPush('/article/contribute')">
          <i class="el-icon-upload2"></i> 投稿
        </button>
      </div>
    </aside>
    <div class="user-card" ref="user_card">
      <div>{{ this.$store.state.user.nickname }}</div>
      <div class="user-card-data">
        <span>关注</span> <span>粉丝 </span> <span>文章</span>
      </div>
      <div class="user-card-data">
        <span>0</span> <span>0 </span> <span>0</span>
      </div>
      <div class="user-card-item" @click="routerPush('/user/personal/center/')">
        个人中心
      </div>
      <div class="user-card-item" @click="routerPush('/user/modify/')">信息编辑</div>
      <div class="user-card-item" @click="logout">退出登录</div>
    </div>
  </div>
</template>

<script>
import { delete_token } from '../../../util/js/token'
import LoginVue from '../../../components/Login.vue'
import { createDOM } from '../../../util/js/create'
export default {
  data() {
    return {
      userCardShow: false,
      outImg: false,
      outCard: true
    }
  },
  methods: {
    showLogin(flag) {
      createDOM(LoginVue, { LoginStatus: flag })
    },
    routerPush(url) {
      if (url === '/user/personal/center/') url += this.$store.state.user.id
      if (this.$route.path !== url) this.$router.push(url)
      else {
        this.$message({
          showClose: true,
          message: '你已经在这个界面了，请不要再次跳转',
          type: 'error',
          duration: 1000
        })
        return
      }
    },
    imgMouseover() {
      if (!this.userCardShow) {
        this.userCardAddAction()
        this.userCardShow = true
      } else {
        this.outImg = false
      }
    },
    imgMouseout() {
      this.outImg = true
    },
    userCardMouseenter() {
      this.outCard = false
    },
    userCardMouseout() {
      this.outCard = true
    },
    userCardAddAction() {
      this.$refs.nav_user_photo.classList.add('action')
      this.$refs.user_card.classList.add('action')
      this.$refs.nav_user_photo.addEventListener('mouseleave', this.imgMouseout)
      this.$refs.user_card.addEventListener(
        'mouseover',
        this.userCardMouseenter
      )
      this.$refs.user_card.addEventListener('mouseleave', this.userCardMouseout)
      requestAnimationFrame(this.animationCallback)
    },
    userCardDeleteAction() {
      this.outImg = false
      this.outCard = true
      this.$refs.nav_user_photo.classList.remove('action')
      this.$refs.user_card.classList.remove('action')
      this.$refs.nav_user_photo.removeEventListener(
        'mouseleave',
        this.imgMouseout
      )
      this.$refs.user_card.removeEventListener(
        'Mouseleave ',
        this.userCardMouseout
      )
      this.$refs.user_card.removeEventListener(
        'mouseover',
        this.userCardMouseenter
      )
      this.userCardShow = false
    },
    animationCallback() {
      if (this.outImg && this.outCard) this.userCardDeleteAction()
      else requestAnimationFrame(this.animationCallback)
    },
    logout() {
      this.$refs.nav_user_photo.removeEventListener(
        'mouseover',
        this.imgMouseover
      )
      this.userCardDeleteAction()
      this.$store.dispatch('logout')
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
      delete_token()
      location.reload()
    }
  },
  mounted() {
    window.onscroll = function () {
      let top = document.documentElement.scrollTop
      let nav = document.querySelector('.nav')
      if (top > 300) {
        nav.classList.add('nav-active')
      } else {
        nav.classList.remove('nav-active')
      }
    }
    if (this.$store.state.loginState)
      this.$refs.nav_user_photo.addEventListener('mouseover', this.imgMouseover)
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginState
    }
  },
  watch: {
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler() {
        this.$destroy(this.$options.name)
      }
    },
    loginStatus(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.nav_user_photo.addEventListener(
            'mouseover',
            this.imgMouseover
          )
        })
      }
    }
  }
}
</script>

<style scoped>
.nav {
  z-index: 999;
  color: white;
  position: fixed;
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
aside {
  display: flex;
}
aside > div {
  font-size: 16px;
  font-weight: 300;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  font-weight: 500;
}
aside > div:hover {
  color: rgb(8, 204, 230);
}
.nav-active {
  background-color: #fff;
  color: black;
}
button:active {
  transform: scale(0.8);
}
.user {
  align-items: center;
}

.user > div {
  height: 50px;
  width: 80px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button > button {
  color: #fff;
  background-color: rgb(8, 179, 236);
  border-radius: 8px;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 70%;
  transition: all 0.3s;
}
.button > button:hover {
  background-color: #51ceff;
}
.user-card {
  width: 280px;
  /* height: 200px; */
  position: absolute;
  right: 230px;
  top: 80px;
  padding: 30px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
  transition: background-color 0.5s;
}
.user-card > div {
  width: 100%;
}
.user-card > div:nth-child(1) {
  text-align: center;
  font-size: 20px;
  color: rgb(30, 144, 255);
  font-weight: 800;
}
.user-card.action {
  visibility: visible;
  background-color: #fff;
  color: black;
  border-radius: 10px;
}
img {
  transition: all 0.5s;
  position: relative;
  z-index: 2;
}
img.action {
  transform: scale(2) translateY(20px);
}
.user-card-item {
  height: 30px;
  line-height: 30px;
  padding: 0 3px;
  cursor: pointer;
  margin: 3px 0;
  border-radius: 5px;
}
.user-card-item:hover {
  background-color: #e3e5e7;
}
.user-card-data {
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  margin: 5px 0;
}
</style>
