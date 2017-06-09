<template>
  <div class="hello-form">
    <page-step v-bind="{'steps': steps, 'active': active}" @prev="prev" @next="next">
      <el-button-group slot="step-control">
        <el-button type="primary" size="small" >计算</el-button>
        <el-button type="primary" size="small" >保存</el-button>
      </el-button-group>
    </page-step>
    <component v-bind:is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
  </div>
</template>

<script>
  import PageStep from '@/components/step/pageStep'
  import Example from '@/components/pages/example'
  import WaterSupplyCal from '@/components/pages/waterSupplyCal'
  export default {
    data () {
      return {
        steps: [{
          activeId: 1,
          title: '径流预报'
        }, {
          activeId: 2,
          title: '供需水计算'
        }, {
          activeId: 3,
          title: '需水预测'
        }, {
          activeId: 4,
          title: '水量分配'
        }],
        active: 0,
        viewMap: {
          0: 'example',
          1: 'water-supply-cal',
          2: 'example',
          3: 'example'
        }
      }
    },
    computed: {
      currentView () {
        return this.viewMap[this.active]
      }
    },
    methods: {
      onSubmit () {
        // setTimeout(() => {
        //   console.log('提交表单...')
        // }, 1000)
      },
      prev () {
        this.active--
      },
      next () {
        this.active++
      }
    },
    components: {
      'page-step': PageStep,
      'example': Example,
      'water-supply-cal': WaterSupplyCal
    }
  }
</script>

<style lang="scss" scoped>
  .hello-form {
    // padding: 10px;
    width: 100%;
    margin: auto;
  }
  .need-water-step {
    margin: 10px;
  }
</style>
