import React from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const services=[
        {id:1, name: 'Dumble Press Bosu', price: 5, description: 'something feels amazing' , image: 'https://i.ibb.co/8cxxMzd/bosuBall.jpg'},
        {id:2, name: 'Dumble Muscle Fit', price: 5, description: 'something feels amazing', image:'https://i.ibb.co/Lp1hcHZ/muscle.jpg'},
        {id:3, name: 'Stretches And Crunches', price: 5, description: 'something feels amazing', image: 'https://i.ibb.co/0mf6khC/stretch.jpg'}
]
    return (
        <div className='mt-4 mb-4'>
        <h1 className='text-center container service-title font-lobster'>Services</h1>
          <div id='services' className="service-container text-center mx-auto w-100">
              <div className="row">
              {
                  services.map(service=><Service key={service.id}
                  service={service}></Service>)
              }
              </div>
          </div>
        </div>
    );
};

export default Services;