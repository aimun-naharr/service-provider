import React from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const services=[
        {id:1, name: 'Dumble Press Bride On  Bosu', price: 5, description: 'something feels amazing' , image: 'https://ibb.co/bJvv1H2'},
        {id:2, name: 'Dumble Muscle Fit', price: 5, description: 'something feels amazing', image:'https://www.google.com/search?q=gym+training+pictures&sxsrf=APq-WBsvCB4czKv6dZSCnL3yYkFa-f3RzQ:1650124473012&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjW9bHY-Jj3AhWIzDgGHbApAAcQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=C38c4kn5NYZq4M'},
        {id:3, name: 'Stretches And Crunches', price: 5, description: 'something feels amazing', image: 'https://www.google.com/search?q=gym+training+pictures&sxsrf=APq-WBsvCB4czKv6dZSCnL3yYkFa-f3RzQ:1650124473012&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjW9bHY-Jj3AhWIzDgGHbApAAcQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=C38c4kn5NYZq4M'}
]
    return (
        <div className='mt-4 mb-4'>
        <h1 className='text-center'>Services</h1>
          <div id='services' className="service-container text-center">
              {
                  services.map(service=><Service key={service.id}
                  service={service}></Service>)
              }
          </div>
        </div>
    );
};

export default Services;