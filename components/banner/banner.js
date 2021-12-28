// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mvSwiperList: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    easing: "easeInOutCubic",
    circular: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
