const navStore = {
  navtree: [{
    name: '信息服务',
    id: 'xxfu',
    subnav: [{
      name: '信息服务_菜单一'
    }, {
      name: '信息服务_菜单二'
    }, {
      name: '信息服务_菜单三'
    }, {
      name: '信息服务_菜单四'
    }, {
      name: '信息服务_菜单五'
    }]
  }, {
    name: '常规调度',
    id: 'cgdd',
    subnav: [{
      name: '常规调度_菜单一'
    }, {
      name: '常规调度_菜单二'
    }, {
      name: '常规调度_菜单三'
    }, {
      name: '常规调度_菜单四'
    }, {
      name: '常规调度_菜单五'
    }]
  }, {
    name: '应急调度',
    id: 'yjdd',
    subnav: [{
      name: '应急调度_菜单一'
    }, {
      name: '应急调度_菜单二'
    }, {
      name: '应急调度_菜单三'
    }, {
      name: '应急调度_菜单四'
    }]
  }]
}

const getters = {
  // 获取顶部菜单
  topNav () {
    let topNav = []
    navStore.navtree.forEach((item) => {
      topNav.push({
        name: item.name,
        id: item.id
      })
    })
    return topNav
  }
}

const mutations = {
  // 获取左侧菜单
  leftNav (state, obj) {
    let topActiveMenu = obj.topActiveMenu
    let subTree = navStore.navtree.find((item) => {
      return item.id === topActiveMenu
    }) || {}
    return subTree.hasOwnProperty('subnav') ? subTree.subnav : []
  }
}

export default {
  navStore,
  getters,
  mutations
}
