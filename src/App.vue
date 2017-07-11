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
