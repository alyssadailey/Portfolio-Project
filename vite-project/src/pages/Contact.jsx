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
        <p className="contact-me-hook">Do you have an idea or project you’d like to bring to life?💡
        </p>
        <p className="contact-me-hook">
            A project you would like to colab on?🛠️
            </p>
        <p className="contact-me-hook">
            Or just want to create a fellow software-dev friend?☕❤️
            </p>

        
        <div className="contact-container">
        
            <h1>Contact Me:</h1>
            
            {/* <p className="contact-me-direct">Please fill out all fields:</p> */}
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
                <button type="submit" className="submit-btn">Send your Message</button>
            </form>
        </div>
        <Footer />
    </div>
);
};

export default Contact;