// pages/rank/index.js
import { rankstore, rankingMap } from '../../store/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankings: {0: {}, 1: {}, 2: {}, 3:{}}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    rankstore.dispatch("getRankDataAction")
    rankstore.onState('hotRanking', this.getRankingData(1))
    rankstore.onState('originRanking', this.getRankingData(2))
    rankstore.onState('newRanking', this.getRankingData(0))
    rankstore.onState('upRanking', this.getRankingData(3))
  },
  handleSearch() {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onUnload: function () {

  },
  getRankingData(idx) {
    return (res) => {
      if (Object.keys(res).length === 0) return
      const {name, coverImgUrl, playCount} = res
      const songList = res.tracks.slice(0, 3)
      const origin = {...this.data.rankings, [idx]: {name, coverImgUrl,playCount, songList}}
      this.setData({
        rankings: origin
      })
    }
  },
  handleRankClick(event) {
    const id = event.currentTarget.dataset.idx;
    const rankingName = rankingMap[id]
    wx.navigateTo({
      url: `/pages/detail-songs/index?ranking=${rankingName}&type=rank`
    })
  }
})