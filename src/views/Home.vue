<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-03-31 14:06:23
-->
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
    <div class="features">
      <div class="bar">
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div class="text">
          <h3 class="title">基于Vue 3</h3>
          <p class="desc">骄傲地使用了Vue 3 Composition API</p>
        </div>
      </div>
      <div class="bar">
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="text">
          <h3 class="title">基于TypeScript</h3>
          <p class="desc">源代码采用TypeScript书写（非严格检查）</p>
        </div>
      </div>
      <div class="bar">
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="text">
          <h3 class="title">代码易读</h3>
          <p class="desc">每个组件的代码都极其简洁</p>
        </div>
      </div>
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
      &:first-child{
        margin-left: 0
      }
    }
  }
}
.features{
  display: flex;
  width: 400px;
  margin: 64px auto;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
  .bar{
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    margin:  30px 0;
    .text{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 12px;
      .title{
        font-size: 28px;
        font-weight: 400;
      }
      .desc{
        font-size: 14px;
      }
    }
    .icon{
      font-size: 64px;
    }
  }
  @media (min-width:400px) {
    width:400px
  }
  @media (min-width:800px) {
    width:800px
  }
  @media (min-width:1200px) {
    width:1200px
  }
}
</style>