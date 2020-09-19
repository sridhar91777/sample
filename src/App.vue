<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <Canvas></Canvas>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
import Sidenav from "./components/sidenav.vue";
import Canvas from "./components/canvas.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidenav,
    Canvas,
  },
  data() {
    return {
      msg2: "testing123",
      msg6: "second123",
      msg7: 123,
    };
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
</style>
