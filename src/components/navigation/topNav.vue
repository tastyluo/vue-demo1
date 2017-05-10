<template>
  <div class="top-header">
    <ul>
      <li class="toggle-left-nav">
        <div><icon name="navicon" scale="1.3"></icon></div>
      </li>
      <li class="logo">
        <span>抚河流域水资源调度决策支持系统</span>
      </li>
      <li class="top-header-nav">
        <ul>
          <li v-for="item in topNavData" >
            <router-link to="/">{{item.name}}</router-link>
          </li>
          <!--<li v-bind:class="{active: isActive && isClick}" @click="">
            <router-link to="/">信息服务</router-link>
          </li>
          <li>
            <router-link to="/">常规调度</router-link>
          </li>
          <li>
            <router-link to="/">应急调度</router-link>
          </li>-->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '',
        isClick: false,
        isActive: true,
        topNavData: this.$store.getters.topNav
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
  .top-header {
    width: 100%;
    height: 60px;
    background-color: #324057;
    ul {
      list-style: none;
      li {
        float: left;
        height: 60px;
        line-height: 60px;
        margin: 0;
        position: relative;
        box-sizing: border-box;
      }
      li.toggle-left-nav {
        color: #fff;
        padding: 0 10px;
        div {
          line-height: 70px;
          height: 60px;
          svg {
            cursor: pointer;
          }
        }
      }
      li.logo {
        padding: 0 100px 0 20px;
        color: #fff;
        font-size: 20px;
      }
      li.top-header-nav {
        a {
          text-decoration: none;
          color: #fff;
        }
        li {
          padding: 0 15px;
        }
      }
    }
  }
</style>
