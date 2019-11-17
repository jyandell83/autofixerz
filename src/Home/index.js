import React from 'react';

import Hero from '../Hero';
import Services from '../Services';
import Stories from '../Stories';



function Home() {
    return (
      <div className="Home">
        <Hero />
        <Services />
        <Stories />
      </div>
    );
  }

  export default Home;