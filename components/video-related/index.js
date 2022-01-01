// components/video-related/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
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
    handleMvItemClick(event) {
      const mvItemId = event.currentTarget.dataset.item.id
      wx.redirectTo ({
        url: `/pages/detail-video/detail-video?id=${mvItemId}`
      })
    }
  }
})
