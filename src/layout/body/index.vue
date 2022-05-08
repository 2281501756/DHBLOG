<template>
  <div class="body">
    <div class="left">
      <Introduce />
      <Card title="推荐文章" width="280px">
        <div
          @click="favLink(item.id)"
          class="favour"
          v-for="item in favourArticle"
          :key="item.id"
        >
          <div
            class="favour-img"
            :style="{ background: `url(${item.photo}) no-repeat center/cover` }"
          ></div>
          <div class="favour-data">
            <div class="title">{{ item.title }}</div>
            <div class="view">{{ item.readnum }}阅读量</div>
          </div>
        </div>
      </Card>
    </div>
    <div class="center">
      <ArticleCard v-for="(item, i) in bookData" :key="i" :articleData="item" />
      <div class="loading" v-show="isLoading">
        <div class="loading-container"></div>
        <div style="">加载中···</div>
      </div>
      <div
        class="bottom"
        v-show="this.bookDataNumberNow >= this.serveBookDataNumber"
      >
        <div class="loading-container"></div>
        没有更多了
      </div>
    </div>
    <div class="right">
      <Card title="关于我" height="480px">
        <template>
          <div style="height: 200px; width: 100%">
            <div
              style="
                height: 100px;
                width: 100%;
                display: flex;
                justify-content: center;
              "
            >
              <img
                :src="
                  this.$store.state.user.photo ||
                  require('../../assets/images/1.jpg')
                "
                alt=""
                height="100px"
                width="100px"
                style="border-radius: 50%"
                @click="imageClick"
              />
            </div>
            <div
              style="
                text-align: center;
                margin: 10px 20px 20px 20px;
                color: #1e90ff;
                font-weight: 800;
              "
            >
              {{ this.$store.state.user.nickname || "未登录" }}
            </div>
            <p
              style="
                text-indent: 2em;
                font-size: 14px;
                line-height: 18px;
                padding: 0 20px;
              "
            >
              {{ this.$store.state.user.description || "" }}
            </p>
          </div>
          <a href="#"
            ><span style="font-size: 17px; margin: 0 5px" class="iconfont"
              >&#xe601;</span
            >github</a
          >
          <a href="#"
            ><span style="font-size: 17px; margin: 0 5px" class="iconfont"
              >&#xe6b4;</span
            >bilibili</a
          >
          <a href="#"
            ><span style="font-size: 17px; margin: 0 5px" class="iconfont"
              >&#xe600;</span
            >掘金</a
          >
          <a href="#"
            ><span style="font-size: 17px; margin: 0 5px" class="iconfont"
              >&#xe610;</span
            >npm</a
          >
        </template>
      </Card>
      <Card title="技术栈" height="250px">
        <template>
          <div style="display: flex; flex-wrap: wrap">
            <Label color="#52c41a" text="Vue"></Label>
            <Label color="red" text="HTML5"></Label>
            <Label color="rgb(33, 121, 222)" text="CSS3"></Label>
            <Label color="#fa8c16" text="JavaScript"></Label>
            <Label color="#ffec3d" text="ECMAScript"></Label>
            <Label color="rgb(48, 36, 222)" text="TypeScript"></Label>
            <Label color="rgb(22, 169, 222)" text="Less/Scss"></Label>
            <Label color="rgb(151, 222, 44)" text="Django"></Label>
            <Label color="rgb(207, 95, 222)" text="Vite/Webpack"></Label>
          </div>
        </template>
      </Card>
      <Card title="站点信息">
        <template>
          <div>
            <p style="margin: 15px 0">
              <b style="font-weight: 800">建站时间：</b>2022.3.10
            </p>
            <p style="margin: 15px 0">
              <b style="font-weight: 800">前端技术：</b>vue
            </p>
            <p style="margin: 15px 0">
              <b style="font-weight: 800">后端技术：</b>node
            </p>
            <p style="margin: 15px 0">
              <b style="font-weight: 800">站主qq：</b>2281501756
            </p>
            <p style="margin: 15px 0">
              <b style="font-weight: 800">建站目的：</b>自我学习
            </p>
            <p style="margin: 15px 0; line-height: 25px">
              <b style="font-weight: 800">功能：</b
              >这里可以写博客看动漫，听音乐，玩h5游戏在这里分享你的日常和站长一起学习成长，加油！
            </p>
          </div>
        </template>
      </Card>
      <Card title="意见反馈">
        <template>
          <textarea
            class="el-textarea__inner"
            style="width: 100%; height: 200px; resize: none"
            placeholder="请写出你对网站的建议"
          ></textarea>
          <button
            style="
              width: 100%;
              height: 30px;
              background-color: #409eff;
              border: 0;
              color: white;
              margin: 10px 0;
              border-radius: 5px;
            "
          >
            提交
          </button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./views/ArticleCard.vue";
import Introduce from "./views/Introduce.vue";
import Card from "./views/Card.vue";
import Label from "./views/Label.vue";
import { getArticle, getFavour } from "../../api/article";
export default {
  data() {
    return {
      bookData: [],
      bookDataNumberNow: 0,
      bookDataPageSize: 5,
      serveBookDataNumber: 100,
      favourArticle: {},
      isLoading: false,
      totalData: {},
    };
  },
  methods: {
    favLink(id) {
      this.$router.push("/article/" + id);
    },
    getBookData() {
      getArticle(this.bookDataNumberNow, this.bookDataPageSize).then((res) => {
        res = res.data;
        if (res.message === "error") {
          this.$message({
            type: "error",
            message: "服务器出错了😭",
          });
          return;
        }
        this.serveBookDataNumber = res.sum;
        this.bookData = [...this.bookData, ...res.data];
        this.bookDataNumberNow += this.bookDataPageSize;
        this.isLoading = false;
      });
    },
    scrollfunction() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动条距离顶部的距离
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; // 可视区的高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //dom元素的高度，包含溢出不可见的内容
      // console.log(scrollHeight + "    " + scrollTop + "    " + windowHeight);
      if (scrollHeight <= scrollTop + windowHeight + 1 && !this.isLoading) {
        if (this.bookDataNumberNow >= this.serveBookDataNumber) {
          window.removeEventListener("scroll", this.scrollfunction);
          return;
        }
        this.isLoading = true;
        console.log("获取数据");
        setTimeout(() => {
          this.getBookData();
        }, 1000);
      }
    },
    imageClick() {
      if (!this.$store.state.loginState) {
        this.$message({
          type: "warning",
          message: "登入后进入个人首页",
        });
        return;
      }
      this.$router.push(`/user/personal/center/${this.$store.state.user.id}`);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollfunction);
  },
  created() {
    this.getBookData();
    getFavour().then((res) => {
      this.favourArticle = res.data;
    });
  },
  components: {
    ArticleCard,
    Introduce,
    Card,
    Label,
  },
};
</script>

<style scoped>
.body {
  background-color: #f4f5f7;
  position: relative;
  display: flex;
}
.body > div {
  display: inline-block;
}
.left {
  width: 25%;
}
.center {
  width: 50%;
}
.right {
  width: 25%;
}
.body:after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}
.loading,
.bottom {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.loading-container {
  width: 40px;
  height: 40px;
  background: linear-gradient(blue, transparent 40%);
  border-radius: 50%;
  position: relative;
  animation: loading 3s linear infinite;
  margin-bottom: 10px;
}
.loading-container::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(blue, transparent 40%);
  z-index: -1;
  filter: blur(30px);
}
.loading-container::after {
  content: "";
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #f4f5f7;
}
@keyframes loading {
  33% {
    transform: rotate(360deg);
    filter: hue-rotate(120deg);
  }
  66% {
    transform: rotate(720deg);
    filter: hue-rotate(240deg);
  }
  100% {
    transform: rotate(1080deg);
    filter: hue-rotate(360deg);
  }
}
</style>