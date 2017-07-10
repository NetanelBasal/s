<template lang="html">

  <section class="dashboard flex">

  <div class="left flex-2">
   Left
  </div>

  <div class="middle flex-1">
      <active-agents></active-agents>
      <current-threads></current-threads>
   </div>

   <div class="right flex-2">

       <threats-by-type></threats-by-type>
       <threats-table></threats-table>
   </div>


  </section>

</template>

<script lang="js">
  import ActiveAgents from "@/components/active-agents";
  import CurrentThreads from "@/components/current-threads";
  import ThreatsByType from "@/components/threats-by-type";
  import ThreatsTable from "@/components/threats-table";
  export default  {
    name: 'dashboard',
    components: {
      ActiveAgents,
      CurrentThreads,
      ThreatsByType,
      ThreatsTable
    },
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
  .dashboard {

  }
</style>
