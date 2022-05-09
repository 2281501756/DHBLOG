<template>
  <div class="comment">
    <div class="left">
      <img ref="img" :src="commentData.photo" alt="用户头像" />
    </div>
    <div class="right">
      <div class="name">{{ commentData.nickname }}</div>
      <div class="content">
        {{ commentData.content }}
      </div>
      <div class="date">
        {{ date }}
        <span style="margin-left: 25px; cursor: pointer" @click="replyClick"
          >回复</span
        >
      </div>
      <div class="comment-item-box">
        <template v-for="item of comment.children">
          <commentItemVue :key="item.id" :child="item"></commentItemVue>
        </template>
      </div>
      <div class="textarea-box" v-show="textIsShow && $store.state.loginState">
        <div style="height: 56px; display: inline-block; padding: 8px 10px">
          <img :src="$store.state.user.photo" alt="" />
        </div>
        <textarea
          cols="60"
          rows="4"
          :placeholder="`对${commentData.nickname}的回复`"
          v-model="textareaDate"
        ></textarea>
        <button class="textarea-button" @click="submitCommit">回复评论</button>
      </div>
    </div>
  </div>
</template>

<script>
import commentItemVue from './commentItem.vue'
import { getForID } from '../../../api/user'
import { time_all } from '../../../util/js/time'
import { reply } from '../../../api/comment'
export default {
  data() {
    return {
      commentData: {},
      textareaDate: '',
      textIsShow: false
    }
  },
  props: {
    comment: {
      typeof: {},
      default: {}
    }
  },
  components: {
    commentItemVue
  },
  computed: {
    date() {
      return time_all(this.commentData.date)
    }
  },
  methods: {
    replyClick() {
      if (!this.$store.state.loginState) {
        this.$message({
          message: '请登录',
          type: 'error'
        })
      }
      this.textIsShow = !this.textIsShow
    },
    async submitCommit() {
      this.textareaDate = this.textareaDate.trim()
      if (!this.textareaDate) {
        this.$message({
          message: '不能为空',
          type: 'error'
        })
        return
      }
      let res = await (
        await reply(
          this.$store.state.user.id,
          this.commentData.id,
          this.textareaDate
        )
      ).data
      console.log(res)
      if (res.message === 'error') {
        this.$message({
          message: '出错了',
          type: 'error'
        })
      } else {
        this.textareaDate = ''
        this.$emit('refresh')
        this.$message({
          message: '成功',
          type: 'success'
        })
      }
    },
    async getCommentDate() {
      let result = this.comment
      let res = await getForID(result.user_id)
      result.photo = res.data[0].photo
      result.nickname = res.data[0].nickname
      this.commentData = result
    }
  },
  mounted() {
    this.getCommentDate()
  }
}
</script>

<style scoped>
.comment {
  position: relative;
  border-top: 1px solid #ddd;
  padding: 20px 0 0 0;
}
.left {
  text-align: center;
  position: absolute;
  padding: 20px 0;
  width: 85px;
  left: 0;
  top: 0;
}
.left > img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.right {
  margin-left: 85px;
}
.name {
  font-size: 15px;
  font-weight: 600;
  color: #898989;
  margin: 2.5px 0;
}
.comment {
  margin: 2.5px 0;
}
.date {
  margin: 5px 0;
  font-size: 12px;
  color: #aaa;
}

.content-bottom {
  padding-top: 20px;
}
textarea {
  vertical-align: top;
  border-radius: 8px;
  padding: 2px;
  background-color: #f4f5f7;
  resize: none;
  outline: none;
}
textarea:hover,
textarea:focus {
  border: 1px solid #3aa2d6;
  background-color: white;
}
.textarea-box {
  margin: 20px 0;
}
.textarea-box img {
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.textarea-button {
  vertical-align: top;
  height: 65px;
  width: 65px;
  margin-left: 20px;
  background-color: #3aa2d6;
  border-radius: 5px;
  font-size: 15px;
  padding: 14px;
  color: white;
  border: 0;
}
.textarea-button:active {
  transform: scale(0.95);
}
</style>
