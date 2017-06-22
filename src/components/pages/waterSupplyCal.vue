<template>
  <div class="water-supply-cal">
    <el-row :gutter="10" justify="center" type="flex" align="center">
      <el-col :md="3">
        <div class="row-content row-content-height1">
          <h4>
            <strong>计算方法</strong>
          </h4>
        </div>
      </el-col>
      <el-col :md="6">
        <div class="row-content row-content-height1">
          <h4>
            <strong>公式</strong>
          </h4>
        </div>
      </el-col>
      <el-col :md="15">
        <div class="row-content row-content-height1">
          <h4>
            <strong>参考信息</strong>
          </h4>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" justify="center" type="flex" align="center">
      <el-col :md="3">
        <div class="row-content row-content-height2">
          <span>
            <h4 style="margin-bottom: 10px;">
              <strong>正算法</strong>
            </h4>
            <p>适用于南方水资源较丰沛的地区，及沿海独流入海河流</p>
          </span>
        </div>
      </el-col>
      <el-col :md="6">
        <div class="row-content row-content-height2">
          <el-form :model="aFormula" ref="aFormula" label-position="left" style="margin-top: 20px;padding: 5px;">
            <el-form-item>
              <el-radio-group v-model="aFormula.expressionType">
                <el-radio label="1">地表水可利用量 = 用水消耗系数 × 最大供水能力</el-radio>
                <el-radio label="2" style="margin-left: 0;margin-top: 10px;">地表水可利用量 = 用水消耗系数 × 最大用水需求</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="用水消耗系数" label-width="150px">
              <el-input v-model="aFormula.p1" placeholder="用水消耗系数"></el-input>
            </el-form-item>
            <el-form-item label="最大供水能力（m³）" label-width="150px">
              <el-input v-model="aFormula.p2" placeholder="最大供水能力"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :md="15">
        <div class="row-content row-content-height2">
          <div style="width: 50%;height: inherit;">
            <chart :options="polar" auto-resize></chart>
          </div>
          <div style="width: 50%;height: inherit;">
            <el-table :data="tableData" height="180" border>
              <el-table-column prop="date" label="日期" header-align="center" align="center">
              </el-table-column>
              <el-table-column prop="name" label="姓名" header-align="center" align="center">
              </el-table-column>
              <el-table-column prop="address" label="地址" header-align="center" align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" justify="center" type="flex" align="center">
    </el-row>
    <el-row :gutter="10" justify="center" type="flex" align="center">
    </el-row>
    <el-row :gutter="10" justify="center" type="flex" align="center">
    </el-row>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/tooltip'

  export default {
    data () {
      return {
        aFormula: {
          expressionType: '1',
          p1: '',
          p2: ''
        },
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
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    components: { 'chart': ECharts }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    color: #404040;
  }
  
  .water-supply-cal {
    display: flex;
    height: calc(100vh - 145px);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    >div:nth-child(1) {
      flex: 0 0 30px;
    }

    >div:nth-child(2) {
      flex: 1 1 33%;
    }

    >div:nth-child(3) {
      flex: 1 1 33%;
    }

    >div:nth-child(4) {
      flex: 1 1 33%;
    }

    >div:nth-child(5) {
      flex: 0 0 40px;
    }
  }

  .row-content {
    // background-color: #ccc;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
    span {
      text-align: center;
    }
    label {
      white-space: normal;
      display: block;
      margin: auto;
    }
  }

  .el-row {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  // .el-col {
  //   margin-bottom: 10px;
  // }
  
  .echarts {
    height: inherit;
    width: auto;
  } 
  .el-table {
    width: auto;
    margin: 10px;
  }

</style>
