import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { withRouter } from "react-router";
import { initialState, reducer} from './settings'


//components
import Nav from './Nav';
import Home from './Home';
import Book from './Book';
import Routine from './Routine';
import Footer from './Footer';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <div className="content-wrap">
      <Nav />
      <Switch>
            <Route exact path = '/' render = { () => <Home /> } />
            <Route exact path = '/book' render = { () => <Book dispatch={dispatch} /> } />
            <Route exact path = '/service' render = { () => <Routine Routine={state.chosenWork} location={state.location} dispatch={dispatch}/> } />
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;
