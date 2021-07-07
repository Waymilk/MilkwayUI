<template>
  <div>
    <Topnav isMenuIconShow />
    <div class="content">
    <aside  :class="{'z-show':menuVisible}">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <a href="javascript:;">持续完善中...</a>
        </li>
      </ol>
    </aside>
    <main >
      <router-view @click="change" />
    </main>
  </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components:{
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const change = () =>{
      if (document.body.clientWidth < 500) {
        menuVisible.value = false
      }
    }
    return {menuVisible,change}
  }
}
</script>
<style lang="scss" scoped>
.content{
  display: flex;
  flex: 1;
  height: 100%;
  padding-top: 58px;
  box-sizing: border-box;
}
aside{
  background: #fff;
  border-right: 2px solid #f7c9c9;
  width: 200px;
  margin-top: 62px;
  padding-top: 10px;
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  z-index: 5;
  transition: left 0.5s;
  text-align: left;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  &.z-show{
    left:0
  }
  h2{
    margin: 14px 0;
    padding-left: 20px;
  }
  ol{
    li{
      height:56px;
      cursor:pointer;
      line-height: 56px;
      color: #000;
      a{
        display: block;
        padding-left: 20px;
      }
      &:hover{
        background: #d3dde0;
      }
      .router-link-active{
        background: #d3dde0;
      }

    }
  }
  @media (max-width:500px) {
    // position: fixed;
    // top: 0;
    // left: 0;
    display: block;

  }
}
main{
  width: calc(100% - 182px);
  margin-left: 182px;
  padding: 40px 60px 60px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  &::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 2px;
  background   : rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
  }
  @media (max-width:500px) {
    width: 100%;
    margin-left:0;
    padding: 20px 8px;
  }
}

</style>