// pages/home-music/index.js
import { rankstore } from '../../store/index'
import {
  getPhoneBanner
} from '../../servise/api_video.js'
import {
  getSongMenu
} from '../../servise/api_music.js'
import querySelector from '../../utils/querySelector'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    bannerHeight: 100,
    recommendSong: [],
    hotSongMenu: new Set(),
    recommendSongMenu: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
    rankstore.dispatch("getRankDataAction")
    rankstore.onState('hotRanking', (res) => {
      const recommendSong = res.tracks?.slice(0, 6)
      this.setData({recommendSong})
    })
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
    getSongMenu().then(res => {
      this.setData({ hotSongMenu: res.playlists})
    })
    getSongMenu("华语").then(res => {
      this.setData({ recommendSongMenu: res.playlists})
    })
  },
  handelLoadImage() {
    querySelector('.swiper-image').then(res => {
      this.setData({
        bannerHeight: res[0].height
      })
    })
  },
  handleMoreClick() {
    wx.navigateTo({
      url: '/pages/detail-songs/index'
    })
  }
})