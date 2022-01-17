// pages/player/index.js
import { getSongDetail } from '../../servise/api_player'
import { audioStore } from '../../store/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    currentSong: null,
    currentPage: 0,
    contentHeight: 0,
    duration: 0,
    sliderValue: 0,
    currentTime: 0,
    isSliderChanging: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取传入的id
    const id = options.id
    this.setData({id})
    // TODO 获取歌曲信息
    this.getPageData(id)

    const {screenHeight, statusBarHeight} = getApp().globalData
    const contentHeight = screenHeight - statusBarHeight - 44
    this.setData({contentHeight})
    // const audioContext = wx.createInnerAudioContext()
    audioStore.stop()
    audioStore.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    audioStore.onCanplay(() => {
      audioStore.play()
    })
    audioStore.onTimeUpdate(() => {
      const currentTime = audioStore.currentTime * 1000
      const sliderValue = currentTime / this.data.duration * 100
      if (!this.data.isSliderChanging) {
        this.setData({ currentTime })
        this.setData({ sliderValue})
      }
    })
  },
  handleSliderChange(event) {
    const value = event.detail.value
    const currentTime = this.data.duration * value / 100
    audioStore.pause()
    audioStore.seek(currentTime / 1000)

    this.setData({ sliderValue: value})
  },
  handleSliderChanging(event) {
    const value = event.detail.value
    const currentTime = this.data.duration * value / 100
    this.setData({isSliderChanging: true, currentTime})

  },
  handleSwiperChange(event) {
    const currentPage = event.detail.current
    this.setData({currentPage})
  },
  handlePause() {
    audioStore.pause()
  },
  getPageData(id) {
    getSongDetail(id).then(res => {
      this.setData({currentSong: res.songs[0], duration: res.songs[0].dt})
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