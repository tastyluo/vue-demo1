<template>
  <div class="water-supply-cal">
    <div class="wsc-row">
      <div class="wsc-item wsc-row1" style="width: 10%;">
        <div class="wsc-des">
          <h4>
            <strong>计算方法</strong>
          </h4>
        </div>
      </div>
      <div class="wsc-item wsc-row1" style="width: 25%;">
        <div class="wsc-des">
          <h4>
            <strong>公式</strong>
          </h4>
        </div>
      </div>
      <div class="wsc-item wsc-row1" style="width: 65%;">
        <div class="wsc-des">
          <h4>
            <strong>参考信息</strong>
          </h4>
        </div>
      </div>
    </div>
    <div class="wsc-row">
      <div class="wsc-item wsc-row2" style="width: 10%;">
        <div class="wsc-des">
          <span>
            <h4 style="margin-bottom: 10px;">
              <strong>正算法</strong>
            </h4>
            <p>适用于南方水资源较丰沛的地区，及沿海独流入海河流</p>
          </span>
        </div>
      </div>
      <div class="wsc-item wsc-row2" style="width: 25%;">
        <div class="wsc-des">
          <el-form :model="aFormula" ref="aFormula" label-position="left" style="margin-top: 20px;">
            <el-form-item>
              <el-radio-group v-model="aFormula.expressionType">
                <el-radio label="1">地表水可利用量 = 用水消耗系数 × 最大供水能力</el-radio>
                <el-radio label="2" style="margin-left: 0;">地表水可利用量 = 用水消耗系数 × 最大用水需求</el-radio>
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
      </div>
      <div class="wsc-item wsc-row2" style="width: 65%;">
        <div class="wsc-des">
          <h4>
            <strong>参考信息</strong>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        aFormula: {
          expressionType: '1',
          p1: '',
          p2: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    color: #404040;
  }
  
  .wsc-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .wsc-item {
      margin-left: 10px;
      margin-right: 10px;
      box-shadow: 2px 2px 8px #C0CCDA;
      .wsc-des {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        span {
          text-align: center;
        }
        label {
          white-space: normal;
          display: block;
          margin: auto;
        }
      }
    }
  }
  
  .wsc-row1 {
    >div {
      height: 30px;
    }
  }
  
  .wsc-row2 {
    >div {
      height: 200px;
      padding: 5px;
    }
  }
</style>
