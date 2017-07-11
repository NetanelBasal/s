<template>

  <section class="threats-by-type">
    <p style="color:  #1c252c; font-size: 13px; margin-bottom: 5px">Displaying</p>
    <h1 style="color:  #e54b50; font-size: 21px; font-weight: 500;
     border-bottom: 1px solid #e54b50;
     padding-bottom: 8px;">28 Threats</h1>

    <h5 style="margin-top: 42px;font-size: 13px;
font-weight: 700; color: #5f5f5f; text-transform: uppercase;      margin-bottom: 29px;">Threats by type</h5>

    <table>
      <tr>
        <td>DDOS</td>
        <td>
          <div class="progress">
            <div class="progress-inner" :style="{width: '30%'}"></div>
          </div>
        </td>
        <td>50%</td>
      </tr>
      <tr>
        <td>Botnet</td>
        <td class="progress-cell">
          <div class="progress">
            <div class="progress-inner" :style="{width: '34%'}"></div>
          </div>
        </td>
        <td>34%</td>
      </tr>
      <tr>
        <td>Malware</td>
        <td class="progress-cell">
          <div class="progress">
            <div class="progress-inner" :style="{width: '62%'}"></div>
          </div>
        </td>
        <td>62%</td>
      </tr>
      <tr>
        <td>enterprise</td>
        <td class="progress-cell">
          <div class="progress">
            <div class="progress-inner" :style="{width: '70%'}"></div>
          </div>
        </td>
        <td>50%</td>
      </tr>
    </table>


  </section>

</template>

<style scoped lang="scss">
  .threats-by-type {
  }

  td {
    color: #5f5f5f;
    font-weight: 500;
    font-size: 13px;
    padding-bottom: 23px;
    text-transform: capitalize;
    white-space: nowrap
  }

  table tr:last-child td {
    padding-bottom: 0px;
  }

  .row {
    margin-bottom: 23px;
  }

  .progress-cell {
    width: 100%;
  }

  .progress {
    height: 6px;
    box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: #eeeff;
    margin: 0 40px;
  }

  .progress-inner {
    background-color: indianred;
    height: 100%;
    border-radius: 3px;
  }
</style>

<script lang="js">
  export default  {
    name    : 'threats-by-type'
  }
</script>


