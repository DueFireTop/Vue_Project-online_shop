<template>
  <div id="app">
    <HeaderIndex></HeaderIndex>

      <!-- 路由组件的出口 -->
      <router-view></router-view>

    <!-- 在Home、Search显示Footer组件，在Login、Register是隐藏的 -->
    <FooterIndex v-show="$route.meta.isShowFooter"></FooterIndex>
  </div>
</template>

<script>

import HeaderIndex from './components/Header';
import FooterIndex from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderIndex,
    FooterIndex,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
