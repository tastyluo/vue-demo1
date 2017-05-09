<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
    <div class="toggle-left-nav"></div>
    <div class="logo"></div>
    <el-menu-item index="1">信息服务</el-menu-item>
    <el-menu-item index="2">常规调度</el-menu-item>
    <el-menu-item index="3">应急调度</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }

</script>

