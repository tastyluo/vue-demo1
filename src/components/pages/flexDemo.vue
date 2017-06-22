/*
 * @Author: Luo jiaxing 
 * @Date: 2017-06-21 16:26:32 
 * @Last Modified by: Luo jiaxing
 * @Last Modified time: 2017-06-22 18:05:27
 * 自适应布局
 * 测试 display: flex; 布局
 * vh: 相对于视口(窗口)的高度。视口被均分为100单位的vh
 */

<template>
  <div class="grid">
    <div class="grid-row">
      <div class="grid-row-cell">
        <span><strong>计算方法</strong></span>
      </div>
      <div class="grid-row-cell">
        <span><strong>公式</strong></span>
      </div>
      <div class="grid-row-cell">
        <span><strong>参考信息</strong></span>
      </div>
    </div>
    <div class="grid-row">
      <div class="grid-row-cell">
        <span>
          <h4 style="margin-bottom: 10px;">
            <strong>正算法</strong>
          </h4>
          <p>适用于南方水资源较丰沛的地区，及沿海独流入海河流</p>
        </span>
      </div>
      <div class="grid-row-cell">
        <el-form :model="aFormula" ref="aFormula" label-position="left" style="margin: 10px;">
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
      <div class="grid-row-cell info-cell">
        <div>
          <line-chart></line-chart>
        </div>
        <div ref="tableCell">
          <el-table :data="tableData" :height="200" border>
            <el-table-column prop="date" label="日期" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="address" label="地址" header-align="center" align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="grid-row">
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
    </div>
    <div class="grid-row">
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
    </div>
    <div class="grid-row">
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
      <div class="grid-row-cell"></div>
    </div>
  </div>
</template>

<script>
  import LineChart from '@/components/echart/lineDemo'
  export default {
    data () {
      return {
        aFormula: {
          expressionType: '1',
          p1: '',
          p2: ''
        },
        tableData: [
          {
            date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    },
    computed: {
      tableHeight () {
        return this.$refs.tableCell
      }
    },
    components: {'line-chart': LineChart}
  }
</script>

<style lang="scss" scoped>
  span {
    font-size: 16px;
  }
  p {
    font-size: 13px;
  }
  .el-form-item {
    margin-bottom: 5px;
  }

  .grid {
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

  .grid-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-top: 5px;
    margin-bottom: 5px;
    >div:nth-child(1) {
      flex: 0 0 200px;
    }

    >div:nth-child(2) {
      flex: 0 0 350px;
    }

    >div:nth-child(3) {
      flex: 1 1 100%;
    }
  }

  .grid-row-cell {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    // background-color: #ccc;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
    span {
      margin: 10px;
      text-align: center;
    }
  }

  .info-cell {
    >div {
      align-self: stretch;
      width: calc(50% - 10px);
      height: calc(100% - 10px);
      margin: auto;
    }
  }
  
</style>
