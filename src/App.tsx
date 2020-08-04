import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login'
import Layout from './pages/Layout/Layout'
// import store from './store'
// const [{isLogin}] = useState(store.getState())
// console.log(isLogin)

const App: React.FC<any> = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
)

export default App;