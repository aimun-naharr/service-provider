import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, image, description, price}= service

    return (
        <div className='service-card col-md-6 col-lg-4 gx-0 container'>
            <div className='card-image'>
            <img className='w-100' src={image} alt='image' />
            </div>
            <div className='mt-2'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>${price}</h5>
            </div>
        <button className='card-button'>Select</button>
        
        </div>
    );
};

export default Service;