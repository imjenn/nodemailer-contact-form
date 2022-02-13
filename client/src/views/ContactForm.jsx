import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [email, setEmail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={sendEmail}>
            <h1>We'd love to hear from you</h1>
            <p>Fill out our form and our team will get back to you soon.</p>
            <div>
                <label htmlFor="">First Name: </label>
                <input 
                    type="text" 
                    name="firstName"
                    value={email.firstName}
                    required 
                />
            </div>
            <div>
                <label htmlFor="">Last Name: </label>
                <input 
                    type="text" 
                    name="lastName"
                    value={email.lastName}
                    required 
                />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input 
                    type="text" 
                    name="email"
                    value={email.email}
                    required 
                />
            </div>
            <div>
                <label htmlFor="">Message: </label>
                <textarea 
                    name="message"
                    value={email.message}
                    placeholder="Type your message here" 
                    required 
                />
            </div>
            <button>Send Message</button>
        </form>

    )
}

export default ContactForm;