import React from 'react';
import { types } from '../settings';
import { Link } from 'react-router-dom'

const services = [
    'Oil Change',
    'Change Battery',
    'Fix a Flat',
    'Tire Rotation',
    'Tune Up',
    'Dent Repair'
]



function Book({dispatch}) {
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
            {
                services.map((service) =>
                    <li
                        key={service}
                        onClick={() => dispatch({
                            type: types.changeChosenWork,
                            payload: service
                        })}
                    ><Link to='/service'>{service}</Link>
                    </li>
                )
            }
        </ul>
      </div>
    );
  }

  export default Book;