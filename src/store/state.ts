const initialState = {
  isLogin: sessionStorage.isLogin ? JSON.parse(sessionStorage.isLogin) : false,
  tags: sessionStorage.tags ? JSON.parse(sessionStorage.tags) : [{name: "Home", path: "/", title: "首页"}]
}

export default initialState