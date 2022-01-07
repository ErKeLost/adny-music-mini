import {
  HYEventStore
} from 'hy-event-store'
import {
  AEventStore
} from 'adny-store'
import {
  getRankMusicData
} from '../servise/api_music'
export const rankingMap = {0: "newRanking", 1: "hotRanking", 2:"originRanking", 3:"upRanking"}
export const rankstore = new AEventStore({
  state: {
    upRanking: {},
    hotRanking: {},
    originRanking: {},
    newRanking: {}
  },
  actions: {
    getRankDataAction(ctx) {
      for (let i = 0; i < 4; i++) {
        getRankMusicData(i).then(res => {
          const rankingName = rankingMap[i]
          ctx[rankingName] = res.playlist
          // switch (i) {
          //   case 0:
          //     ctx.newRanking = res.playlist
          //     break;
          //   case 1:
          //     ctx.hotRanking = res.playlist
          //     break;
          //   case 2:
          //     ctx.originRanking = res.playlist
          //     break;
          //   case 3:
          //     ctx.upRanking = res.playlist
          //     break;
          // }
        })
      }
    }
  }
})