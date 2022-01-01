// pages/detail-video/detail-video.js
import { getMvUrl, getMvDetail, getMvRelated } from '../../servise/api_video.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvItemId: null,
    mvUrl: null,
    mvDetail: {},
    mvRelated: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ mvItemId: options.id })
    this.getMvDetailPageData()
  },
  async getMvDetailPageData() {
    const url = await getMvUrl({id: this.data.mvItemId})
    this.setData({ mvUrl: url.data.url })
    getMvDetail({mvid: this.data.mvItemId}).then(res => {
      this.setData({ mvDetail: res.data})
    })
    getMvRelated({mvid: this.data.mvItemId}).then(res => {
      this.setData({ mvRelated: res.mvs})
    }) 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})