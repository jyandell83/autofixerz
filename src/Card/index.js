
import React from 'react';


const Card = ({mechanic, toggleModal}) => (
    <div className="card">
        <div className="card__content">
            <h2 className="card__heading">{mechanic.name}</h2>
            <p>Rating: {`${mechanic.rating}/5`} {mechanic.location}</p>
        </div>
        <a href="#" className="btn btn--yellow" onClick={() => toggleModal()}>
            Book Fixer
        </a>
        
    </div>
  
)

export default Card