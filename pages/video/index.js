// pages/video/index.js
import { getTopMv, getPhoneBanner } from '../../servise/api_video.js'
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    mvList: [],
    mvSwiperList: [],
    hasMore: true,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getTopMvData({ offset: 0, limit: 10 })
    const mvSwiperList = await getPhoneBanner()
    this.setData({ mvSwiperList: mvSwiperList.banners })
  },
  async getTopMvData(data) {
    console.log(data.offset);
    if (!this.data.hasMore && data.offset !== 0) return
    wx.showNavigationBarLoading()
    const mvList = await getTopMv(data)
    let newData = this.data.mvList
    if(data?.offset === 0) {
      newData = mvList.data
    } else {
      newData = [...this.data.mvList, ...mvList.data]
    }
    this.setData({ mvList: newData })
    this.setData({ hasMore: mvList.hasMore})
    wx.hideNavigationBarLoading()
  },
  handleMvItemClick(event) {
    const mvItemId = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/detail-video/detail-video?id=${mvItemId}`
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function () {
    this.getTopMvData({ offset: 0, limit: 10 })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    this.getTopMvData({ offset: this.data.mvList.length, limit: 10})
  },

  /**
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {

  }
})