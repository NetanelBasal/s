<template lang="html">

  <section class="current-threads">
    <div class="circle"></div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'current-threads',
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
  .current-threads {

  }
  .circle {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    border: 10px solid rgba(0,188,212, 0.14);
  }
</style>
