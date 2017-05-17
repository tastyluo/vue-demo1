<template>

  <li :class="menuItemClass" @click="selectMenu">
    <div :class="{'menu-item': hasSubNav}">
      <icon v-if="icon" :name="icon" scale="1.5" class="menu-icon"></icon>
      <a href="javascript:void(0)" v-if="hasSubNav">{{name}}</a>
      <router-link to="/" v-else>{{name}}</router-link>
      <div v-if="hasSubNav" class="menu-toggle-arrow">
        <icon name="angle-down" scale="1.2"></icon>
      </div>
    </div>
  
    <transition name="sub-nav">
      <ul v-if="showSubNav" class="sub-nav">
        <menu-item v-if="hasSubNav" 
        v-for="(item, index) in children" 
        :key="item.id" 
        :data-index="index" 
        v-bind="item">
        </menu-item>
      </ul>
    </transition>
  
  </li>

</template>

<script>

  export default {
    name: 'menu-item',
    computed: {
      menuItemClass () {
        return {
          'active': this.active && !this.children,
          'menu-item': !this.children
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
      active: {
        type: Boolean,
        default: null
      },
      icon: {
        type: String,
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
          this.showSubNav = !this.showSubNav
        } else {
          this.$store.commit('activeLeftMenu', {
            activeMenuId: this.id
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
    position: relative;
    // box-sizing: border-box;
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
    div.menu-toggle-arrow {
      float: right;
      svg {
        vertical-align: -3px;
      }
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
    // border-left: 5px solid #20A0FF;
    a {
      color: #20A0FF;
    }
  }
  
  .sub-nav-enter-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }
  
  .sub-nav-leave-active {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
  }
  
  .sub-nav-enter,
  .sub-nav-leave-to {
    transform: translateY();
    opacity: .0;
  }

</style>
