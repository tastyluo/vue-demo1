
const navStore = {
  navtree: [{
    name: '信息服务',
    id: 'xxfu',
    subnav: [{
      name: '菜单一'
    }, {
      name: '菜单二'
    }, {
      name: '菜单三'
    }, {
      name: '菜单四'
    }, {
      name: '菜单五'
    }]
  }, {
    name: '常规调度',
    id: 'cgdd',
    subnav: [{
      name: '菜单一'
    }, {
      name: '菜单二'
    }, {
      name: '菜单三'
    }, {
      name: '菜单四'
    }, {
      name: '菜单五'
    }]
  }, {
    name: '应急调度',
    id: 'yjdd',
    subnav: [{
      name: '菜单一'
    }, {
      name: '菜单二'
    }, {
      name: '菜单三'
    }, {
      name: '菜单四'
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
  leftNav (parentid) {
    let subTree = navStore.navtree.find((item) => {
      return item.id === parentid
    })
    return subTree.hasOwnProperty('subnav') ? subTree.subnav : []
  }
}

export default {
  navStore,
  getters,
  mutations
}

