import React, { useState } from 'react';
import './Contact.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Button, Loading } from '../../components';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required!"),
            email: Yup.string().required("Required!").email("Invalid email format"),
            subject: Yup.string().required("Required!"),
            message: Yup.string().required("Required!"),
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            try {
                setLoading(true);
                emailjs
                    .send(
                        'service_7lq8a1i',
                        'template_rfcptro',
                        values,
                        'FjAEyAgGzrjcksr41'
                    )
                    .then(() => {
                        setLoading(false);
                        Swal.fire({
                            text: "Message Sent Successfully",
                            icon: "success"
                        });
                        setSubmitting(false);
                        resetForm();
                    }, () => {
                        setLoading(false);
                        Swal.fire({
                            title: "Ooops, something went wrong",
                            icon: "error"
                        })
                        setSubmitting(false);
                    });
            }
            catch {
                Swal.fire({
                    title: "Oops, something went wrong",
                    icon: "error"
                })
                setSubmitting(false);
                setLoading(false);
            }
        }
    })

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container grid">
                <div className="contact__info" data-aos="fade-up">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">For hiring, business, or collaboration please contact me via LinkdeIn or email azhmifauzi11@gmail.com.</p>
                </div>

                <form className="contact__form" data-aos="fade-up" onSubmit={formik.handleSubmit}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className={`contact__form-input ${formik.errors.name && formik.touched.name ? "form-invalid" : ""}`}
                                placeholder="Insert your name"
                                autoComplete="off"
                                value={formik.values.name} onChange={formik.handleChange}
                            />
                            <p className="contact__form-error">{formik.errors.name}</p>
                        </div>
                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                onInput={(e) => e.target.value = ("" + e.target.value).toLowerCase()}
                                className={`contact__form-input ${formik.errors.email && formik.touched.email ? "form-invalid" : ""}`}
                                placeholder="Insert your email"
                                autoComplete="off"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p className="contact__form-error">{formik.errors.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input
                            type="text"
                            name="subject"
                            className={`contact__form-input ${formik.errors.subject && formik.touched.subject ? "form-invalid" : ""}`}
                            placeholder="Insert your subject"
                            autoComplete="off"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.subject && formik.touched.subject && (
                            <p className="contact__form-error">{formik.errors.subject}</p>
                        )}
                    </div>
                    <div className="contact__form-div">
                        <textarea
                            name="message"
                            className={`contact__form-input contact__form-area ${formik.errors.message && formik.touched.message ? "form-invalid" : ""}`}
                            placeholder="Write your message"
                            autoComplete="off"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                        ></textarea>
                        {formik.errors.message && formik.touched.message && (
                            <p className="contact__form-error">{formik.errors.message}</p>
                        )}
                    </div>
                    <Button type="submit" disabled={loading} >Send Message</Button>
                </form>
            </div>
            {loading && <Loading />}
        </section>
    )
}

export default Contact;