// components/area-header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "安东尼娅"
    },
    rightText: {
      type: String,
      value: "文本"
    },
    showRight: {
      type: Boolean,
      value: true
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
    handleRightClick() {
      this.triggerEvent("click")
    }
  } 
})
