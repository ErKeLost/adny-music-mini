// pages/detail-songs/index.js
import { rankstore } from '../../store/index'
import { getSongDetail } from '../../servise/api_music'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranking: "",
    rankInfo: {},
    songInfo: {},
    type: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type
    this.setData({type})
    if (type === 'menu') {
      const id = options.id
      getSongDetail(id).then(res => {
        this.setData({ songInfo: res.playlist})
      })
    } else if (type === 'rank') {
      const ranking = options.ranking
      console.log(ranking);
      this.setData({songInfo: ranking})
      rankstore.onState(ranking, this.getRankingData)
    }
  },

  onUnload: function () {
    this.data.ranking && rankstore.offState(this.data.ranking, this.getRankingData)
  },
  getRankingData(res) {
    this.setData({ songInfo: res})
  }
})