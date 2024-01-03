import React from 'react';
import './CardResume.css';

const CardResume = ({ data, icon }) => {
    return (
        <div className="timeline" data-aos="fade-up">
            {data.map((data) => (
                <div className="timeline__item" key={data.id}>
                    <i className={icon}></i>
                    <span className="timeline__date">{data.year}</span>
                    <h3 className="timeline__title">{data.title}</h3>
                    <p className="timeline__text">{data.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default CardResume
