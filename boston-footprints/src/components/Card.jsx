import "../css/Card.css";

import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img_source} alt={props.alt_content} />
            <h3 className="card_title">{props.title}</h3>
            <p className="card__text">{props.desc}</p>
            <a className="card__link" href={props.link}>Read More</a>
        </div>
    )
}

export default Card