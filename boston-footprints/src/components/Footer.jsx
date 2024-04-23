import "../css/Footer.css";

import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer__menu">
                <ul className="footer__menu__list">
                    <li className="footer__menu__item"><a href="https://xiaoyangjin.com/">About Us</a></li>
                    <li className="footer__menu__item"><a href="https://www.linkedin.com/in/xiaoyangjin4/">Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;