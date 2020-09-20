<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidenav @onSelected="onSelectionChange"></Sidenav>
    <Canvas :index="selectedIndex"></Canvas>
    <Scaling></Scaling>
    <div class="threat_container">
      <Threat v-for="(item, index) in data" :key="index" :threat="item"></Threat>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
import Sidenav from "./components/sidenav.vue";
import Canvas from "./components/canvas.vue";
import Scaling from "./components/scaling.vue";
import Threat from "./components/threat.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidenav,
    Canvas,
    Scaling,
    Threat,
  },
  data() {
    return {
      data: [
        {
          title: "Top Critical Threats",
          data: ["DESCRIPTION", "DESCRIPTION", "DESCRIPTION", "DESCRIPTION"],
        },
        { title: "Top High Threats", data: ["DESCRIPTION", "DESCRIPTION"] },
        { title: "Top Medium Threats", data: ["DESCRIPTION"] },
      ],
      selectedValue: "",
      selectedIndex: 0,
    };
  },
  methods: {
    onSelectionChange(value, index) {
      console.log(index);
      this.selectedValue = value;
      this.selectedIndex = index;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.scaling {
  min-height: 260px;
  margin: 10px 10px 0 20px;
  overflow-y: auto;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
}
h3 {
  font-size: 16px !important;
}
.threat_container {
  padding-left: 43px;
}
</style>
