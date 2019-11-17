import React, { useState, useEffect } from 'react';
import { types } from '../settings';

import { locations, mechanics } from './variables';

import Card from '../Card';
import Modal from '../Modal';


const Routine = ({Routine, location, dispatch}) => {
    const [mechs, setMechs] = useState([...mechanics].filter(mech => mech.location === location))
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () =>  {
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        setMechs([...mechanics].filter(mech => mech.location === location))
      }, [location]);

    console.log(locations, mechanics)
    return (
      <div className="Routine">
        <h1 className="heading-primary">{Routine} in {location}</h1><br />
        Change your location:
        <select
            onChange={(e) => dispatch({
                type: types.changeLocation,
                payload: e.target.value
            })}
        >
            {
                locations.map((loc) =>
                    <option
                        key={loc}
                        
                    >
                        {loc}
                    </option>
                )
            }
        </select>
        <div className="card-holder">
            <h2 className="heading-secondary top-margin-medium">Fixerz in your Area</h2>
            {
                mechs.map((mech) =>
                    <Card mechanic={mech} toggleModal={toggleModal}/>
            )
            }
        </div>
        {
            modalIsOpen ? <Modal toggleModal={toggleModal}/> : null
        }
      </div>
    );
  }
  
  export default Routine;