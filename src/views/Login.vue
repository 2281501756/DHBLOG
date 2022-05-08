<template>
  <div class="loginUI">
    <div class="box">
      <div class="close"><i class="el-icon-close" @click="hide"></i></div>
      <div
        class="box-mask-realy"
        :class="{ 'box-mask-register': !loginStatus }"
      >
        <button
          class="box-mask-button"
          v-if="loginStatus"
          @click="loginStatus = !loginStatus"
        >
          注 册
        </button>
        <button
          class="box-mask-button"
          v-else
          @click="loginStatus = !loginStatus"
        >
          登 录
        </button>
      </div>
      <div class="login">
        <div class="title">登录</div>
        <div class="login-input-box">
          <i class="el-icon-user login-input-icon"></i>
          <input
            class="login-input"
            v-model="formData_login.account"
            type="text"
            placeholder="请输入账号"
          />
        </div>
        <div class="login-input-box">
          <i class="el-icon-lock login-input-icon"></i>
          <input
            class="login-input"
            v-model="formData_login.password"
            type="password"
            placeholder="请输入密码"
            @keydown.enter="submit"
          />
        </div>
        <button class="login-button" @click="submit">登 录</button>
        <div>忘记密码</div>
      </div>
      <div class="register">
        <div class="title">注册</div>
        <el-steps
          class="register-step"
          :space="400"
          :active="register_index"
          :align-center="true"
          finish-status="success"
        >
          <el-step title="基本信息"></el-step>
          <el-step title="邮箱绑定"></el-step>
          <el-step title="完成注册"></el-step>
        </el-steps>
        <div style="position: relative">
          <transition :name="register_animation">
            <div class="register-index-box" v-if="register_index === 0">
              <div class="register-input-box">
                <i class="el-icon-user register-input-icon"></i>
                <input
                  class="register-input"
                  type="test"
                  v-model="formData_register.account"
                  placeholder="请输入用户名"
                />
              </div>
              <div class="register-input-box">
                <i class="el-icon-lock register-input-icon"></i>
                <input
                  class="register-input"
                  type="password"
                  v-model="formData_register.password"
                  placeholder="请输入密码"
                />
              </div>
              <div class="register-input-box">
                <i class="el-icon-lock register-input-icon"></i>
                <input
                  class="register-input"
                  type="password"
                  v-model="formData_register.repassword"
                  placeholder="请再次输入密码"
                  @keydown.enter="register_next_step"
                />
              </div>
            </div>
          </transition>
          <transition :name="register_animation">
            <div class="register-index-box" v-if="register_index === 1">
              <div class="register-input-box">
                <i class="el-icon-message register-input-icon"></i>
                <input
                  class="register-input"
                  type="email"
                  v-model="formData_register.email"
                  placeholder="请输入电子邮箱"
                />
              </div>
              <div class="register-input-box">
                <i class="el-icon-unlock register-input-icon"></i>
                <input
                  class="register-input"
                  type="email"
                  v-model="formData_register.auth_code"
                  style="width: 50%"
                  placeholder="请输入验证码"
                  @keydown.enter="register_next_step"
                />
                <button
                  @click="getEmailCode"
                  style="
                    width: 50%;
                    background-color: white;
                    border: 2px solid #4ed5d3;
                    border-radius: 10px;
                  "
                >
                  获取验证码
                </button>
              </div>
            </div>
          </transition>
          <transition :name="register_animation">
            <div class="register-index-box" v-if="register_index === 2">
              <div class="register-input-box">
                <i class="el-icon-thumb register-input-icon"></i>
                <input
                  class="register-input"
                  type="text"
                  v-model="formData_register.nickname"
                  placeholder="请输入昵称"
                />
              </div>
              <div class="register-input-box">
                <i class="el-icon-edit register-input-icon"></i>
                <input
                  class="register-input"
                  type="email"
                  v-model="formData_register.description"
                  placeholder="请输入自我介绍"
                  @keydown.enter="register"
                />
              </div>
            </div>
          </transition>

          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDownBig "
          >
            <div class="register-button-box" v-if="buttonShow">
              <button
                class="register-button"
                :class="{ hide: register_index === 0 }"
                @click="register_last_step"
              >
                上一步
              </button>
              <button
                v-if="register_index !== 2"
                class="register-button"
                @click="register_next_step"
              >
                下一步
              </button>
              <button v-else id="register-button" @click="register">
                注册
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../api/login'
import { set_token } from '../util/js/token'
import store from '../store'
import { judge_account } from '../api/user'
import { sendEmailCode, acceptEmailCode, userCreate } from '../api/register'
export default {
  data() {
    return {
      buttonShow: true,
      loginStatus: this.LoginStatus,
      register_animation: 'left',
      formData_login: {
        account: '',
        password: ''
      },
      formData_register: {
        account: '',
        password: '',
        repassword: '',
        email: '',
        auth_code: '',
        nickname: '',
        description: ''
      },
      register_index: 0
    }
  },
  props: ['LoginStatus'],
  methods: {
    submit() {
      login(this.formData_login.account, this.formData_login.password).then(
        (res) => {
          let data = res.data
          if (data.message === 'succeed') {
            store.dispatch('set_user', data.data)
            set_token(data.token)
            this.hide()
            this.$message({
              message: '登入成功！',
              type: 'success'
            })
          } else {
            this.$message.error('错误请输入正确的账号密码')
          }
        }
      )
    },
    hide() {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
    buttonAnimation() {
      this.buttonShow = false
      setTimeout(() => {
        this.buttonShow = true
      }, 1000)
    },
    register_last_step() {
      this.buttonAnimation()
      this.register_animation = 'right'
      setTimeout(() => {
        this.register_index--
      }, 100)
    },
    async register_next_step() {
      if (this.register_index === 0) {
        let data = await judge_account(this.formData_register.account)
        data = data.data[0].count
        if (data !== 0) {
          this.$message({
            type: 'warning',
            message: '用户名已经存在, 请换一个亲😘'
          })
          return
        }
        if (
          this.formData_register.password !== this.formData_register.repassword
        ) {
          this.$message({
            type: 'error',
            message: '两次输入的密码不正确'
          })
          return
        }
      }
      this.buttonAnimation()
      this.register_animation = 'left'
      setTimeout(() => {
        this.register_index++
      }, 100)
    },
    getEmailCode() {
      sendEmailCode(this.formData_register.email).then((res) => {
        let data = res.data
        if (data.message === 'succeed') {
          this.$message({
            type: 'success',
            message: '发送成功，请检查您的邮箱'
          })
        } else if (data.message === 'repetition') {
          this.$message({
            type: 'error',
            message: '发送过邮件啦'
          })
        } else {
          this.$message({
            type: 'error',
            message: '出错了'
          })
        }
      })
    },
    async register() {
      const acceptData = await acceptEmailCode(
        this.formData_register.email,
        this.formData_register.auth_code
      )
      if (acceptData.data.message === 'error') {
        this.$message({
          type: 'error',
          message: '验证码不正确'
        })
        return
      }
      const data = await userCreate(
        this.formData_register.account,
        this.formData_register.password,
        this.formData_register.nickname,
        this.formData_register.email,
        this.formData_register.description
      )
      if (data.data.message === 'succeed') {
        this.formData_login.account = this.formData_register.account
        this.formData_login.password = this.formData_register.password
        this.submit()
      } else {
        this.$message({
          type: 'error',
          message: '注册失败'
        })
      }
    }
  }
}
</script>

<style scoped>
.hide {
  visibility: hidden;
}
.loginUI {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 55%;
  height: 70%;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.login {
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.title {
  font-size: 30px;
  margin: 15% 0 7%;
}
.login-input-box,
.register-input-box {
  width: 80%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}
.login-input-icon,
.register-input-icon {
  width: 50px;
  height: 50px;
  background-color: #4ed5d3;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 20px;
}
.login-input,
.register-input {
  border: 0;
  background-color: #f4f4f4;
  width: 100%;
  outline: 0;
  padding: 1em;
  font-size: 18px;
}
button {
  border-radius: 3px;
  transition: all 50ms;
}
button:active {
  transform: scale(0.9);
}
.login-button {
  width: 80%;
  height: 50px;
  border: 0;
  margin: 20px 0;
  background-color: #4ed5d3;
  color: white;
  font-size: 20px;
}
.register-button-box {
  width: 27.5vw;
  display: flex;
  justify-content: center;
}
.register-button {
  width: 15%;
  height: 30px;
  border: 0;
  margin: 20px 20px;
  background-color: #4ed5d3;
  color: white;
  font-size: 15px;
}
#register-button {
  width: 15%;
  height: 30px;
  border: 0;
  margin: 20px 20px;
  background-color: rgba(197, 48, 48, 0.795);
  color: white;
  font-size: 15px;
}
.register {
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.close {
  position: absolute;
  top: 5px;
  z-index: 99;
  right: 5px;
  font-size: 30px;
}
.register-step {
  width: 80%;
}
.register-index-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 27.5vw;
}
.close:hover {
  transform: rotateZ(360deg);
  transition: all 1s;
  color: blue;
}

.box-mask-realy {
  overflow: hidden;
  width: 45%;
  height: 85%;
  top: 7.5%;
  left: 50%;
  position: absolute;
  background: url('../assets/images/login.jpg') center/cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: all 1s;
  z-index: 1000;
}
.box-mask-button {
  width: 30%;
  height: 30px;
  border: 0;
  margin: 20px 20px;
  background-color: #4ed5d3;
  color: white;
  font-size: 15px;
}
.box-mask-register {
  left: 5%;
  background-position: 0% 0%;
}

.left-enter-active {
  position: absolute;
  animation-name: leftin;
  animation-duration: 0.8s;
}
.left-leave-active {
  position: absolute;
  animation-name: leftout;
  animation-duration: 0.8s;
}
.right-enter-active {
  position: absolute;
  animation-name: rightin;
  animation-duration: 0.8s;
}
.right-leave-active {
  position: absolute;
  animation-name: rightout;
  animation-duration: 0.8s;
}

@keyframes leftin {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes leftout {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes rightin {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes rightout {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
