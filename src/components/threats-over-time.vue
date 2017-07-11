<template>

  <section class="threats-over-time">
    <header class="flex align-center space-between header-filter">
      <h5 class="section-header">threats over time</h5>
      <ul class="flex align-center">
        <li>1 Month</li>
        <li>2 Month</li>
        <li class="active">6 Month</li>
        <li>1 Year</li>
      </ul>
    </header>
    <div style="width: 100%; height: 400px">
      <canvas id="myChart" width="400" height="400"></canvas>

    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'threats-over-time',
    mounted() {
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type   : 'bar',
        data   : {
          labels  : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
            data           : [12, 19, 3, 52, 22, 3, 33, 33, 33, 33, 11, 22],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor    : [
              'transparent'
            ],
            borderWidth    : 1
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display       : false,
                tickMarkLength: 13
              },
              ticks    : {
                fontColor : '#5f5f5f',
                fontFamily: 'Ubuntu',
                fontSize  : 10,
              }
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
              ticks    : {
                padding: 7
              }
            }]
          }
        },
      });
    },
  }
</script>

<style scoped lang="scss">
  .threats-over-time {

  }
</style>
