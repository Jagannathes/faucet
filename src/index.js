import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css'
import Dashboard from './dashboard';
//import Dashboard from './dashboard.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
          <App />
          </Route>
        </Switch>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);