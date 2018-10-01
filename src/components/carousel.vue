<template>
  <el-carousel :interval="4000"
    class="head-carousel"
    type="card"
    height="200px">
    <el-carousel-item v-for="(pic, i) in pics"
      :key="i">
      <img :src="pic" width="100%">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      pics: ["/pic/1.jpg", "/pic/2.jpg", "/pic/3.jpg", "/pic/4.jpg"]
    };
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
.head-carousel {
  width: 1080px;
  margin: 0 auto;
}
</style>
