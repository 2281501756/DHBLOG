<template>
  <div>
    <header>
      <Nav />
      <SlideShow :talkData="talkData" :title="title" />
    </header>
  </div>
</template>

<script>
import Nav from "./body/views/Nav.vue";
import SlideShow from "./body/views/SlideShow.vue";
export default {
  components: {
    Nav,
    SlideShow,
  },
  props: ["talkData", "title"],
};
</script>

<style scoped>
header {
  height: 100vh;
  overflow: hidden;
}
</style>