<template>
  <div id="app">
    <div class="top-nav">
      <top-nav @toggleLeftNav="toggleLeftNav"></top-nav>
      <transition name="nav-toggle">
        <left-nav v-show="!isToggle"></left-nav>
      </transition>
      <div class="main-container"></div>
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
      this.isToggle = !this.isToggle
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

.main-container {
  height: 2000px;
  width: 100%;
}

.nav-toggle-enter-active {
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}

.nav-toggle-leave-active {
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}

.nav-toggle-enter,
.nav-toggle-leave-to {
  transform: translateX(-200px);
  opacity: .0;
}
</style>

