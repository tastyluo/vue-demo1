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
        <transition name="view-fade-in">
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
        navToggle: false
      }
    },
    watch: {
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
  body, div, span, ul, li, a, p, h1, h2, h3, h4, h5 {
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

  .view-fade-in-enter-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }

  .view-fade-in-enter,
  .view-fade-in-leave-to {
    // transform: translateX(100px);
    opacity: .0;
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

