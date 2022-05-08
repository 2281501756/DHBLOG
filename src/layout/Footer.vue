<template>
  <div>
    <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
    <footer ref="root" class="pattern-zigzag-sm">
      <img src="@/assets/images/footer.jpg" alt="" />
      <button @click="buttonClick">换图案</button>
      <input ref="color" type="color" @change="inputchange" />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classList: [
        "pattern-zigzag-sm",
        "pattern-dots-sm",
        "pattern-horizontal-lines-lg",
        "pattern-triangles-lg",
        "pattern-zigzag-sm",
        "	pattern-zigzag-xl",
        "	pattern-dots-xl",
        "	pattern-vertical-lines-xl",
        "pattern-vertical-stripes-sm",
        "pattern-vertical-lines-lg",
        "	pattern-cross-dots-lg",
        "pattern-grid-sm",
        "pattern-checks-sm",
        "pattern-vertical-lines-md",
        "	pattern-triangles-lg",
        "pattern-checks-xl",
        "pattern-vertical-lines-sm",
      ],
      classindex: 0,
    };
  },
  mounted() {
    let classname = localStorage.getItem("footerClass");
    this.$refs.root.class = "";
    this.$refs.root.setAttribute("class", classname);
    this.$refs.root.style.color = localStorage.getItem("footerColor");
    this.$refs.color.value = localStorage.getItem("footerColor");
  },
  methods: {
    buttonClick() {
      this.$refs.root.removeAttribute("class");
      this.classindex = (this.classindex + 1) % this.classList.length;
      let classname = this.classList[this.classindex];
      this.$refs.root.class = "";
      this.$refs.root.setAttribute("class", classname);
      localStorage.setItem("footerClass", classname);
    },
    inputchange() {
      console.log(this.$refs.color.value);
      this.$refs.root.style.color = this.$refs.color.value;
      localStorage.setItem("footerColor", this.$refs.color.value);
    },
  },
};
</script>

<style scoped>
footer {
  color: rgba(0, 0, 0, 0.1);
  font-size: 30px;
  height: 45vh;
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
button,
input {
  position: absolute;
  bottom: 0%;
  right: 0%;
  height: 30px;
  width: 60px;
  border: 1px solid #222;
  background-color: #fff;
}
button:active {
  transform: scale(0.98);
}
button {
  right: 60px;
}
</style>