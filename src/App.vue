<template>
  <div id="app">
    <div class="top-nav">
      <top-nav @toggleLeftNav="toggleLeftNav"></top-nav>
      <left-nav v-show="!isToggle"></left-nav>
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
      topActiveMenu: '',
      isToggle: false
    }
  },
  methods: {
    activeTopMenu (menuid) {
      this.topActiveMenu = menuid
    },
    toggleLeftNav () {
      this.isToggle = true
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
  color: #fff;
}

ul {
  list-style: none;
}

#app {
  width: 100%;
  height: 100%;
}
</style>

