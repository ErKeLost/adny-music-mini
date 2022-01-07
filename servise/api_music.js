import ARequest from './index'
export function getRankMusicData(idx) {
  return ARequest.get('top/list', {
    idx
  })
}

export function getSongMenu(cat="全部", limit=12, offset=0) {
  return ARequest.get('top/playlist', {
    cat,
    limit,
    offset
  })
}


export function getSongDetail(id) {
  return ARequest.get('playlist/detail/dynamic', {
    id
  })
}