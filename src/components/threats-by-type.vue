<template lang="html">

  <section class="threats-by-type">
    <p>Displaying</p>
    <h1>28 Threats</h1>

    <h5>Threats by type</h5>

    <table>
     <tr>
     <td>DDOS</td>
     <td><div class="progress">
     <div class="progress-inner" :style="{width: '30%'}"></div>
</div></td>
     <td>50%</td>
</tr>
   <tr>
     <td>enterprise</td>
     <td><div class="progress"><div class="progress-inner" :style="{width: '70%'}"></div></div></td>
     <td>50%</td>
</tr>
</table>
  </section>

</template>

<style scoped lang="scss">
  .threats-by-type {
    margin-bottom: 1.2em;
  }

  table {
    border-spacing: 20px;
    margin-left: -20px;
  }

  h1 {
    margin-bottom: 2em;
  }

  h5 {
    margin-bottom: 1em;
  }

  .progress {
    height: 10px;
    border: 1px solid lightgray;
    border-radius: 3px;
    width: 100px;
  }

  .progress-inner {
    background-color: indianred;
    height: 100%;
  }
</style>

<script lang="js">
  export default  {
    name: 'threats-by-type',
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


