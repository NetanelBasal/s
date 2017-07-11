<template>

  <section class="active-agents">
    <div class="circle-wrapper flex justify-center">
      <div class="circle-border flex align-center justify-center">
        <div class="circle flex align-center justify-center flex-column">
          <p class="header">Active Agents</p>
          <p class="num">491,670</p>
          <p class="sub-header">Total <span>500,000</span></p>
          <p class="health">Health: <span>Good</span></p>
        </div>
      </div>

    </div>


  </section>

</template>

<style scoped lang="scss">
  .active-agents {
    margin-bottom: 98px;
  }

  .circle-wrapper {
    height: 268px;
    position: relative;
  }

  .header {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 31px;
  }

  .num {
    color: #3cb0b5;
    font-size: 36px;
    font-weight: 500;
    margin-top: 15px;
    line-height: 34px;
  }

  .sub-header {
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-top: 7px;
    span {
      font-weight: 500;
    }
  }

  .health {
    font-size: 11px;
    font-weight: 300;
    span {
      color: #32dab5;
      font-weight: 500;
    }
  }


  .circle-border {
    background-color: rgba(60, 176, 181, 0.25);
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  .circle {
    width: 190px;
    height: 190px;
    background-color: #ffffff;
    box-shadow: 0 25px 40px rgba(60, 176, 181, 0.25);
    border-radius: 50%;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 80px;
      height: 80px;
      background: url(~../assets/active-agents.png) no-repeat;
      left: 50%;
      transform: translateX(-50%);
      top: -1px;
      opacity: 0.5;
    }
  }
</style>

<script lang="js">
  import * as _ from 'lodash';
  export default  {
    name: 'active-agents',
    mounted() {
      const range = _.range(0, 100);
      const container = document.querySelector('.circle-wrapper');

      range.forEach(r => {
        const dot = document.createElement('span');
        dot.classList.add('dot', 'dot-blue');
        dot.style.top = (_.random(0, 230)) + 'px';
        dot.style.left = (_.random(0, 210)) + 'px';
        container.appendChild(dot);
      });

    }
  }
</script>


