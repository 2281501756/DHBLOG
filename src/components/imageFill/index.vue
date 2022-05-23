<!-- <template>
  <div class="box">
    <div
      style="width: 100%; height: 100%; position: absolute"
      @click="hide"
    ></div>
    <img ref="img" :src="url" alt="" />
    <div class="button-box">
      <span>
        <i class="el-icon-circle-plus-outline" ref="add"></i>
      </span>
      <span>
        <i class="el-icon-remove-outline" ref="sub"></i>
      </span>
    </div>
  </div>
</template>

<script>
import baseURl from '../../../manage/util/baseURl'
export default {
  data() {
    return {
      imgEnter: false,
      clickX: 0,
      clickY: 0,
      addButtonStatus: false,
      subButtonStatus: false,
      addTimeID: 0,
      subTimeID: 0
    }
  },
  props: {
    url: {
      type: String,
      default: `${baseURl}/static/image/articleImage/1.jpg`
    }
  },
  methods: {
    addButtonDownEvent() {
      this.addButtonStatus = true
      this.addTimeID = setInterval(() => {
        let width = parseInt(this.$refs.img.width)
        this.$refs.img.style.width = width + 10 + 'px'
      }, 25)
    },
    addButtonUpEvent() {
      this.addButtonStatus = false
    },
    addButtonLeaveEven() {
      this.addButtonStatus = false
    },

    subButtonDownEvent() {
      this.subButtonStatus = true
      this.subTimeID = setInterval(() => {
        let width = parseInt(this.$refs.img.width)
        this.$refs.img.style.width = width - 10 + 'px'
      }, 25)
    },
    subButtonUpEvent() {
      this.subButtonStatus = false
    },
    subButtonLeaveEven() {
      this.subButtonStatus = false
    },
    hide() {
      window.removeEventListener('mousewheel', this.wheelEvent)
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
    wheelEvent(e) {
      e.preventDefault()
      let width = parseInt(this.$refs.img.width)
      if (e.deltaY > 0) {
        this.$refs.img.style.width = width - 25 + 'px'
      } else {
        this.$refs.img.style.width = width + 25 + 'px'
      }
    },
    imgMouseDown(e) {
      e.preventDefault && e.preventDefault()
      this.imgEnter = true
      this.clickX = e.offsetX
      this.clickY = e.offsetY
    },
    imgMouseup() {
      this.imgEnter = false
    },
    imgMouseMove(e) {
      this.$refs.img.style.top = e.clientY - this.clickY + 'px'
      this.$refs.img.style.left = e.clientX - this.clickX + 'px'
    }
  },
  mounted() {
    this.$el.addEventListener('mousewheel', this.wheelEvent)
    this.$refs.img.addEventListener('mousedown', this.imgMouseDown)
    this.$refs.img.addEventListener('mouseup', this.imgMouseup)
    this.$refs.add.addEventListener('mousedown', this.addButtonDownEvent)
    this.$refs.sub.addEventListener('mousedown', this.subButtonDownEvent)
  },
  watch: {
    imgEnter(newValue) {
      if (newValue)
        this.$refs.img.addEventListener('mousemove', this.imgMouseMove)
      else this.$refs.img.removeEventListener('mousemove', this.imgMouseMove)
    },
    addButtonStatus(newValue) {
      if (newValue) {
        this.$refs.add.addEventListener('mouseup', this.addButtonUpEvent)
        this.$refs.add.addEventListener('mouseleave', this.addButtonLeaveEven)
      } else {
        clearInterval(this.addTimeID)
        this.$refs.add.removeEventListener('mouseup', this.addButtonUpEvent)
        this.$refs.add.removeEventListener(
          'mouseleave',
          this.addButtonLeaveEven
        )
      }
    },
    subButtonStatus(newValue) {
      if (newValue) {
        this.$refs.sub.addEventListener('mouseup', this.subButtonUpEvent)
        this.$refs.sub.addEventListener('mouseleave', this.subButtonLeaveEven)
      } else {
        clearInterval(this.subTimeID)
        this.$refs.sub.removeEventListener('mouseup', this.subButtonUpEvent)
        this.$refs.sub.removeEventListener(
          'mouseleave',
          this.subButtonLeaveEven
        )
      }
    }
  }
}
</script>

<style scoped>
.box {
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.45);
  top: 0;
  left: 0;
  z-index: 99999;
}
img {
  width: 50%;
  position: absolute;
}
.button-box {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0%;
  color: white;
  width: 20%;
  height: 20%;
  font-size: 50px;
  z-index: 100000;
}
i:active {
  transform: scale(0.8);
}
</style> -->
