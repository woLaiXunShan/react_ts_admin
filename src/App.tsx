import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login'
import Layout from './pages/Layout/Layout'

const App: React.FC<any> = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  </Router>
)

export default App;