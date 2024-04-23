import React from 'react';
import '../css/Button.css'

function Button({ type = 'button', visual = 'button', href, onClick, name }) {

    function handleClick(e) {
        e.preventDefault();
        if (href && onClick) {
            onClick(href);
        }
    }
    return (
        <>
            <button className={`${visual}`}
                type={type}
                onClick={handleClick}>
                {name}
            </button>
        </>
    )
}

export default Button;