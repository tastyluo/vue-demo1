<template>
  <div class="my-step">
    <div class="my-step-row">
      <div class="my-step-arrow">
        <i :class="arrowPrevCls"
        @click="prev"></i>
      </div>
      <div class="my-step-main">
        <el-steps :active="active" :align-center="true" :center="true" finish-status="success">
          <el-step v-for="item in steps" :key="item.activeId" :title="item.title">
          </el-step>
        </el-steps>
      </div>
      <div class="my-step-arrow">
        <i :class="arrowNextCls"
        @click="next"></i>
      </div>
      <div class="my-step-control">
        <div class="my-step-control-wrap">
          <slot name="step-control"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        type: Array,
        default: null
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        btnPrevDisabled: true,
        btnNextDisabled: false
      }
    },
    computed: {
      stepLen () {
        return this.steps.length - 1
      },
      arrowPrevCls () {
        return {
          'el-icon-caret-left': true,
          'step-arrow-disabled': this.btnPrevDisabled,
          'step-arrow-abled': !this.btnPrevDisabled
        }
      },
      arrowNextCls () {
        return {
          'el-icon-caret-right': true,
          'step-arrow-disabled': this.btnNextDisabled,
          'step-arrow-abled': !this.btnNextDisabled
        }
      }
    },
    watch: {
      active (val) {
        if (val === 0) {
          this.btnPrevDisabled = true
          this.btnNextDisabled = false
        } else if (val > 0 && val < this.stepLen) {
          this.btnPrevDisabled = false
          this.btnNextDisabled = false
        } else if (val === this.stepLen) {
          this.btnPrevDisabled = false
          this.btnNextDisabled = true
        }
      }
    },
    methods: {
      prev () {
        if (this.active > 0) {
          this.$emit('prev')
        }
      },
      next () {
        if (this.active < this.stepLen) {
          this.$emit('next')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-step {
    margin: 10px 0;
    width: 100%;
    display: table;
    .my-step-row {
      display: table-row;
      .my-step-arrow {
        display: table-cell;
        width: 30px;
        i {
           margin-top: 8px;
        }
      }
      .my-step-main {
        display: table-cell;
      }
      .my-step-control {
        display: table-cell;
        width: 200px;
        position: relative;
        .my-step-control-wrap {
          position: absolute;
          top: 4px;
          right: 0;
        }
      }
    }
  }

  .is-success {
    color: #97a8be;
  }

  .step-arrow-abled {
    color: #20A0FF;
    &:hover {
      cursor: pointer;
      color: #58B7FF;
    }
  }

  .step-arrow-disabled {
    color: #bfcbd9;
    &:hover {
      cursor: default;
    }
  }
  
</style>
