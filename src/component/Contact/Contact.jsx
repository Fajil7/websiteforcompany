
import React from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/close-up-contact-us-word_352439-2440.jpg?w=900"
                    alt="about"
                    className="contact-img"
                />
            </div>
            <div className="contact-main-container">
                <h1 className="contact-heading">Contact</h1>
                <div className="contact-container">
                    <p className="contact-way flex items-center"><FaPhoneAlt className='icon-footer'/> +91-85 82 84 84 34</p>
                    <p className="contact-way flex items-center"><IoMdMail className='icon-footer'/> sskjha2016@gmail.com</p>
                    <p className="contact-way flex items-center"><FaLocationDot className='icon-footer'/> Kolkata 700001</p>
                </div>
            </div>
            <div className="img-and-form-container">
                <div className="img-container">
                    <img
                        src="https://img.freepik.com/premium-vector/flat-design-customer-support-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-823.jpg?w=740"
                        alt="about"
                        className="cont-img"
                    />
                </div>
                <form>
                    <div className="two-input-container">
                        <div className="input-container">
                            <label className="label required">Name*</label>
                            <br />
                            <input type="text" className="input" name="name" required />
                        </div>
                        <div className="input-container">
                            <label className="label required">Phone*</label>
                            <br />
                            <input type="text" className="input" name="name" required />
                        </div>
                    </div>
                    <div className="two-input-container">
                        <div className="input-container">
                            <label className="label">Email</label>
                            <br />
                            <input type="text" className="input" name="name" />
                        </div>
                        <div className="input-container">
                            <label className="label required">Subject*</label>
                            <br />
                            <input type="text" className="input" name="name" required />
                        </div>
                    </div>
                    <div className="align">
                        <div className="input-two">
                            <label className="label ">Message</label>
                            <br />
                            <textarea className="textarea" rows="4" cols="50" placeholder="Max 350 characters"></textarea>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
