import "../css/GlobalNav.css";
import "../css/Hamburger.css";

import React from 'react';
import { useState } from "react";
import Button from "./Button";

function GlobalNav({ className, setPage, setShowModal }) {

    const [showMenu, setShwoMenu] = useState(false);

    const menuClass = showMenu ? '' : 'global-nav__list--collapsed';
    function changePage(href) {
        window.history.pushState(null, '', href);
        setPage(href);
    }

    return (
        <nav className={`global-nav ${className}`}>
            <div className="global-nav__toggle">
                {/* <div className="hamburger"
                    onClick={() => setShwoMenu(!showMenu)}>
                </div> */}
                <i
                    onClick={() => setShwoMenu(!showMenu)}
                    className={showMenu ? "gg-close" : "gg-menu"}
                />
            </div>
            {/* <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul> */}
            <div className={`global-nav__list ${menuClass}`}>
                <Button href="#/" onClick={changePage} visual="link" name="Home" />
                <Button href="#/play" onClick={changePage} visual="link" name="Play" />
                <Button href="#/food" onClick={changePage} visual="link" name="Food" />
                {/* <Button href="#/create" onClick={changePage} visual="link" name="Create Post" /> */}
                <button className="subscribe__btn" onClick={() => { console.log('Opening modal'); setShowModal(true); }}>Subscribe</button>
            </div>
        </nav>
    )
}

export default GlobalNav;