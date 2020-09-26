<template>
  <div>
    <b-sidebar id="sidebar-1" style="width: 170px" shadow>
      <div class="px-3 py-2">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item
                :index="index"
                v-for="(item, index) in sideNavData"
                :key="index"
                @click="setSelected(item, index)"
              >
                <span>{{item.title}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
  props: {
    msg: String,
  },
  data() {
    return {
      mockData: "",
      sideNavData: [
        { key: "ovr", title: "Overall" },
        { key: "brd", title: "Brand Watch" },
        { key: "dns", title: "DNS Watch" },
        { key: "dom", title: "Domain Watch" },
        { key: "inf", title: "Info Leak Watch" },
        { key: "phs", title: "Phish Watch" },
        { key: "vip", title: "VIP Watch" },
      ],
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    setSelected(item, index) {
      console.log(item);
      this.$store.dispatch('setIndex', index);
      // this.$emit('onSelected', item.key, index);
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.progress {
  display: -webkit-inline-box;
}
#sidebar-1 {
  width: 170px;
}
.el-menu {
  border-right: none !important;
  background-color: unset !important;
}
</style>