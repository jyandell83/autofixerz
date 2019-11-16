import React from 'react';

const Services = () =>  {
    return(
        <div className="services-section">
            <h2 className="heading-secondary top-margin-small">
                Our Services
            </h2>
            <div className="services-section__services-row top-margin-medium">
                <div className="service-card">
                    <i class="fas fa-car-side service-card__icon"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-card">
                    <i class="fas fa-car-crash service-card__icon"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-card">
                    <i class="fas fa-oil-can service-card__icon"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-card">
                    <i class="fas fa-car-battery service-card__icon"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-card">
                    <i class="fas fa-motorcycle service-card__icon"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )


}

export default Services;