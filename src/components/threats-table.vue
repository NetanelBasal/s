<template>
  <section class="threats-table">
    <h5 style="margin-top: 50px;margin-bottom: 20px;" class="section-header">Threats Table</h5>
    <template>
      <el-table
              height="300"
              stripe
              row-class-name="table-cell"
              :data="tableData"
              style="width: 100%">
        <el-table-column
                :sortable="true"
                prop="type"
                label="Type">
        </el-table-column>
        <el-table-column
                prop="start"
                label="Start">
        </el-table-column>
        <el-table-column
                prop="agents"
                :sortable="true"
                label="Agents">
        </el-table-column>
        <el-table-column
                label="Details">
          <template scope="scope">
            <!--<span>{{ scope.row.details.country }}</span>-->

            <span>{{scope.row.details.text}}</span>
          </template>
        </el-table-column>

        <el-table-column
                :sortable="true"
                label="Mitigated">
          <template scope="scope">
            <span class="mitigated-circle"
                  :style="{'background-color': scope.row.mitigated === 'red' ? '#e54b50' : '#2fe8bf'}"></span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </section>

</template>

<style lang="scss">
  .el-table {
    border: none !important;
  }

  .el-table tr {
    background-color: #eeeff2;
    border: none;

  }

  .el-table th {
    background-color: #eeeff2 !important;
    border: none;
  }

  .el-table th > .cell {
    font-size: 13px;
    padding: 0 0 0 10px;
    text-align: left;
    background: transparent;
    font-weight: 500;
    color: #1c252c;
  }

  .el-table th.is-leaf {
    border: none;
    border-bottom: 1px solid lightgray !important;
    background-color: #eeeff2 !important;
  }

  .el-table .cell {
    font-size: 12px;
    padding-left: 10px;
    font-weight: 300;
  }

  .el-table td {
    border: none;
  }

  .el-table::before, .el-table::after {
    display: none;
  }

  .mitigated-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #2fe8bf;
    display: block;
    margin-left: auto;
  }

</style>


<script lang="js">
  export default  {
    name: 'threats-table',
    data() {
      return {
        tableData: [{
          start    : 'July 12, 12:32PM',
          type     : 'DDOS',
          agents   : 300,
          details  : {
            country: 'usa',
            text   : '31.3.34.4'
          },
          mitigated: 'red'
        },
          {
            start    : 'July 12, 12:32PM',
            type     : 'DDOS',
            agents   : 300,
            details  : {
              country: 'usa',
              text   : '31.3.34.4'
            },
            mitigated: 'green'
          },
          {
            start    : 'July 12, 12:32PM',
            type     : 'DDOS',
            agents   : 300,
            details  : {
              country: 'usa',
              text   : '31.3.34.4'
            },
            mitigated: 'red'
          },
          {
            start    : 'July 12, 12:32PM',
            type     : 'DDOS',
            agents   : 300,
            details  : {
              country: null,
              text   : 'www.facebook.com'
            },
            mitigated: 'green'
          },
          {
            start    : 'July 12, 12:32PM',
            type     : 'Malware',
            agents   : 81890,
            details  : {
              country: 'usa',
              text   : '31.3.34.4'
            },
            mitigated: 'red'
          },
          {
            start    : 'July 12, 12:32PM',
            type     : 'DDOS',
            agents   : 300,
            details  : {
              country: 'usa',
              text   : '31.3.34.4'
            },
            mitigated: 'green'
          },
          {
            start    : 'July 12, 12:32PM',
            type     : 'Phishing',
            agents   : 300,
            details  : {
              country: 'usa',
              text   : '31.3.34.4'
            },
            mitigated: 'green'
          }]
      }
    }
  }
</script>

