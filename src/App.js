import React from 'react';
import logo from './logo.svg';
import './App.scss';


//components
import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import Stories from './Stories';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Stories />
    </div>
  );
}

export default App;
