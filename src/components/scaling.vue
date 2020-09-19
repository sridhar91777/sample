<template>
  <div id="chartContainer1" class="scaling">
    <h3>Scaling</h3>
    <div class="progress-block">
      <div>
        <span
          v-for="item in scaling"
          :key="item"
          class="progress-level"
          :class="{ 'active-low': item <= 3, 'active-medium': item > 3 && item <= 6, 'active-high': item > 6 && item <= 8, 'active-critical': item > 8 }"
        >{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scaling",
  props: {},
  data() {
    return {
      scaling: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {},
};
</script>

<style>
#chartContainer1 {
  height: 320px;
  width: 40%;
}
.progress-block {
  margin: 5%;
  padding: 20px;
  text-align: center;
}

.progress-level {
  padding: 10px;
  border: 1px solid #000;
}
.progress-level:not(:last-child) {
  border-right-style: none !important;
}
.progress-level.active-low {
  color: #fff;
  background: #00f;
}
.progress-level.active-medium {
  color: #fff;
  background: #ff0;
}
.progress-level.active-high {
  color: #fff;
  background: red;
  opacity: 0.7;
}
.progress-level.active-critical {
  color: #fff;
  background: red;
}
.scaling h3 {
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  font-weight: 600;
  text-align: left;
}
</style>

