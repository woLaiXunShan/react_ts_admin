import { IS_LOGIN, ADD_TAG, DELETE_TAG } from './actionTypes'
// const initialState = {
//   isLogin: sessionStorage.isLogin ? JSON.parse(sessionStorage.isLogin) : false,
//   tags: sessionStorage.tags ? JSON.parse(sessionStorage.tags) : []
// }

export default (state: any, action: any) => {
  switch (action.type) {
    case IS_LOGIN:
      state.isLogin = action.value
      sessionStorage.isLogin = state.isLogin
      return state
    case ADD_TAG:
      {
        let names = state.tags.map((item: { name: any }) => item.name)
        if (!names.includes(action.value.name)) {
          state.tags.push(action.value)
          sessionStorage.tags = JSON.stringify(state.tags)
        }
        return state
      }
    case DELETE_TAG:
      state.tags.splice(action.value, 1)
      sessionStorage.tags = JSON.stringify(state.tags)
      return state
    default:
      return state
  }
}