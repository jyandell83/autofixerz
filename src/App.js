import React, { useReducer, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { withRouter } from "react-router";
import { initialState, reducer } from './settings'
import database from './Firebase/firebase'


//components
import Nav from './Nav';
import Home from './Home';
import Book from './Book';
import Routine from './Routine';
import Footer from './Footer';
import Signup from './Signup';
import Login from './Login';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    database.ref('users').set({
      "name": "Jeremy"
    })
    .then(() => console.log('Data Written Successfully'))
    .catch((error) => console.log('Firebase Error ', error))
  });
  return (
    <div className="App">
      <div className="content-wrap">
      <Nav />
      <Switch>
            <Route exact path = '/' render = { () => <Home /> } />
            <Route exact path = '/book' render = { () => <Book dispatch={dispatch} /> } />
            <Route exact path = '/service' render = { () => <Routine Routine={state.chosenWork} location={state.location} dispatch={dispatch}/> } />
            <Route exact path = '/signup' render = { () => <Signup /> } />
            <Route exact path = '/login' render = { () => <Login /> } />
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;
