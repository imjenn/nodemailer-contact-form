import React, { useState } from 'react';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const { firstName, lastName, email, phone, subject, message } = e.target.elements;

        let details = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value
        };

        console.log(details);

        let response = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setSubmitted(false);
        setIsLoading(true);
        let result = await response.json();
        alert(result.status);
        setIsLoading(false);
        clearForm();
    };

    const clearForm = () => {
        document.getElementById("contact-us-form").reset();
    }

    return (
        <div className="absolute flex xs:flex-col sm:flex-col md:flex-row justify-between p-0 mx-auto w-screen">
            <div className="w-1/2 flex flex-col xs:my-80 sm:mt-72 mx-auto">
                <h1 className="xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-slate-50 my-10">We'd love to hear from you</h1>
                <p className="sm:text-xl md:text-2xl lg:text-3xl text-slate-50">Fill out our form and our team will get back to you soon.</p>
            </div>
            <div style={{ backgroundColor: "#192b38", opacity: "0.9"}} className="flex flex-col sm:justify-around md:justify-between sm:w-full md:w-6/12 lg:w-5/12 p-16 h-screen backdrop-blur-xl right-0">
                <form id={"contact-us-form"} onSubmit={handleSubmit}>
                    <h2 className="xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-slate-50 mb-6">Contact Us</h2>
                    <div className="flex justify-between">
                        <label htmlFor="firstName" className="text-slate-50 self-center">First Name: </label>
                        <input
                            style={{ focus: "outline-none !important" }}
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 my-5 py-2 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="John"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="lastName" className="text-slate-50 self-center">Last Name: </label>
                        <input
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 my-5 py-2 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="email" className="text-slate-50 self-center">Email: </label>
                        <input
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 my-5 py-2 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="phone" className="text-slate-50 self-center">Phone Number: </label>
                        <input
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 my-5 py-2 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            type="tel"
                            // pattern="([0-9]{3})[0-9]{3}-[0-9]{4}"
                            name="phone"
                            id="phone"
                            placeholder="(123) 456-7890"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="subject" className="text-slate-50 self-center">Subject: </label>
                        <input
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 my-5 py-2 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Message Subject"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="message" className="text-slate-50 self-center">Message: </label>
                        <textarea
                            className="xs:w-10/12 sm:w-6/12 md:w-7/12 lg:w-9/12 h-26 my-5 py-3 bg-transparent backdrop-blur-lg border-b-2 text-slate-50 border-grey-800 focus:outline-none focus:ring-0"
                            name="message"
                            id="message"
                            placeholder="Type your message here"
                        />
                    </div>
                    <div className="flex my-5 w-full m-auto">
                        <input
                            className="form-checkbox self-center m-auto bg-transparent backdrop-blur-lg"
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                        />
                        <span className="text-slate-50 text-left xs:w-full sm:w-full md:w-9/12 lg:w-9/12 m-auto sm:ml-7">By checking this box, I agree to receiving communication emails directly to the information provided above on this form. </span>
                    </div>
                    <button
                        type="submit"
                        className="text-slate-50 my-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-teal-700 to-cyan-900 px-7 py-2 rounded-md"
                    >
                        Send Message
                    </button>
                </form>
                <div className="flex flex-col text-right text-slate-400 xs:mb-30 md:pb-10">
                    <a href="https://github.com/imjenn/nodemailer-contact-form" target="_blank">Github</a>
                    <div>
                        Image by <a className="underline" href="https://pixabay.com/users/mastershaff0-22838429/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6531237">mastershaff0</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6531237">Pixabay</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;