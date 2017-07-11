<template>

  <section class="router-types">
    <h5 class="section-header">current router types</h5>
    <div class="flex align-center">
      <div style="margin-right: 45px;">
        <canvas id="router-types" width="150" height="150"></canvas>
      </div>
      <div id="router-types-chart-legends" class="flex-1" style="min-width: 150px;"></div>
    </div>
  </section>

</template>

<script lang="js">
  import Chart from 'chart.js';

  export default  {
    name: 'router-types',
    mounted() {
      var ctx = document.getElementById("router-types");
      var data = {
        datasets: [{
          data           : [77, 11, 30, 8.5, 22, 0.28],
          backgroundColor: [
            '#37ce5e',
            '#645bc1',
            '#efe791',
            '#508eff',
            'orange',
            'grey'
          ],
          borderColor    : [
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent'
          ]
        }],

        labels: [
          'IP Camera',
          'Printer',
          'Smart TV',
          'Smart Home Hub',
          'Streamer',
          'Other'
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
                  <tr class="router-types-legend">
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

      document.getElementById('router-types-chart-legends').innerHTML = myChart.generateLegend();
      document.querySelectorAll('.router-types-legend').forEach(( legend, index ) => {
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

  .router-types {
    margin: 30px 0;
  }

  h5 {
    margin-bottom: 38px;
  }

  .legend-disabled {
    opacity: 0.4;
  }

  .router-types-legend {
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
