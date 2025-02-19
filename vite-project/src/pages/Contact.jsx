import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './stylesheets/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handles input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        setErrors({ ...errors, [name]: "" });
        };
    
    const handleBlur = (e) => {
        const { name, value } = e.target

        if(!value.trim()) {
            setErrors({ ...errors, [name]: "This field is required"});
        } 
        else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors({ ...errors, email: "Please enter a valid email address" });
        }
    };



const handleSubmit = (e) => {
    e.preventDefault();

    // checks if all fields are filled out
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
        if (!formData[field].trim()) {
            newErrors[field] = "This field is required";
        }
    });

    // checks if email is valid
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent, and I will respond shortly!`);
    setFormData({ name: "", email: "", message: "" });
};

return (
    <div>
        <Navbar />
        <div className="contact-content">
        <p className="contact-me-hook">Do you have an idea or project you’d like to bring to life?💡
        </p>
        <p className="contact-me-hook">
            A project you would like me to colab on?🛠️
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
                            onBlur={handleBlur}
                            required 
                        />
                    {errors.name && <span className="error">{errors.name}</span>}
                 </div>

                <div className="input-group">
                <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            required 
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="input-group">
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            rows="5"
                            required 
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-btn">Send your Message</button>
            </form>
        </div>
        </div>
        <Footer />
    </div>
);
};

export default Contact;