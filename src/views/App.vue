<template>
  <div  class="home component">
    <Navbar></Navbar>
    <Sidenav @onSelected="onSelectionChange"></Sidenav>
    <Canvas :index="selectedIndex" v-if="selectedIndex >= 1"></Canvas>
    <Scaling v-if="selectedIndex >= 2"></Scaling>
    <div class="threat_container">
      <Threat
        v-for="(item, index) in data"
        :key="index"
        :threat="item"
      ></Threat>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "../components/navbar.vue";
import Sidenav from "../components/sidenav.vue";
import Canvas from "../components/canvas.vue";
import Scaling from "../components/scaling.vue";
import Threat from "../components/threat.vue";

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
          data: ["Malware infested files", "Dark Web Leaks"],
        },
        {
          title: "Top High Threats",
          data: ["Black Listed", "Malicious conversation found"],
        },
        {
          title: "Top Medium Threats",
          data: [
            "DNSSEC Record",
            "Web Surface Leak",
            "DNS misconfiguration",
            "SUBDOMAIN",
            "X-Frame-Options",
          ],
        },
      ],
      selectedValue: "",
      // selectedIndex: 0,
      students: [],
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.common.count,
      selectedIndex: (state) => state.common.selectedIndex,
    }),
  },
  methods: {
    onSelectionChange(value, index) {
      console.log(index);
      this.selectedValue = value;
      this.selectedIndex = index;
    },
    async getStudents() {
      const response = await this.axios.get("http://localhost:3000/student");
      this.students = response.data;
      console.log(this.students);
    },
    async setStudent(student) {
      const response = await this.axios.post(
        "http://localhost:3000/student",
        student
      );
      console.log(response.data);
    },
  },
  mounted() {
    this.setStudent({
      name: "cherry123",
      email: "testing@132",
      password: "345234",
    });
    this.getStudents();
    // this.axios
    //   .get("http://localhost:3000/student", {
    //     headers: {},
    //   })
    //   .then((response) => {
    //     console.log("response: ", response.data);
    //   });
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
