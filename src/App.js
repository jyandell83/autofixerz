import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { withRouter } from "react-router";
import { initialState, reducer} from './settings'


//components
import Nav from './Nav';
import Home from './Home';
import Book from './Book';
import Routine from './Routine'


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <Nav />
      <Switch>
            <Route exact path = '/' render = { () => <Home /> } />
            <Route exact path = '/book' render = { () => <Book dispatch={dispatch} /> } />
            <Route exact path = '/service' render = { () => <Routine Routine={state.chosenWork}/> } />
      </Switch>
    </div>
  );
}

export default App;
