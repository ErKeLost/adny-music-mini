import { HYEventStore } from 'hy-event-store'
import { getRankMusicData } from '../servise/api_music'
export const rankstore = new HYEventStore({
  state: {
    hotRanking: {}
  },
  actions: {
    getRankDataAction(ctx) {
      getRankMusicData(1).then(res => {
        ctx.hotRanking = res.playlist
      })
    }
  }
})