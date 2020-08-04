/**
 * 
 * @param state 
 * @param action 
 */
const defaultState = {
  isLogin: sessionStorage.isLogin || false
}
const reducer = (state = defaultState, action = {}) => {

  return state
}
export default reducer