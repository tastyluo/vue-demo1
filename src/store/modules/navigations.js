const state = {
  navtree: [{
    name: '信息服务',
    id: 'xxfu',
    parentId: '',
    active: false
  }, {
    id: 'xxfu_1',
    parentId: 'xxfu',
    name: '信息服务_菜单一',
    active: false
  }, {
    id: 'xxfu_2',
    parentId: 'xxfu',
    name: '信息服务_菜单二',
    active: false
  }, {
    id: 'xxfu_3',
    parentId: 'xxfu',
    name: '信息服务_菜单三',
    active: false
  }, {
    id: 'xxfu_4',
    parentId: 'xxfu',
    name: '信息服务_菜单四',
    active: false
  }, {
    id: 'xxfu_5',
    parentId: 'xxfu',
    name: '信息服务_菜单五',
    active: false
  }, {
    name: '常规调度',
    id: 'cgdd',
    parentId: '',
    active: false
  }, {
    id: 'cgdd_1',
    parentId: 'cgdd',
    name: '常规调度_菜单一',
    active: false
  }, {
    id: 'cgdd_2',
    parentId: 'cgdd',
    name: '常规调度_菜单二',
    active: false
  }, {
    id: 'cgdd_3',
    parentId: 'cgdd',
    name: '常规调度_菜单三',
    active: false
  }, {
    id: 'cgdd_4',
    parentId: 'cgdd',
    name: '常规调度_菜单四',
    active: false
  }, {
    id: 'cgdd_5',
    parentId: 'cgdd',
    name: '常规调度_菜单五',
    active: false
  }, {
    name: '应急调度',
    id: 'yjdd',
    parentId: '',
    active: false
  }, {
    id: 'yjdd_1',
    parentId: 'yjdd',
    name: '应急调度_菜单一',
    active: false
  }, {
    id: 'yjdd_2',
    parentId: 'yjdd',
    name: '应急调度_菜单二',
    active: false
  }, {
    id: 'yjdd_3',
    parentId: 'yjdd',
    name: '应急调度_菜单三',
    active: false
  }, {
    id: 'yjdd_4',
    parentId: 'yjdd',
    name: '应急调度_菜单四',
    active: false
  }]
}

const getters = {
  // 获取顶部菜单
  topNav: state => {
    return state.navtree.filter(item => item.parentId === '')
  },
  // 获取左侧菜单
  leftNav: state => {
    let activeTopMenuId = (state.navtree.find(item => item.active) || {}).id
    return state.navtree.filter(item => item.parentId === activeTopMenuId)
  }
}

const mutations = {
  // 选择顶部菜单
  activeTopMenu (state, obj) {
    let activeMenuId = obj.activeMenuId
    state.navtree.forEach((item) => {
      if (item.id === activeMenuId) {
        item.active = true
      } else {
        item.active = false
      }
    })
  }
}

export default {
  state,
  getters,
  mutations
}
