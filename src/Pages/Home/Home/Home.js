import React from 'react';
import Contact from '../../Contact/Contact';
import Services from '../../Sevices/Services';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;