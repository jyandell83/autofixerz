import React from 'react';
import { types } from '../settings';


const locations = [
    'Los Angeles',
    'San Francisco',
    'San Diego'
]

const Routine = ({Routine, location, dispatch}) => {
    
    return (
      <div className="Routine">
        {Routine} in {location}
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
      </div>
    );
  }
  
  export default Routine;