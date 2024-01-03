import React from 'react';
import './SkillItem.css';

const SkillItem = ({ data }) => {
    return (
        <div className="skill__container">
            {data.map((skill) => (
                <a href={skill.url} target="_blank" className="skill__item" key={skill.id} data-aos="fade-up" rel="noreferrer">
                    <img src={skill.image} alt="Skill" className="skill__img" />
                </a>
            ))}
        </div>
    )
}

export default SkillItem
