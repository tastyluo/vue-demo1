<template>
  <div class="list-box">
    <div class="list-box-name">
      <span>{{name}}</span>
    </div>
    <div class="list-box-items">
      <ul>
        <item 
          v-for="item in items" 
          :key="item.name" 
          v-bind="item" 
          :modalVisible="modalVisible" 
          @changeWN="changeWN" 
          @changeHN="changeHN"
          @showModal="showModal">
        </item>
      </ul>
    </div>
  </div>
</template>

<script>
  import item from './item'

  export default {
    props: {
      // 项目名称
      name: String,
      // 元素数组
      items: Array,
      modalVisible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        warningNum: 0,
        handlingNum: 0
      }
    },
    watch: {
      warningNum (newVal, oldVal) {
        // 触发组件的自定义changeTotalWN事件
        this.$emit('changeTotalWN', newVal - oldVal)
      },
      handlingNum (newVal, oldVal) {
        // 触发组件的自定义changeTotalHN事件
        this.$emit('changeTotalHN', newVal - oldVal)
      }
    },
    methods: {
      // 子组件事件触发父组件方法
      changeWN (val) {
        this.warningNum += val
      },
      // 子组件事件触发父组件方法
      changeHN (val) {
        this.handlingNum += val
      },
      showModal () {
        this.$emit('showModal')
      }
    },
    components: {
      item
    }
  }

</script>

<style scoped>
  .list-box {
    /*filter: progid:DXImageTransform.Microsoft.Shadow(color=#CCCCCC, strength=4);
    -moz-box-shadow: 0 0 5px #CCCCCC;
    -webkit-box-shadow: 0 0 5px #CCCCCC;
    box-shadow: 0 0 5px #CCCCCC;*/
    /*height: 30px;*/
    background: #eeeeee;
    /*padding: 2px;*/
    margin: 5px 0px;
    /*display: table-row;*/
  }

  .list-box-name {
    display: table-cell;
    word-wrap: break-word;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    color: #005e9a;
    background: #d5e3f4;
  }

  .list-box-name span {
    height: 20px;
    display: inline-block;
    white-space: nowrap;
  }

  .list-box-items {
    display: table-cell;
    vertical-align: middle;
    font-size: 12px;
    padding-left: 10px;
  }

  .list-box-items ul {
    list-style: none;
    float: left;
  }

  .list-box-items ul>li {
    height: 24px;
    line-height: 24px;
    margin: 2px;
    /*float: left;*/
    display: inline-block;
    background: #eeeeee;
    border-right: 2px solid #AAAAAA;
    /*position: relative;*/
    padding: 0px 10px;
  }

  .list-box-items ul>li:hover {
    cursor: pointer;
  }

  .list-box-items ul>li:last-child {
    border: none;
  }

</style>
