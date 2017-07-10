<template>
  <div id="app">
    <main-nav></main-nav>
    <section class="router-view">
      <router-view></router-view>
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
    padding: 1em;
  }
</style>
