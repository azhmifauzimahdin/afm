import React from 'react';
import './About.css';
import Me from '../../assets/avatar-2.svg';
import CV from '../../assets/file/CV.pdf';
import { ButtonLink } from '../../components';

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="About" className="about__img" data-aos="fade-up" />

                <div className="about__data grid" data-aos="fade-up">
                    <div className="about__info">
                        <h2 className="about__greeting">Hello!</h2>
                        <p className="about__description">
                            A creative web developer who started focusing on learning programming in 2019 when he started college. Skilled and experienced in designing, developing and testing websites using the latest technology. Has used Javascript, PHP, and HTML programming languages professionally. Want to take on more challenges on how to optimize user experience.
                        </p>
                    </div>

                    <div className="about__biodata grid">
                        <div className="biodata">
                            <h3 className="biodata__title">Name</h3>
                            <p className="biodata__data">Azhmi Fauzi Mahdin</p>
                        </div>
                        <div className="biodata">
                            <h3 className="biodata__title">Email</h3>
                            <p className="biodata__data">azhmifauzi11@gmail.com</p>
                        </div>
                        <div className="biodata">
                            <h3 className="biodata__title">Address</h3>
                            <p className="biodata__data">Kebumen, Indonesia</p>
                        </div>
                        <div className="biodata">
                            <h3 className="biodata__title">Phone</h3>
                            <p className="biodata__data">+62 857-9983-7793</p>
                        </div>
                    </div>
                    <div className="about__CV">
                        <ButtonLink href={CV} target="__blank" rel="noreferrer" download="CV-Azhmi-Fauzi-Mahdin" >Download CV</ButtonLink>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
