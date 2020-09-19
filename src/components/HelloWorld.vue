<template>
  <div class="hello">{{msg1}}</div>
   

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    msg1: String,
    msg2: String,
    msg6: String,
    msg7: Number
  },
  mounted() {
   console.log(this.msg1)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
