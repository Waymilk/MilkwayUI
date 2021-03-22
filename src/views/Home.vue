<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Milkway-UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://giuthub.com" class="btn">Github</a>
        <router-link to="/doc" class="btn">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components:{Topnav}
}
</script>
<style lang="scss" scoped>
.banner{
  padding: 180px 0 150px;
  color: #05538c;
  background: #aed1e4;
  background: linear-gradient(145deg,#aed1e4 0,#427da9 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  margin: 0 auto;
  h1{
    text-align: center;
    font-size: 34px;
    line-height: 52px;
  }
  h2{
    text-align: center;
    font-size: 34px;
    line-height: 52px;
  }
  .actions{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .btn{
      margin-left: 20px;
      padding:6px 10px;
      border-radius: 20px;
      background-color: #fff;
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>