<template>
  <div id="app">
    <main-nav></main-nav>
    <section class="router-view">
      <router-view class="container"></router-view>
    </section>
  </div>
</template>

<script>
  import MainNav from "./components/main-nav";
  import Chart from 'chart.js';
  console.log(Chart.defaults.global.tooltips);
//  Chart.defaults.global.tooltips.backgroundColor = '#fff';
  Chart.defaults.global.tooltips.cornerRadius = 1;
  Chart.defaults.global.tooltips.xPadding = 10;
  Chart.defaults.global.tooltips.bodyFontColor = '#7b7b7b';
  Chart.defaults.global.tooltips.footerFontColor = '#7b7b7b';
  export default {
    components: { MainNav },
    name      : 'app'
  }
</script>

<style scoped>
  .router-view {
    padding: 0 1em;
    height: calc(100vh - 110px);
    max-height: calc(100vh - 110px);
  }
</style>
