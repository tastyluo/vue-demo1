<template>
  <li :class="menuItemCls" @click.stop="selectMenu">
    <div :class="{'menu-item': hasSubNav}">
      <icon v-if="icon" :name="icon" scale="1.5" class="menu-icon"></icon>
      <span>{{name}}</span>
      <!--<router-link :to="routerTo" v-else>{{name}}</router-link>-->
      <div v-if="hasSubNav" class="menu-arrow">
        <icon name="angle-up" scale="1.2" :class="menuArrowCls"></icon>
      </div>
    </div>
  
    <!--<transition name="sub-nav" 
        @before-enter="beforeEnter" 
        @after-enter="afterEnter" 
        @before-leave="beforeLeave" 
        @after-leave="afterLeave">-->
  
    <el-collapse-transition>
      <ul v-show="expand" class="sub-nav">
        <menu-item v-for="(item, index) in children" :key="item.id" :data-index="index" v-bind="item">
        </menu-item>
      </ul>
    </el-collapse-transition>
  
    <!--</transition>-->
  
  </li>
</template>

<script>

  export default {
    name: 'menu-item',
    computed: {
      menuItemCls () {
        return {
          'active': this.active && !this.children,
          'menu-item': !this.children
        }
      },
      menuArrowCls () {
        return {
          'menu-arrow': true,
          'menu-arrow-active': this.expand
        }
      },
      hasSubNav () {
        return !!this.children
      }
    },
    data () {
      return {
        showSubNav: false
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      parentId: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      },
      routerTo: {
        type: String,
        default: '/'
      },
      active: {
        type: Boolean,
        default: null
      },
      icon: {
        type: String,
        default: null
      },
      expand: {
        type: Boolean,
        default: null
      },
      children: {
        type: Array,
        default: null
      }
    },
    methods: {
      selectMenu () {
        if (this.hasSubNav) {
          this.$store.commit('expandLeftMenu', {
            menuId: this.id
          })
        } else {
          // 编程式的导航
          this.$router.push(this.routerTo)
          this.$store.commit('activeLeftMenu', {
            menuId: this.id
          })
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .menu-item {
    height: 48px;
    line-height: 48px;
    padding: 0 10px 0 10px;
    position: relative; // box-sizing: border-box;
    // border: 5px solid transparent;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
      cursor: pointer; // background-color: #454545;
      // transition: background-color .2s linear;
      // -webkit-transition: background-color .2s linear;
      // border-left: 5px solid #20A0FF;
      // transition: border-left .2s linear;
      // -webkit-transition: border-left .2s linear;
    }
    svg {
      // float: left;
      // padding-right: 10px;
      vertical-align: -6px;
    }
    svg.menu-icon {
      padding-right: 2px;
    }
    div.menu-arrow {
      float: right;
      // svg {
      //   vertical-align: -3px;
      // }
    }
  }
  
  .sub-nav {
    background-color: #464646;
    li {
      padding-left: 37px;
    }
  }
  
  .active {
    // background-color: #7F7F7F;
    color: #20A0FF; 
    border-right: 5px solid #20A0FF;
    // a {
    //   color: #20A0FF;
    // }
  }
  
  .menu-arrow {
    transform: rotate(180deg);
  }
  
  .menu-arrow-active {
    transform-origin: center center;
    transition: all .2s ease;
  }
  
  .sub-nav-enter-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }
  
  .sub-nav-leave-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }
  
  .sub-nav-enter {
    transform: translateY(30px);
    opacity: .0;
  }
  
  .sub-nav-leave-to {
    transform: translateY(30px);
    opacity: .0;
  }
</style>
