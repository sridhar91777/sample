<template>
  <div class="low-threats">
    <h3>{{threat.title}}</h3>
    <div>
      <ul>
        <li v-for="(item, index) in threat.data" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Threat",
  props: {
    threat: Object,
  },
  data() {
    return {
      data: [1, 2, 3],
    };
  },
  mounted() {
    console.log(this.threat);
  },
};
</script>

<style>
.low-threats {
  min-height: 220px;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px 1px;
  padding: 10px;
  margin: 10px;
  width: 20.66667%;
  float: left;
}
.low-threats h3 {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 0px;
  font-weight: 600;
  padding: 15px;
}
.low-threats div {
  display: inline-block;
}
ul {
  list-style-type: disc !important;
  text-align: initial;
}
li {
  display: list-item !important;
}
</style>