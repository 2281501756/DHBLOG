<template>
  <div
    style="background-color: #f7f7f7; height:100vh ; width 100vw; overflow:hidden"
  >
    <NavVue style="color: #111; background-color: white"></NavVue>
    <div class="persenal">
      <div class="left">
        <div class="letf-top">
          <div class="user-img">
            <img
              :src="this.userData.photo"
              alt="头像"
              width="60px"
              height="60px"
            />
          </div>
          <div class="left-top-user-data">
            <div>
              <div class="user-data-name">关注</div>
              <div class="user-data-num">0</div>
            </div>
            <div>
              <div class="user-data-name">粉丝</div>
              <div class="user-data-num">0</div>
            </div>
            <div>
              <div class="user-data-name">阅读量</div>
              <div class="user-data-num">0</div>
            </div>
          </div>
        </div>
        <div class="user-name-box">{{ this.userData.nickname }}</div>
        <div class="user-description-box">
          {{ this.userData.description }}
        </div>
      </div>
      <div class="right">
        <div class="right-nav">
          <div
            class="right-nav-item"
            :class="{ navActive: navIndex === 1 }"
            @click="navIndex = 1"
          >
            文章
          </div>
          <div
            class="right-nav-item"
            :class="{ navActive: navIndex === 2 }"
            @click="navIndex = 2"
          >
            收藏
          </div>
        </div>
        <div class="container">
          <div class="my-article" v-show="navIndex === 1">
            <ArticleCardMini
              v-for="(item, index) in userArticle"
              :key="index"
              :article="item"
            ></ArticleCardMini>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavVue from '../../layout/body/views/Nav.vue'
import ArticleCardMini from './components/ArticleCardMini.vue'
import { getUserArticle } from '../../api/article'
import { getForID } from '../../api/user'
export default {
  components: {
    NavVue,
    ArticleCardMini
  },
  data() {
    return {
      userid: null,
      navIndex: 1,
      userArticle: {},
      userData: {}
    }
  },
  methods: {
    async getArticleData(id) {
      this.userArticle = await (await getUserArticle(id)).data
    },
    async getUserData(id) {
      this.userData = await (await getForID(id)).data[0]
      console.log(this.userData)
    }
  },
  mounted() {
    console.log('文章界面修改 并且获取数据')
    this.userid = this.$route.params.id
    this.getArticleData(this.userid)
    this.getUserData(this.userid)
  },
  watch: {
    $route() {
      console.log('文章界面修改 ')
      this.$destroy()
    }
  },
  destroyed() {
    console.log('销毁')
  }
}
</script>

<style scoped>
.persenal {
  height: 100vw;
  display: flex;
  position: relative;
  top: 50px;
}
.left {
  width: calc(30vw);
  padding: 50px 20px 20px 50px;
  height: 100%;
  background-color: #fafafa;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.right {
  width: calc(70vw);
  height: 100%;
  background-color: #f4f5f7;
}
.letf-top {
  display: flex;
}
.user-img {
  text-align: center;
  width: 60px;
  height: 60px;
}
.user-img > img {
  border-radius: 50%;
}
.left-top-user-data {
  display: flex;
  align-items: center;
  width: 100%;
}
.left-top-user-data > div {
  position: relative;
  height: 45px;
  width: 33%;
  text-align: center;
  cursor: pointer;
}
.left-top-user-data > div:nth-child(1):after,
.left-top-user-data > div:nth-child(2):after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 25px;
  border-left: 1px solid #999;
}

.user-data-name {
  font-size: 12px;
  font-weight: 100;
  margin-bottom: 3px;
  color: rgba(47, 48, 53, 0.7);
}
.user-data-num {
  font-size: 20px;
  font-weight: 600;
}
.user-name-box {
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
}
.user-description-box {
  margin: 10px;
  font-size: 14px;
  font-weight: 300;
  color: #111;
}
.right-nav {
  height: 60px;
  padding: 10px 20px;
}
.right-nav-item {
  display: inline-block;
  height: 40px;
  width: 80px;
  font-family: 'PingFang SC,DFPKingGothicGB-Medium,sans-serif';
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  cursor: pointer;
  background-color: #f4f5f7;
}
.navActive {
  font-weight: 800;
  font-size: 18px;
}
.container {
  max-height: calc(100vh - 110px);
  overflow: scroll;
}
.my-article {
  flex-wrap: wrap;
  transition: all 1s;
}
</style>
