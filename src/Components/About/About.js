import React from 'react';
import self from '../../images/self.jpg'
const About = () => {
    return (
        <div>
            <div className="row container mx-auto align-items-center mt-5">
                <div className="col-md-6">
                    <img className='w-75 rounded' src={self} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>Hello,</h4>
                    <p>This is Aimun Nahar. I'm doing honours under a national university. My major is management. In the pandemic, I somehow get myself attracted to learn how a website can be designed or developed. I tried many sources but nothing really worked. After getting admitted in programming hero, I felt some drastic change in myself. I'm gradually getting passionate about developing, practising all the task daily and the urge of learning something is getting stronger. Now my goal is to get an internship or a job as a front end developer to explore more.</p>
                </div>
            </div>
        </div>
    );
};

export default About;