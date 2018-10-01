<template>
  <div class="head">
    <div>雍宝乐家政</div>
    <carousel />
    <v-content />
  </div>
</template>

<script>
import carousel from "./carousel";
import vContent from "./content";

export default {
  components: {
    carousel,
    vContent
  },
  props: {
    msg: String
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
