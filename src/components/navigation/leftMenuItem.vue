<template>
  <li :class="{active: active}" 
    @click="selectMenu">
    <div :class="{'menu-item': !!children}">
      <icon v-if="icon" 
      :name="icon" 
      scale="1.5" 
      class="menu-icon"></icon>
      <router-link to="/">{{name}}</router-link>
      <div v-if="!!children" class="menu-toggle-arrow">
        <icon name="angle-down" scale="1.2"></icon>
      </div>
    </div>
    <ul v-show="active" class="sub-nav">
      <menu-item v-if="!!children" 
        v-for="(item, index) in children" :key="item.id" 
        :data-index="index"
        v-bind="item">
      </menu-item>
    </ul>
  </li>
</template>

<script>

  export default {
    name: 'menu-item',
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
        default: false
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
        this.$store.commit('activeLeftMenu', {
          activeMenuId: this.id
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  li {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
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
      vertical-align: -6px;
    }
    svg.menu-icon {
      padding-right: 10px;
    }
    div.menu-toggle-arrow {
      float: right;
      svg {
        vertical-align: -3px;
      }
    }
  }
  
  .active {
    background-color: #475669;
    border-right: 5px solid #20A0FF; // transition: all .2s linear;
    // -webkit-transition: all .2s linear;
  }

</style>
