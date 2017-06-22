<template>
  <div class="echart">
    <slot name="v-chart" :grid="chartGrid" :colors="chartColors" height="inherit"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartGrid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      chartColors: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
    }
  }
}
</script>

<style lang="scss" scoped>
  .echart {
    width: auto;
    height: inherit;
  }
</style>
