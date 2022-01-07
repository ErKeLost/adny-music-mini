// components/song-menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    rightText: {
      type: String
    },
    songMenu: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelMenuItemClick(event) {
      const item = event.currentTarget.dataset.item
      wx.navigateTo({
        url : `/pages/detail-songs/index?id=${item.id}&type=menu`,
      })
    }
  }
})
