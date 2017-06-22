<template>
  <chart :options="polar" class="line-chart" auto-resize>
  </chart>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/tooltip'

  export default {
    data () {
      return {
        polar: {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['最大供水能力']
          },
          grid: {
            left: '5%',
            right: '10%',
            bottom: '5%',
            top: '17%',
            containLabel: true
          },
          xAxis: {
            name: '年份',
            type: 'category',
            boundaryGap: false,
            data: ['2005', '2006', '2007', '2008', '2009',
              '2010', '2011', '2012', '2013', '2014', '2015']
          },
          yAxis: {
            name: '供水能力',
            type: 'value',
            scale: true,
            splitNumber: 3
          },
          series: [
            {
              name: '最大供水能力',
              type: 'line',
              stack: '总量',
              symbol: 'circle',
              symbolSize: 10,
              data: [19.8, 20.0, 23.9, 25.2, 28.0, 26.9, 31.1, 28.1, 29.6, 30.0, 31.0]
            }
          ]
        }
      }
    },
    components: {'chart': ECharts}
  }
</script>

<style lang="scss" scoped>
  .line-chart {
    width: 100%;
    height: 100%;
  }
</style>
