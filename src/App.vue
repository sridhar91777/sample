<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <Progress></Progress>
    <HelloWorld msg1="welcome"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/navbar.vue";
import Sidenav from "./components/sidenav.vue";
import Progress from "./components/progress.vue";

export default {
  name: "App",
  components: {
    Progress,
    HelloWorld,
    Navbar,
    Sidenav
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
