import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './stylesheets/Contact.css';

const Contact = () => {
    // state to hold the user's input values.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    // state to store validation messages for each field
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    // Updates formData whenever a user types and clears the error message for that field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };
    // Validates the input when the user leaves the field
    const handleBlur = (e) => {
        const { name, value } = e.target;
        // Check if the field is empty and set the error message accordingly
        if (!value.trim()) {
            setErrors({ ...errors, [name]: "This field is required" });
            // If the email field is not empty, validate the email format- if it is not valid, set the error message
        } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors({ ...errors, email: "Please enter a valid email address" });
        }
    };
    // handles when the user submits the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // empty object to store any validation errors we find
        let newErrors = {};
        //loop through each field in the formData state (name, email, message) to check if the value is empty or incorrect
        Object.keys(formData).forEach((field) => {
            // If the field is empty, sets this error message for that field
            if (!formData[field].trim()) {
                newErrors[field] = "This field is required";
            }
        });
        // if the email field is not empty, validate the email format- if it is not valid, set the error message
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        // If there are any errors, set the errors state and return early to prevent form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // If there are no errors, proceed with form submission
        const encodedData = new URLSearchParams({
            "form-name": "contact",
            ...formData,
        }).toString();

        // Sends the form data to the root path using the Fetch API to allow netlify to handle the form submission
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodedData,
        })
            .then(() => {
                alert(`Thank you, ${formData.name}! Your message has been sent, and I will respond shortly!`);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(error => alert(error));
    };

    return (
        <div>
            <Navbar />
            {/* 3 hook questions */}
            <div className="contact-content">
                <p className="contact-me-hook">Do you have an idea or project you’d like to bring to life?💡</p>
                <p className="contact-me-hook">A project you would like me to colab on?🛠️</p>
                <p className="contact-me-hook">Or just want to create a fellow software-dev friend?☕❤️</p>

                {/* FORM */}
                <div className="contact-container">
                    <h1>Contact Me:</h1>
                    
                    <form 
                        name="contact" 
                        method="POST" 
                        data-netlify="true" 
                        onSubmit={handleSubmit} 
                        className="contact-form"
                    >
                        <input type="hidden" name="form-name" value="contact" />

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

            {/* Hidden static form for Netlify build-time detection */}
            <form name="contact" netlify hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>

            <Footer />
        </div>
    );
};

export default Contact;