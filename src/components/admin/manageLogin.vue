<template>
  <div class="manageLogin">
    <div class="card">
      <header>博客后台登录系统</header>
      <section>
        <div>
          <span>账号:</span>
          <el-input v-model="account"></el-input>
        </div>
        <div>
          <span>密码:</span>
          <el-input v-model="password" type="password"></el-input>
        </div>
        <el-button
          type="primary"
          style="width: 40%; font-size: 18px"
          @click="login"
          >登录</el-button
        >
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let Response = await this.$get(
        `/admin/superlogin?account=${this.account}&password=${this.password}`
      )
      let data = Response.data
      if (data.result === 'error') {
        this.$message.error('账号密码错误, 请输入正确的管理员信息')
        return
      } else {
        this.$message({
          message: '登录成功！',
          type: 'success'
        })
        this.$store.state.user = data.user
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style scoped>
.manageLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  width: 30%;
  height: 50%;
  border: 1px solid #ccc;
}
.card > header {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
}
.card > section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card > section > div {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 20px 0;
}
.card > section > div > span {
  display: inline-block;
  width: 15%;
  text-align: center;
  display: flex;
  align-items: center;
}
.card > section > div > input {
  width: 70%;
}
</style>
