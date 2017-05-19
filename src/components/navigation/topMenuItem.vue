<template>
  <li class="menu-item" @click="activeMenu" :class="itemClass">
    <router-link to="/">{{name}}</router-link>
  </li>
</template>

<script>
  export default {
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
      }
    },
    computed: {
      itemClass () {
        return {
          active: this.active
        }
      }
    },
    methods: {
      activeMenu () {
        this.$store.commit('activeTopMenu', {
          menuId: this.id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-item {
    padding: 0 15px;
    &:hover {
      cursor: pointer; // border-bottom: 3px solid #C0CCDA;
      // transition: border-bottom 0.3s linear;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  
  .active {
    // a {
    //   color: #58B7FF;
    // }
    background-color: #1D8CE0; // border-bottom: 3px solid #C0CCDA;
    transition: background-color .2s linear;
    -webkit-transition: background-color .2s linear;
  }
</style>

