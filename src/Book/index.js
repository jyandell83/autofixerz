import React from 'react';






function Book() {
    return (
      <div className="Book">
        <h1 className="heading-primary top-margin-small">
            Help! something is majorly wrong
        </h1>
        <a href="/book" className="btn btn--yellow top-margin-small">
            Inspect and Bid
        </a>
        <h1 className="heading-primary top-margin-small">
            Routine Maintenance
        </h1>
        <ul className="top-margin-small">
            <li>Oil Change &rarr;</li>
            <li>Change Battery &rarr;</li>
            <li>Fix a Flat &rarr;</li>
            <li>Tire Rotation &rarr;</li>
            <li>Tune Up &rarr;</li>
            <li>Check Fluids &rarr;</li>
            <li>Dent Repair &rarr;</li>
        </ul>
      </div>
    );
  }

  export default Book;