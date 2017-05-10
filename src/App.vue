<template>
  <div id="app">
    <div class="top-nav">
      <!--<top-nav></top-nav>-->
      <router-view class="view one"></router-view>
    </div>
  </div>
</template>

<script>
  import topNav from './components/navigation/topNav'
  import leftNav from './components/navigation/leftNav'

  export default {
    data () {
      return {
        modalVisible: false,
        info: ''
      }
    },
    methods: {
      showModal () {
        this.modalVisible = true
      }
    },
    components: {
      'top-nav': topNav,
      'left-nav': leftNav
    }
  }
</script>

<style>
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
  }

  #app {
    width: 100%;
    height: 100%;
  }

</style>

