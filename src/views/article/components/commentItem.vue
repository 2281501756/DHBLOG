<template>
  <div class="item">
    <div class="left">
      <img :src="childData.photo" alt="" />
    </div>
    <div class="right">
      <div class="name">{{ childData.nickname }}</div>
      <div class="content">
        {{ childData.content }}
      </div>
      <div class="date">{{ date }}</div>
      <div class="comment-item-box"></div>
    </div>
  </div>
</template>

<script>
import { getForID } from '../../../api/user'
import { time_all } from '../../../util/js/time'
export default {
  props: {
    child: {
      typeof: {}
    }
  },
  data() {
    return {
      childData: {}
    }
  },
  computed: {
    date() {
      return time_all(this.childData.date)
    }
  },
  methods: {
    async getChildDate() {
      let result = this.child
      let res = await (await getForID(result.user_id)).data
      result.photo = res[0].photo
      result.nickname = res[0].nickname
      this.childData = result
    }
  },
  mounted() {
    this.getChildDate()
  }
}
</script>

<style scoped>
.item {
  position: relative;
}
.left {
  text-align: center;
  position: absolute;
  width: 40px;
  left: 0;
  top: 0;
}
.left > img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.right {
  height: 80px;
  margin-left: 40px;
}
.name {
  font-size: 13px;
  font-weight: 600;
  color: #898989;
  margin: 2.5px 0;
}
.comment {
  margin: 2.5px 0;
  font-size: 16px;
}
.date {
  margin: 5px 0;
  font-size: 11px;
  color: #aaa;
}
</style>
