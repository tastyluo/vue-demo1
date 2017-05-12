<template>
  <div class="layout-left">
    <ul>
      <li v-for="item in navData">
        <i>
          <icon name="home"></icon>
        </i>
        <router-link to="/">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters({
      navData: 'leftNav'
    })
  }
}

</script>

<style lang="scss" scoped>
.layout-left {
  width: 200px;
  height: 100%;
  background-color: #333; // border-top: 1px solid #8492A6;
  color: #fff;
  font-size: 13px;
  li {
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    position: relative;
    box-sizing: border-box;
    i {
      float: left;
      padding-right: 10px;
    }
  }
}
</style>
