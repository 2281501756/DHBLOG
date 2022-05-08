  <template>
  <div class="label">
    <div class="color" ref="color"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["color", "text"],
  mounted() {
    this.$refs.color.style.backgroundColor = this.color;
  },
};
</script>

<style scoped>
.label {
  display: inline-block;
  border: 1px solid #eee;
  height: 30px;
  border-radius: 2px;
  margin: 5px 10px;
  cursor: pointer;
}
.color {
  height: 12px;
  width: 12px;
  border-radius: 6px;
  margin-left: 5px;
  display: inline-block;
}
.text {
  line-height: 30px;
  display: inline-block;
  margin: 0 10px;
  color: #717171;
}
</style>