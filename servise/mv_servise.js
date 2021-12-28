import ARequest from './index'

export function getMvUrl(id) {
  return ARequest.get('/mv/url', id)
}