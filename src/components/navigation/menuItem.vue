<template>
  <li class="menu-item" 
    @click="activeMenu"
    :class="itemClass">
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
    id: {
      type: String,
      default: ''
    },
    selectedMenu: String
  },
  computed: {
    itemClass () {
      return {
        active: this.selectedMenu === this.id
      }
    }
  },
  methods: {
    activeMenu () {
      // 激活当前菜单
      this.$emit('activeMenu', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  padding: 0 15px;
  &:hover {
    cursor: pointer;
    background-color: #475669;
    transition:background-color 0.3s linear;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}

.active {
  a {
    color: #58B7FF;
  }
  background-color: #475669;
}
</style>

