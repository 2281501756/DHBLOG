<template>
  <div class="music">
    <Nav></Nav>
    <div class="search">
      <span><i class="el-icon-back"></i></span>
      <input
        type="text"
        placeholder="Search"
        v-model="searchValue"
        @keydown.enter="handleSearch"
      />
    </div>
    <music-body></music-body>
    <music-footer></music-footer>
    <music-search-content></music-search-content>
  </div>
</template>

<script>
import Nav from '../../layout/body/views/Nav.vue'
import musicBody from './components/musicBody.vue'
import musicFooter from './components/musicFooter.vue'
import musicSearchContent from './components/musicSearchContent.vue'
import { search } from '../../api/music'
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    handleSearch() {
      search(this.searchValue, 5, 5)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
      this.searchValue = ''
    }
  },
  components: {
    Nav,
    musicFooter,
    musicBody,
    musicSearchContent
  }
}
</script>

<style scoped>
.music {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
}
.search {
  height: 45px;
  width: 450px;
  position: absolute;
  top: 5px;
  left: 600px;
  border-radius: 3px;
  background-color: #212121;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  z-index: 99999999999999;
  box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%),
    0 5px 5px -3px rgb(0 0 0 / 40%);
}
.search > span {
  vertical-align: middle;
  display: inline-block;
  text-align: center;
  line-height: 45px;
  height: 100%;
  width: 45px;
}
.search > input {
  height: 100%;
  width: calc(100% - 50px);
  background-color: #212121;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border: 0;
  outline: none;
}
</style>
