<template>
  <div id="app">
    <transition name="fold-left">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("#loading").remove();
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
.fold-left-enter-active {
  position: absolute;
  animation-name: fadeIn;
  animation-duration: 1.5s;
}
.fold-left-leave-active {
  position: absolute;
  animation-name: bounceOutRight;
  animation-duration: 0.75s;
}
</style>
