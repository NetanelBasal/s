<template>

  <section class="dashboard flex">

    <div class="left flex-2">
      <filters></filters>
      <world-presence></world-presence>
      <devices></devices>
      <bandwidth></bandwidth>
      <router-types></router-types>
      <threats-over-time></threats-over-time>
      <top-threats-type></top-threats-type>
    </div>

    <div class="middle">
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
  import Filters from "@/components/filters";
  import WorldPresence from "@/components/world-presence";
  import Devices from "@/components/devices";
  import Bandwidth from "../components/bandwidth";
  import RouterTypes from "../components/router-types";
  import ThreatsOverTime from "../components/threats-over-time";
  import TopThreatsType from "../components/top-threats-type";

  export default  {
    name      : 'dashboard',
    components: {
      TopThreatsType,
      ThreatsOverTime,
      RouterTypes,
      ActiveAgents,
      CurrentThreads,
      ThreatsByType,
      ThreatsTable,
      Filters,
      WorldPresence,
      Devices,
      Bandwidth
    }
  }
</script>

<style scoped lang="scss">
  .middle {
    margin: 50px 80px 0;
  }
</style>
