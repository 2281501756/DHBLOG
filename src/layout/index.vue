<template>
  <div class="root">
    <Header
      title="欢迎来到，DH的个人博客"
      :talkData="[
        '我早就闭上了双眼，我的目的只在于黑暗之中。宇智波佐助——《火影忍者》',
        '能原谅女人谎言的才是真正的男人。——《海贼王》',
        '正因为我们看不见，那才可怕。黑崎一护——《死神》',
        '伴随着这种世袭制度，人类的错误历史也将不断重演。——灰原哀',
        '要是喜欢一个人，就要连那个人脏的地方一起喜欢。坂田银时——《银魂》'
      ]"
    />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from './Header.vue'
// import Body from './body/index.vue'
import Footer from './Footer.vue'
export default {
  components: { Header, Footer }
}
</script>

<style scoped>
.root {
  width: 100vw;
}
</style>
