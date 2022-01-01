import ARequest from './index'

export function getTopMv(data) {
  return ARequest.get('top/mv', data)
}
export function getPhoneBanner() {
  return ARequest.get('banner?type=2')
}
export function getMvUrl(id) {
  return ARequest.get('mv/url', id)
}
/**
 * mv 数据详情
 * @param {} mvId 
 */
export function getMvDetail(mvId) {
  return ARequest.get('mv/detail', mvId)
}


/**
 * 相关视频
 * @param {} Id
 */
export function getMvRelated(id) {
  return ARequest.get('simi/mv', id) 
}