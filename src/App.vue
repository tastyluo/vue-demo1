<template>
  <div id="app">
    <el-row :gutter="0" class="page-header">
      <el-col :md="24">
        <top-nav @toggleLeftNav="toggleLeftNav"></top-nav>
      </el-col>
    </el-row>
    
    <div class="page-body">
      <div class="page-body-nav">
        <transition name="nav-toggle">
          <left-nav v-show="!navToggle"></left-nav>
        </transition>
      </div>
      <div :class="['page-body-main', { 'page-body-main-left': !navToggle }]">
        <transition name="el-zoom-in-center">
          <router-view class="main-view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import topNav from './components/navigation/topNav'
  import leftNav from './components/navigation/leftNav'

  export default {
    data () {
      return {
        topActiveMenu: '',
        navToggle: false,
        mainWidthPer: 21
      }
    },
    watch: {
      navToggle (newVal) {
        if (newVal) {
          this.mainWidthPer = 24
        } else {
          this.mainWidthPer = 21
        }
      }
    },
    methods: {
      activeTopMenu (menuid) {
        this.topActiveMenu = menuid
      },
      toggleLeftNav () {
        this.navToggle = !this.navToggle
      }
    },
    components: {
      'top-nav': topNav,
      'left-nav': leftNav
    }
  }
</script>

<style lang="scss">
  body,
  div,
  span,
  ul,
  li,
  a {
    margin: 0px;
    padding: 0px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  ul {
    list-style: none;
  }
  
  #app {
    width: 100%;
    height: 100%;
  }

  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }
  
  .page-body {
    position: relative;
    top: 60px;
    left: 0;
    min-width: 1200px;
  }
  
  .page-body-nav {
    position: fixed;
    width: 200px;
    float: left;
  }

  .page-body-main {
    // position: absolute;
    z-index: 2;
    height: 1000px;
    padding: 10px;
  }

  .page-body-main-left {
    margin-left: 200px;
  }
  
  .nav-toggle-enter-active,
  .nav-toggle-leave-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }
  
  .nav-toggle-enter,
  .nav-toggle-leave-to {
    transform: translateX(-200px);
    // opacity: .0;
  }
</style>

