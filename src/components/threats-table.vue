<template lang="html">

  <section class="threats-table">
    <p>Threats table</p>
     <template>
    <el-table
 stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        :sortable="true"
        prop="type"
        label="Type">
      </el-table-column>
      <el-table-column
           :sortable="true"
        prop="start"
        label="Start">
      </el-table-column>
      <el-table-column
        prop="agents"
             :sortable="true"
        label="Agents">
      </el-table-column>
        <el-table-column

             :sortable="true"
        label="Details">
          <template scope="scope">
                      <span>{{ scope.row.details.country }}</span>

          <span>{{scope.row.details.text}}</span>
          </template>
      </el-table-column>

        <el-table-column

             :sortable="true"
        label="Mitigated">
          <template scope="scope">
            <span>{{ scope.row.mitigated }}</span>
          </template>
      </el-table-column>
      </el-table>
    </template>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'threats-table',
    props: [],
    mounted() {

    },
    data() {
      return {
        tableData: [{
          start: '2016-05-03',
          type: 'DDOS',
          agents: 300,
          details: {
            country: 'usa',
            text: '31.3.34.4'
          },
          mitigated: 'red'
        },
          {
            start: '2016-05-03',
            type: 'DDOS',
            agents: 300,
            details: {
              country: 'usa',
              text: '31.3.34.4'
            },
            mitigated: 'red'
          }]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .threats-table {

  }
</style>
