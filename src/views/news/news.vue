<template>
  <div class="news">
    <Header
      title="新闻页面"
      :talkData="['时间是人类发展的空间', '关心国家大事']"
    ></Header>
    <div class="body">
      <div class="content">
        <div class="left">
          <template v-for="i of tableData">
            <div
              :key="i.id"
              :class="{ active: i.id === tableClickID }"
              @click="clickTable(i.id)"
            >
              <img :src="i.photo" alt="图片" />
              <span>{{ i.name }}</span>
            </div>
          </template>
        </div>
        <div class="right">
          <div class="right-head">
            <img :src="tableData[tableClickID].photo" alt="图片" />
            <span>{{ tableData[tableClickID].name }} · 热搜榜</span>
          </div>
          <div class="news-main">
            <a
              class="new-list-data"
              v-for="i of newsDate"
              :key="i.index"
              :href="i.link"
              target="_blank"
            >
              <div class="index">{{ i.index }}</div>
              <div class="title">{{ i.title }}</div>
              <div class="fire">{{ i.hotValue }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../layout/Header.vue'
import Footer from '../../layout/Footer.vue'
import axios from 'axios'
export default {
  data() {
    return {
      tableClickID: 0,
      tableData: [
        {
          id: 0,
          name: 'bilibili',
          photo:
            'https://file.ipadown.com/tophub/assets/images/media/bilibili.com.png_50x50.png',
          qid: '74KvxwokxM'
        },
        {
          id: 1,
          name: '微博',
          photo:
            'https://file.ipadown.com/tophub/assets/images/media/s.weibo.com.png_50x50.png',
          qid: 'KqndgxeLl9'
        },
        {
          id: 2,
          name: '抖音',
          photo:
            'https://file.ipadown.com/tophub/assets/images/media/iesdouyin.com.png_50x50.png',
          qid: 'DpQvNABoNE'
        },
        {
          id: 3,
          name: '知乎',
          photo:
            'https://file.ipadown.com/tophub/assets/images/media/zhihu.com.png_50x50.png',
          qid: 'mproPpoq6O'
        },
        {
          id: 4,
          name: 'AcFun',
          photo:
            'https://file.ipadown.com/tophub/assets/images/media/acfun.cn.png_50x50.png',
          qid: 'qENeYpdY49'
        }
      ],
      newsDate: []
    }
  },
  methods: {
    clickTable(id) {
      this.tableClickID = id
      this.requireData(this.tableData[id].qid).then((res) => {
        this.newsDate = res.data.data
      })
    },
    requireData(id) {
      return axios({
        url: 'https://api.codelife.cc/api/top/list',
        headers: {
          signaturekey: 'U2FsdGVkX1/TktsNQEfiqlf/c8bs07azFRiEzAx48sQ=',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA3YmE2MDQxMTE4ZjI0N2UwODNiNDIiLCJpYXQiOjE2NDk4OTY2NjksImV4cCI6MTY4MTAwMDY2OX0.0tjvmpvz_Hv7xOpCCictWj5iNLhnSoGE1Lo4Abw5fNo',
          version: '1.2.29.3'
        },
        method: 'POST',
        data: {
          id
        }
      })
    }
  },

  mounted() {
    this.requireData(this.tableData[0].qid).then((res) => {
      this.newsDate = res.data.data
    })
  },
  components: { Header, Footer }
}
</script>

<style scoped>
.news {
  width: 100vw;
}
.body {
  min-height: 120vh;
  width: 100vw;
  display: flex;
  padding: 10vh 0;
  justify-content: center;
  background-color: #f1f1f1;
}
.content {
  min-height: 100vh;
  width: 70vw;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
.left {
  width: 22%;
  border-right: 1px solid #ccc;
  padding-top: 20px;
}
.right {
  width: 78%;
}
.left > div {
  width: 100%;
  padding-left: 30%;
  font-size: 18px;
  height: 43px;
  line-height: 43px;
  cursor: pointer;
}
.left > div.active {
  background-color: #54a0ff;
}
.left > div > img {
  height: 25px;
  width: 25px;
  vertical-align: text-top;
  margin-right: 10px;
}
.right {
  padding-top: 15px;
}
.right-head {
  padding-left: 20px;
  font-size: 18px;
  height: 35px;
  line-height: 20px;
  border-bottom: 1px solid #ccc;
}
.right-head > img {
  height: 25px;
  width: 25px;
  margin-right: 5px;
  vertical-align: text-top;
}
.new-list-data {
  line-height: 35px;
  padding: 0 15px;
  height: 35px;
  width: 100%;
  position: relative;
  display: block;
}
.new-list-data > div {
  display: inline-block;
  position: relative;
}
.new-list-data .index {
  height: 20px;
  width: 20px;
  background-color: #f0f1f4;
  color: black;
  border-radius: 4px;
  text-align: center;
  line-height: 20px;
  margin-right: 10px;
  position: absolute;
  top: 7.5px;
  font-size: 12px;
}

.new-list-data .index {
  height: 20px;
  width: 20px;
  background-color: #f0f1f4;
  color: black;
  border-radius: 4px;
  text-align: center;
  line-height: 20px;
  margin-right: 10px;
  position: absolute;
  top: 7.5px;
  font-size: 12px;
}
.new-list-data .index:hover {
  color: #54a0ff;
}
.news-main .new-list-data:nth-child(1) .index {
  background-color: #f22941;
  color: white;
}
.news-main .new-list-data:nth-child(2) .index {
  background-color: #f46400;
  color: white;
}
.news-main .new-list-data:nth-child(3) .index {
  background-color: #f2a800;
  color: white;
}
.new-list-data .title {
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
  position: absolute;
  left: 40px;
}
.new-list-data .title:hover {
  color: #54a0ff;
}
.new-list-data .fire {
  position: absolute;
  right: 10px;
  color: #777;
  font-size: 14px;
}
</style>
