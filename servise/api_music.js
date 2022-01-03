import ARequest from './index'
export function getRankMusicData(idx) {
  return ARequest.get('top/list', {
    idx
  })
}