import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './stylesheets/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
};


const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
};

return (
    <div>
        <Header />
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Feel free to reach out by filling out the form below!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                {/* handles displaying the contact form */}
                <div className="input-group">
                    <label>Name</label>
                    <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                 </div>
                <div className="input-group">
                <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                </div>
                <div className="input-group">
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows="5"
                            required 
                        ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
        <Footer />
    </div>
);
};

export default Contact;