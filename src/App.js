import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { withRouter } from "react-router";


//components
import Nav from './Nav';
import Home from './Home'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
            <Route exact path = '/' render = { () => <Home /> } />
            <Route exact path = '/repair' render = { () => <div>repair</div> } />
      </Switch>
    </div>
  );
}

export default App;
