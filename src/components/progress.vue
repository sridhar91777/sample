<template>
  <div class="progress_div">
    <div v-for="bar in bars" :key="bar.variant" class="row mb-1">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {},
  data() {
    return {
      bars: [
        { variant: "success", value: 75 },
        { variant: "info", value: 75 },
        { variant: "warning", value: 75 },
        { variant: "danger", value: 75 },
        { variant: "primary", value: 75 },
      ],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style>
.progress_div {
  width: 50%;
  text-align: "right";
}
</style>