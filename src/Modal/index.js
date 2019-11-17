
import React from 'react';


const Modal = ({toggleModal}) => (
    <div className="modal">
        
        <div className="modal-content">
        <h2 className="heading-secondary">Available Appointments</h2><br />
            <div className="top-margin-small">
                <span className="appt-date">November 17 | 12pm -- </span><a href="/" className="btn btn--yellow" onClick={() => toggleModal()}>Book</a>
            </div>
            <div className="top-margin-small">
                <span className="appt-date">November 17 | 3pm -- </span><a href="/" className="btn btn--yellow" onClick={() => toggleModal()}>Book</a>
            </div>
            <div className="top-margin-small">
                <span className="appt-date">November 19 | 11am -- </span><a href="/" className="btn btn--yellow" onClick={() => toggleModal()}>Book</a>
            </div>
            <div className="top-margin-small">
                <span className="appt-date">November 20 | 12pm -- </span><a href="/" className="btn btn--yellow" onClick={() => toggleModal()}>Book</a>
            </div>
            
        </div>
        
    </div>
  
)

export default Modal