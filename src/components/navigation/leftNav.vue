<template>
  <div class="layout-left">
    <transition-group tag="ul" name="left-nav">
      <li v-for="(item, index) in navData" 
        :key="item.id"
        :data-index="index"
        :class="{active: item.active}" 
        @click="selectMenu(item.id)">
        <icon name="home" scale="1.5" class="menu-icon"></icon>
        <router-link to="/">{{item.name}}</router-link>
        <div class="menu-toggle-arrow">
          <icon name="angle-down" scale="1.2"></icon>
        </div>
      </li>
    </transition-group>
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
    },
    methods: {
      selectMenu (menuid) {
        this.$store.commit('activeLeftMenu', {
          activeMenuId: menuid
        })
      }
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
    li {
      height: 48px;
      line-height: 48px;
      padding: 0 10px;
      position: relative;
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
        background-color: #475669;
        transition: background-color .2s linear;
        -webkit-transition: background-color .2s linear;
      }
      svg {
        // float: left;
        // padding-right: 10px;
        vertical-align: -5px;
      }
      svg.menu-icon {
        padding-right: 10px;
      }
      .menu-toggle-arrow {
        float: right;
      }
    }
    .active {
      background-color: #475669;
      border-right: 5px solid #20A0FF;
      // transition: all .2s linear;
      // -webkit-transition: all .2s linear;
    }
  }

.left-nav-enter-active, .list-leave-active {
  transition: all .2s;
}
.left-nav-enter, .left-nav-leave-to {
  opacity: 0;
  // transform: translateY(5px);
}

</style>

