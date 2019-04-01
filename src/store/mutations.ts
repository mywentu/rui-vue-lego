import * as types from './mutation-types'

const mutations = {
  [types.SET_LISTSELECT] (state, selectItems) {
    state.selectItems = selectItems
  },
  [types.GET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
export default mutations
