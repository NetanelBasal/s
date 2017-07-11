<template>

  <section class="devices">
    <h5 class="section-header">top 5 devices / all devices</h5>
    <div class="flex align-center">
      <div style="margin-right: 45px;">
        <canvas id="devices" width="150" height="150"></canvas>
      </div>
      <div id="devices-chart-legends" class="flex-1" style="min-width: 150px;"></div>
    </div>
  </section>

</template>

<script lang="js">
  import Chart from 'chart.js';

  export default  {
    name: 'devices',
    mounted() {
      var ctx = document.getElementById("devices");
      var data = {
        datasets: [{
          data           : [77, 11, 30, 8.5],
          backgroundColor: [
            '#37ce5e',
            '#645bc1',
            '#efe791',
            '#508eff'
          ],
          borderColor    : [
            'transparent',
            'transparent',
            'transparent',
            'transparent'
          ]
        }],

        labels: [
          'Netgar R7000',
          'Netgar R8000',
          'TPlink RC7',
          'Asos N56U'
        ]
      };

      var myChart = new Chart(ctx, {
        type   : 'doughnut',
        data   : data,
        options: {
          cutoutPercentage: 90,
          legendCallback  : function( chart ) {
            var lengend = [`<table class="doughnut-table">`];
            for( var i = 0; i < chart.data.datasets.length; i++ ) {
              chart.data.datasets[i].data.forEach(( d, index ) => {
                lengend.push(`
                  <tr class="devices-legend">
                    <td>
                        <span class="legend-circle" style="background-color: ${chart.data.datasets[i].backgroundColor[index] }"></span>
                        <span>${chart.data.labels[index]}</span>
                     </td>
                     <td>${d}%</td>
                   </tr>
               `);
              })

            }
            lengend.push(`</table>`)
            return lengend.join("");
          },
          legend          : {
            position: 'right',
            display : false,
            labels  : {
              padding: 25
            }
          }
        }
      });

      document.getElementById('devices-chart-legends').innerHTML = myChart.generateLegend();
      document.querySelectorAll('.devices-legend').forEach(( legend, index ) => {
        legend.addEventListener('click', ( e ) => {
          myChart.getDatasetMeta(0).data[index].hidden = !myChart.getDatasetMeta(0).data[index].hidden;
          legend.classList.toggle('legend-disabled')
          myChart.update();
        });
      });
    }
  }
</script>

<style lang="scss">
  h5 {
    margin-bottom: 38px;
  }

  .devices {
     margin: 30px 0;
  }

  .legend-disabled {
    opacity: 0.4;
  }

  .devices-legend {
    color: #313131;
    font-size: 12px;
    cursor: pointer;
    td {
      padding-bottom: 18px;
      &:first-child {
        padding-right: 80px;
      }
    }
  }

  .legend-circle {
    border-radius: 50%;
    background-color: #37ce5e;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    display: inline-block;
  }
</style>
