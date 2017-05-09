<template>
  <li @click="showModal" v-popover:item-popover>
    {{name}}
    <div class="item-state-box">
      <img v-bind:src="stateImg" />
    </div>
    <el-popover 
      ref="item-popover" 
      v-model="isShowPopover" 
      placement="bottom-start" 
      title="标题" 
      width="200" 
      openDelay="4000" 
      trigger="hover">
      <pop-layout v-bind="{show: isShowPopover, url: popoverDataUrl, currentView: popView}">
      </pop-layout>
    </el-popover>
  </li>
</template>

<script>
  import popLayout from '@/components/popover/pop-layout'
  import red from '@/assets/red.png'
  import green from '@/assets/green.png'
  import yellow from '@/assets/yellow.png'

  export default {
    props: {
      name: String,
      // 状态 1:正常(绿色), 2:异常(红色), 3:处理中(黄色), 4:预警(橘色)
      state: {
        type: String,
        // 默认正常状态
        default: '1'
      },
      includes: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        // 故障数量
        warningNum: 0,
        // 处理中数量
        handlingNum: 0,
        // 是否弹出气泡
        isShowPopover: false,
        // 气泡提示框数据请求地址
        popoverDataUrl: 'https://api.douban.com/v2/movie/top250?count=10',
        // 弹出框数据请求地址
        modalDataUrl: '',
        // 状态-图片
        imgMap: {
          '1': green,
          '2': red,
          '3': yellow
        },
        // 当前的提示框组件
        popView: 'keyNode'
      }
    },
    // 初始化
    created () {
      this.calNum()
    },
    // el挂载到实例上时调用
    mounted () {
      // this.popoverMsg();
    },
    computed: {
      stateImg () {
        return this.imgMap[this.state]
      }
    },
    watch: {
      includeMonitorItems () {
        this.calNum()
      },
      warningNum (newVal, oldVal) {
        // 触发组件的自定义changeWN事件
        this.$emit('changeWN', newVal - oldVal)
      },
      handlingNum (newVal, oldVal) {
        // 触发组件的自定义changeHN事件
        this.$emit('changeHN', newVal - oldVal)
      }
    },
    methods: {
      // 根据状态判断故障和处理中数量
      calNum () {
        let tempIncludes = this.includes
        let len = tempIncludes.length
        for (let i = 0; i < len; i++) {
          let tempMo = tempIncludes[i]
          let _state = tempMo.state
          if (_state === '1') {
            this.warningNum = this.handlingNum = 0
          } else if (_state === '2') {
            this.warningNum += 1
            this.handlingNum = 0
          } else if (_state === '3') {
            this.handlingNum += 1
            this.warningNum = 0
          }
        }
      },
      showModal () {
        this.isShowPopover = false
        this.$emit('showModal')
      }
    },
    components: {
      'pop-layout': popLayout
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-state-box {
    float: right;
    margin: 3px 0px 3px 10px;
  }

  .item-state-box img {
    display: block;
  }

</style>
