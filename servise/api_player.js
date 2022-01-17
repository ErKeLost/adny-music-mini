import ARequest from './index'
export function getSongDetail(idx) {
  return ARequest.get('song/detail', {
    ids: idx
  })
}