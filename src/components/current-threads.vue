<template lang="html">

  <section class="current-threads">
    <div class="circle-wrapper-red">
 <div class="circle-border flex align-center justify-center">
       <div class="circle flex align-center justify-center flex-column">
      <p class="header">Current Threats</p>
      <p class="num">28</p>
             <p class="sub-header">Average: <span>20</span></p>
    </div>
 </div>

</div>

  </section>

</template>

<script lang="js">
  import * as _ from 'lodash';
  export default  {
    name: 'current-threads',
    mounted() {
      const range = _.range(0, 130);
      const container = document.querySelector('.circle-wrapper-red');

      range.forEach(r => {
        const dot = document.createElement('span');
        dot.classList.add('dot', 'dot-red');
        dot.style.top = (_.random(0, 230)) + 'px';
        dot.style.left = (_.random(0, 210)) + 'px';
        container.appendChild(dot);
      });

    }
}
</script>

<style scoped lang="scss">
  .circle-wrapper-red {
    height: 272px;
    position: relative;
  }

  .header {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 25px;
  }

  .num {
    color: #e54b50;
    font-size: 36px;
    line-height: 34px;
    font-weight: 500;
    margin-top: 22px;
  }

  .sub-header {
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-top:7px;
    span {
      font-weight: 500;
    }
  }

  .circle-border {
    width: 220px;
    height: 220px;
    background-color: rgba(213, 70, 74, 0.35);
    border-radius: 50%;
    margin-left: auto;
  }

  .circle {
    width: 190px;
    height: 190px;
    box-shadow: 0 25px 40px rgba(229, 75, 80, 0.25);
    background-color: #ffffff;
    border-radius: 50%;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 62px;
      height: 63px;
      background: url(~../assets/current-threats.png) no-repeat;
      left: 50%;
      transform: translateX(-50%);
      top: -1px;
      opacity: 0.5;
    }
  }


</style>
