<template>
  <div id="chartContainer" class="scaling"></div>
</template>

<script>
import { mapState } from "vuex";
var CanvasJS = require("../assets/canvasjs.min.js");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  name: "Canvas",
  el: "#vue-container",
  // props: { index: Number },
  data() {
    return {
      chartOptions: {
        title: {
          text: "",
        },
        width: 630,
        height: 320,
        dataPointWidth: 20,
        data: [
          {
            type: "column",
            dataPoints: [
              { x: 10, y: 71 },
              { x: 20, y: 55 },
              { x: 30, y: 50 },
              { x: 40, y: 65 },
              { x: 50, y: 95 },
              { x: 60, y: 68 },
              { x: 70, y: 28 },
              { x: 80, y: 34 },
              { x: 90, y: 14 },
            ],
          },
        ],
      },
      chart: null,
    };
  },
  watch: {
    index() {
      this.generateCanvas();
    },
  },
  computed: {
    ...mapState({
      count: (state) => state.common.count,
      index: (state) => state.common.selectedIndex,
    }),
  },
  methods: {
    generateCanvas() {
      if (this.index) {
        this.chartOptions.data[0].dataPoints.forEach((item) => {
          item.x = Math.floor(Math.random() * 100 + 1);
          item.y = Math.floor(Math.random() * 100 + 1);
        });
      }
      this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
      this.chart.render();
      document.getElementsByClassName(
        "canvasjs-chart-credit"
      )[0].style.display = "none";
    },
  },
  mounted() {
    this.generateCanvas();
  },
};
</script>

<style>
#chartContainer {
  height: 320px;
  width: 50%;
}
</style>

