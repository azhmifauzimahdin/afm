import React from 'react';
import './CardProject.css';

const CardProject = ({ data }) => {
    return (
        <>
            {data.map((project, index) => (
                <div className="project__card" key={project.id} data-aos="fade-up" >
                    <figure className="project__img-block">
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} alt="Project" className="project__img" />
                            </a>
                        ) :
                            (
                                <img src={project.image} alt="Project" className="project__img" />
                            )}
                    </figure>
                    <div className="project__info">
                        <div className="project__detail">
                            <h3 className="project__title">
                                {project.title}
                                {project.skill && project.skill.map((skill, index) => (
                                    <span key={index} className="project_template">
                                        <img src={skill} alt="Laravel" className="project__template-icon" />
                                    </span>
                                ))}
                            </h3>
                        </div>
                        <div className="project__link">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__button-link">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__button-github">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            )}
                        </div>
                    </div>
                    {project.update.length > 0 && (
                        <div className="project_update">
                            <h5 className="project_update--title">Next Update</h5>
                            {project.update.map((update, index) => (
                                <div key={index} className="project_update--body" style={{ backgroundColor: update.color }}>{update.description}</div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default CardProject
