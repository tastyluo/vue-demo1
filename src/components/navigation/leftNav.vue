<template>
  <div class="layout-left">
    <transition-group tag="ul" name="left-nav">
      <menu-item v-for="(item, index) in navData" 
        :key="item.id" 
        :data-index="index"
        v-bind="item">
      </menu-item>
    </transition-group>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MenuItem from './leftMenuItem'

  export default {
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters({
        navData: 'leftNav'
      })
    },
    components: {
      'menu-item': MenuItem
    }
  }

</script>

<style lang="scss" scoped>
  .layout-left {
    width: 200px;
    position: fixed;
    background-color: #333; // border-top: 1px solid #8492A6;
    color: #fff;
    float: left;
    margin-top: 60px;
    margin-bottom: -2000px;
    padding-bottom: 2000px;
    font-size: 13px;
  }
  
  .left-nav-enter-active,
  .list-leave-active {
    transition: all .2s;
  }
  
  .left-nav-enter,
  .left-nav-leave-to {
    opacity: 0; // transform: translateY(5px);
  }

</style>

