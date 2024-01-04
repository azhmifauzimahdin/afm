import React, { useState } from 'react';
import './Contact.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Button } from '../../components';

const Contact = () => {
    const [disabled, setDisabled] = useState(false);

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
                setDisabled(true);
                emailjs
                    .send(
                        import.meta.env.VITE_SERVICE_ID,
                        import.meta.env.VITE_TEMPLATE_ID,
                        values,
                        import.meta.env.VITE_PUBLIC_KEY
                    )
                    .then(() => {
                        Swal.fire({
                            text: "Message Sent Successfully",
                            icon: "success"
                        });
                        setSubmitting(false);
                        resetForm();
                        setDisabled(false);
                    }, (error) => {
                        Swal.fire({
                            title: "Ooops, something went wrong",
                            text: error.text,
                            icon: "error"
                        })
                        setSubmitting(false);
                        setDisabled(false);
                    });
            }
            catch {
                setSubmitting(false);
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
                                type="text"
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
                    <button type="submit" disabled={disabled} className="btn">Send Message</button>
                    {/* <Button type="submit" >Send Message</Button> */}
                </form>
            </div>
        </section>
    )
}

export default Contact;