import React from 'react';

import '../css/Home.css';

import logoImage from '../images/BostonLogo.jpg';

const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__img'>
                <img src={logoImage}
                    className='home__intro'
                    alt='Boston Skyline Overview logo' />
            </div>
            <p id="main" className='home__content'>
                Welcome to Boston Footprints, your ultimate guide to exploring the vibrant city of Boston and its surroundings!<br /><br />
                Whether you're looking to discover hidden gems, dine at the finest restaurants, or find exciting places to have fun, our website has everything you need. <br /><br />
                Boston Footprints is the perfect resource to help you plan your visit and experience the best that Boston has to offer. <br /><br />
                Dive into our rich content and start your adventure in one of America's most historic cities today!
            </p>
        </div>
    )
}

export default Home