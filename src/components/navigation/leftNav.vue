<template>
  <div class="layout-left">
    <ul>
      <li v-for="item in navData">
        <router-link to="/">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    topActiveMenu: String
  },
  computed: {
    navData () {
      return this.$store.commit('leftNav', {
        topActiveMenu: this.topActiveMenu
      })
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    activeNav () {
      this.isClick = true
    }
  }
}

</script>

<style lang="scss" scoped>
.layout-left {
  width: 150px;
  li {
    height: 30px;
    line-height: 30px;
    position: relative;
    box-sizing: border-box;
  }
}
</style>
