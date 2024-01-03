import React from 'react';
import './Resume.css';
import { certificates, educations, experiences } from '../../data/data';
import { CardResume } from '../../components';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title" >Experience</h2>

            <div className="resume__container grid">
                <CardResume data={educations} icon="icon-graduation" />
                <CardResume data={experiences} icon="icon-briefcase" />
            </div>

            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{ enabled: true }}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="certificate__container"
                data-aos="fade-up"
            >
                {certificates.map((certificate) => (
                    <SwiperSlide className="certificate__item" key={certificate.id}>
                        <a href={certificate.link} className="certificate__link" target="_blank" rel="noreferrer">
                            <img src={certificate.image} alt={certificate.title} className="certificate__img" />
                        </a>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default Resume
