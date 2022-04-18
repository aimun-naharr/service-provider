import React from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const services=[
        {id:1, name: 'Dumble Press Bosu', price: 5, description: 'We provide dumbble  press bosu service which targets chest and triceps and also involves abs and instructions for how to perform this exercise correctly' , image: 'https://i.ibb.co/8cxxMzd/bosuBall.jpg'},
        {id:2, name: 'Dumble Muscle Fit', price: 4, description: 'The program calls for you to work out 5 days per week. What days you decide to work out on are completely up to you. Just ensure that you incorporate 2 rest/active recovery days into your weekly schedule.', image:'https://i.ibb.co/Lp1hcHZ/muscle.jpg'},
        {id:3, name: 'Stretches And Crunches', price: 7, description: 'Crunch exercise is one of the best exercises to build your abs and strengthen your core. This will strengthen your stomach muscles, as well as your lower back muscles.', image: 'https://i.ibb.co/0mf6khC/stretch.jpg'}
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