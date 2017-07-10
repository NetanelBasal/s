<template lang="html">

  <section class="main-nav">
  <nav class="container flex align-center">
      <ul class="flex align-center">
        <li><router-link :to="{ name: 'home'}">Sitaro</router-link>
</li>
    <li><router-link :to="{ name: 'dashboard'}">Dashboard</router-link>
</li>
    <li><router-link :to="{ name: 'threat-managment'}">threat-managment</router-link>
</li>
<li class="seperator">Icon</li>
<li>Roger harris</li>
</ul>
</nav>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'main-nav',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .main-nav {
    background-color: mediumpurple;
    padding: 0 10px;
  }

  ul, nav {
    height: 60px;
    width: 100%;
  }

  .seperator {
    margin-left: auto;
  }

  li {
    margin-left: 10px;
  }
</style>
