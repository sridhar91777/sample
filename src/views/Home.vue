<template>
  <div>
    <Navbar></Navbar>
    <Sidenav></Sidenav>
  </div>
</template>


<script>
import Navbar from "../components/navbar.vue";
import Sidenav from "../components/sidenav.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    Sidenav,
  },
  computed: {
    ...mapState({
      count: (state) => state.common.count,
    }),
  },
  mounted() {
    console.log("count: ", this.count);
  },
};
</script>