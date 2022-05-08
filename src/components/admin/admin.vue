<template>
  <div class="admin">
    <el-container style="height: 100vh">
      <el-aside :width="menuSideWidth + 'px'" style="background-color: #324156">
        <el-menu
          :default-openeds="['1', '3']"
          :collapse="menuShow"
          :collapse-transition="false"
          background-color="#324156"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="overflow-x: hidden"
        >
          <div style="display: flex; justify-content: center; margin: 20px 0">
            <img src="../../assets/logo.png" alt="" width="30px" />
            <h4
              style="color: #ccc; margin-top: 5px; margin-left: 5px"
              v-show="title"
            >
              博客管理系统
            </h4>
          </div>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-s-custom"></i>
              <span slot="title">用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="userfond"
                >用户查询</el-menu-item
              >
              <el-menu-item index="1-2">修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-s-order"></i>
              <span slot="title">文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header
          style="font-size: 12px; border-bottom: 1px solid #ccc"
          class="header"
        >
          <div>
            <i
              :class="menuIcon"
              style="font-size: 25px"
              @click="changeMenu"
            ></i>
          </div>
          <div>
            <el-dropdown @command="dropdownEven">
              <span class="el-dropdown-link">
                <div class="block" style="display: flex; cursor: pointer">
                  <el-avatar
                    :size="30"
                    :src="this.$store.state.user.photo"
                  ></el-avatar>
                  <div style="width: 30px; line-height: 30px; margin: 0 10px">
                    {{ this.$store.state.user.nickname }}
                  </div>
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="message">信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      menuShow: false,
      menuSideWidth: 200,
      title: true,
      menuIcon: 'el-icon-s-fold'
    }
  },
  methods: {
    changeMenu() {
      this.menuShow = !this.menuShow
      if (this.menuSideWidth === 200) {
        this.menuSideWidth = 64
        this.title = false
        this.menuIcon = 'el-icon-s-unfold'
      } else {
        this.menuSideWidth = 200
        this.title = true
        this.menuIcon = 'el-icon-s-fold'
      }
    },
    dropdownEven() {
      console.log('123')
      this.$router.push('/manageLogin')
    },
    userfond() {
      this.$router.push('/admin/user')
    }
  },
  beforeCreate() {
    if (!this.$store.state.user.nickname) {
      this.$router.push('/manageLogin')
    }
  }
}
</script>

<style scoped>
.admin {
  height: 100vh;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
