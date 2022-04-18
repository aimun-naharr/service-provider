import React from 'react';
import './Footer.css'
const Footer = () => {
    const year=new Date()
    return (
        <div>
            <div className="row footer">
                <div className="col-md-12 w-full">
                    <p className='text-center'>All rights reserved by &copy;{year.getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;