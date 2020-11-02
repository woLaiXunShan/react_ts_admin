import { IS_LOGIN, ADD_TAG, DELETE_TAG, CLOSE_ALL } from './actionTypes'

export default (state: any, action: any) => {
  switch (action.type) {
    case IS_LOGIN:
      state.isLogin = action.value
      sessionStorage.isLogin = state.isLogin
      return state
    case ADD_TAG:
      state.tags.push(action.value)
      sessionStorage.tags = JSON.stringify(state.tags)
      return {...state}
    case DELETE_TAG:
      state.tags.splice(action.value, 1)
      sessionStorage.tags = JSON.stringify(state.tags)
      return {...state}
    case CLOSE_ALL:
      state.tags = [...action.value]
      sessionStorage.tags = JSON.stringify(state.tags)
      return {...state}
    default:
      return state
  }
}