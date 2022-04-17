import React from 'react';
import getInShape from '../../images/getInShape.jpg'
const ShapeSec = () => {
    return (
        <div>
            <div className="row container mx-auto align-items-center mt-5">
                <div className="col-md-6">
                    <img className='rounded w-75' src={getInShape} alt="" />
                </div>
                <div className="col-md-6">
               <h2 className='font-lobster'>Get In <span className='red-color'>Shape</span></h2>
               <p>Work with a personal trainer to set challenging fitness goals and achieve them step by step. And Get In Shape Always.</p>
                </div>
               
            </div>
        </div>
    );
};

export default ShapeSec;