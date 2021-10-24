import React from 'react';
//import logo from './logo.svg';    // Warning解消
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import NewAccount from "./components/pages/newaccount";
import Login from "./components/pages/login";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/newaccount" component={NewAccount} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;