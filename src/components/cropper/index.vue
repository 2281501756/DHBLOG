<template>
  <div>
    <input type="file" ref="input" @change="upimage" />
    <button @click="open">上传</button>
    <div class="box">
      <vueCropper
        ref="cropper"
        :img="url"
        :autoCrop="true"
        :fixed="true"
        :centerBox="true"
      ></vueCropper>
    </div>
    <button @click="clickButton">按钮</button>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  data() {
    return {
      url: ''
    }
  },
  components: {
    VueCropper
  },
  methods: {
    upimage() {
      const file = this.$refs.input.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        console.log(this.result)
      }
    },
    open() {
      this.$refs.input.click()
    },
    clickButton() {
      this.$refs.cropper.getCropData((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
.box {
  height: 500px;
  width: 500px;
}
</style>
