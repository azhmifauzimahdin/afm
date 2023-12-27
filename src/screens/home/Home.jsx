import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import { socials } from '../../data/data';
import { ButtonLink, ScrollDown, Shapes } from '../../components';

const Home = () => {
    return (
        <section className="home container section" id="home">
            <div className="intro">
                <img src={Me} alt="Home" className="home__img" />
                <h1 className="home__name">Azhmi Fauzi Mahdin</h1>
                <span className="home_education">Web Developer</span>

                <div className="home__socials">
                    {socials.map((social) => (
                        <a href={social.link} className="home__social-link" target="_blank" key={social.id} rel="noreferrer">
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>

                <ButtonLink href="mailto:azhmifauzi11@gmail.com">Hire Me</ButtonLink>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home;
