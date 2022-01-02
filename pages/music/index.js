// pages/home-music/index.js
import {
  getPhoneBanner
} from '../../servise/api_video.js'
import querySelector from '../../utils/querySelector'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    bannerHeight: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  handleSearch() {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  getPageData() {
    getPhoneBanner().then(res => {
      this.setData({
        banner: res.banners
      })
    })
  },
  handelLoadImage() {
    querySelector('.swiper-image').then(res => {
      this.setData({
        bannerHeight: res[0].height
      })
    })
  }
})