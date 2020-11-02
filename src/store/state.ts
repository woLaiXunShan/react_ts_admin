const initialState = {
  isLogin: sessionStorage.isLogin ? JSON.parse(sessionStorage.isLogin) : false,
  tags: sessionStorage.tags ? JSON.parse(sessionStorage.tags) : [],
}

export default initialState