import React from 'react';

const Service = ({service}) => {
    const {name, image, description}= service

    return (
        <div>
            <img src={image} alt='bosuball' />
            
        <p>{name}</p>
        <p>{description}</p>
        
        </div>
    );
};

export default Service;