<template>
  <div class="layout-top">
    <ul>
      <li class="toggle-left-nav">
        <div>
          <icon name="navicon" scale="1.3"></icon>
        </div>
      </li>
      <li class="logo">
        <span>{{systemName}}</span>
      </li>
      <li class="layout-top-nav">
        <ul>
          <menu-item 
            v-for="item in navData" 
            :key="item.id" 
            v-bind="{name: item.name, id: item.id, selectedMenu: selectedMenu}" 
            @activeMenu="selectMenu"></menu-item>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuItem from './menuItem'
const systemName = '抚河流域水资源调度决策支持系统'

export default {
  data () {
    return {
      // 当前选中菜单的id
      selectedMenu: '',
      systemName: systemName
    }
  },
  watch: {
    selectedMenu () {
      this.$emit('activeMenu', this.selectedMenu)
    }
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters({
      navData: 'topNav'
    })
  },
  methods: {
    selectMenu (menuid) {
      this.selectedMenu = menuid
    }
  },
  components: {
    'menu-item': MenuItem
  }
}

</script>

<style lang="scss" scoped>
.layout-top {
  width: 100%;
  height: 60px;
  background-color: #324057;
  ul {
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
  }
}
</style>

