import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name, image, description, price}= service
    const navigate= useNavigate()
    const handleCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div className='service-card col-md-6 col-lg-4 gx-0 container'>
            <div className='card-image'>
            <img className='w-100' src={image} alt='image' />
            </div>
            <div className='mt-2 service-info'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>${price}</h5>
                <button onClick={handleCheckOut} className='card-button'>
                    Select
                </button>
            </div>
       
        
        </div>
    );
};

export default Service;