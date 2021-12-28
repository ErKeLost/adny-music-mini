import ARequest from './index'

export function getTopMv(data) {
  return ARequest.get('top/mv', data)
}
export function getPhoneBanner() {
  return ARequest.get('banner?type=2')
}