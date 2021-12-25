import ARequest from './index'

export function getTopMv(data) {
  return ARequest.get('top/mv', data)
}