import ARequest from './index'

export function getSearchHot() {
  return ARequest.get('search/hot')
}

export function getSearchSuggest(keywords) {
  return ARequest.get('search/suggest', {
    keywords,
    type: "mobile"
  })
}