import React from 'react';
import './Portfolio.css';
import { projects } from '../../data/data';
import { CardProject } from '../../components';

const Portfolio = () => {
    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title" >Portfolio Project</h2>

            <div className="project__container grid">
                <CardProject data={projects} />
            </div>
        </section>
    )
}

export default Portfolio
