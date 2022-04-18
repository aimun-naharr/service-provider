import React from 'react';
import ShapeSec from '../../Home/ShapeSec/ShapeSec';
import Banner from '../Banner/Banner';
import Footer from './footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            
            <ShapeSec></ShapeSec>
            <hr/>
            <Footer></Footer>
        </div>
    );
};

export default Home;