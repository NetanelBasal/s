<template>

  <section class="bandwidth">
    <header class="flex align-center space-between header-filter">
      <h5 class="section-header">avg. bandwith</h5>
      <ul class="flex align-center">
        <li>1 Month</li>
        <li>2 Month</li>
        <li class="active">6 Month</li>
        <li>1 Year</li>
      </ul>
    </header>
    <canvas id="bandwidth"></canvas>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'bandwidth',
    mounted() {
      var ctx = document.querySelector('#bandwidth').getContext("2d");
//      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
//      gradientStroke.addColorStop(0, '#80b6f4');
//      gradientStroke.addColorStop(1, '#f49080');
//      background-image:
//      linear-gradient(185deg, #39adb2 0%, rgba(255, 255, 255, 0.24) 100%),
//      linear-gradient(to top, rgba(152, 227, 230, 0.18) 0%, rgba(196, 229, 255, 0) 99%, rgba(196, 229, 255, 0) 100%);

//      var gradientFill = ctx.createLinearGradient(100, 10, 100, 100);
//      gradientFill.addColorStop(0, "#39adb2");
//      gradientFill.addColorStop(0.99, "rgba(196, 229, 255, 0)");
//      gradientFill.addColorStop(1, "rgba(196, 229, 255, 0)");
//      gradientFill.addColorStop(0, "#39adb2");
//      gradientFill.addColorStop(1, "rgba(152, 227, 230, 0.18)");
//
//      var gradientFill = ctx.createLinearGradient(0, 0, 0, 100);
//      gradientFill.addColorStop(0, "black");
//      gradientFill.addColorStop(1, "white");

      var grad = ctx.createLinearGradient(440, 66, 0, 105);

      grad.addColorStop(0, 'rgba(196,230,255,1)');
      grad.addColorStop(1, 'rgba(152,227,230,0.18)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 440, 171);
      var data = {
        labels  : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          lineTension         : 0,
          pointBorderWidth    : "10px",
//          borderColor: gradientStroke,
//          pointBorderColor: gradientStroke,
//          pointBackgroundColor: gradientStroke,
//          pointHoverBackgroundColor: gradientStroke,
//          pointHoverBorderColor: gradientStroke,
          pointBackgroundColor: '#5f5f5f',
          borderColor         : '#77c5c8',
          borderWidth         : 2,
          pointBorderColor    : '#fff',
          pointBorderWidth    : 1.3,
          backgroundColor     : /**'rgba(60, 176, 181, 0.25)' **/ grad,
          data                : [20, 30, 80, 20, 40, 10, 60]
        }]
      }
      var myLineChart = new Chart(ctx, {
        type   : 'line',
        options: {
          legend  : {
            display: false
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                console.log(tooltipItem);
                console.log(data);

                return '';
              },
              title() {
                return 'dss'
              }
            }
          },
          scales  : {
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
        data   : data
      });
    }
  }
</script>

<style scoped lang="scss">
  .bandwidth {

  }
</style>
