import "../css/Header.css";

import logoImage from '../images/BostonLogo.jpg';

import React from 'react'
import GlobalNav from './GlobalNav';

function Header({ setPage, setShowModal }) {
    const skipToContent = (event) => {
        event.preventDefault();

        const element = document.getElementById('main');
        if (element) {
            element.tabIndex = -1;
            element.focus();
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className='header'>
            <a href="#main" className="skip-link" onClick={skipToContent}>Skip to Content</a>
            <div className='header__img'>
                <img src={logoImage}
                    className='header__logo'
                    alt='Boston Skyline Overview logo' />
            </div>

            <h1 className='header__title'>
                Welcome to Boston!
            </h1>
            <GlobalNav className='header__nav' setPage={setPage} setShowModal={setShowModal} />
        </header>
    )
}

export default Header;