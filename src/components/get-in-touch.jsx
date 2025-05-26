import React, { useState, useEffect } from "react";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        inquiry_type: "",
        website: "",
        social_media: "",
        message: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    return (
        <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary">
            <div className="text-[3.5rem] w-full flex justify-center text-center mt-7">
                <div className="w-4/5 text-center">
                    <div className="font-bold">Get in Touch</div>
                    <p className="text-base font-medium">
                        Is it feedback, question, partnership? We are all ears!
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="font-bold mt-16 text-6xl text-center">
                    Have Questions
                </div>
                <div className="font-bold mt-4 text-6xl text-center">Contact Us!</div>
                <p className="text-base font-medium w-3/5 text-center my-4">
                    If you didn't find what you are looking for, reach out to us and we will get back to you as soon as possible.
                </p>
                <form
                    action="https://formsubmit.co/bitnboard@gmail.com"
                    method="POST"
                    className="p-6 w-full max-w-lg"
                >
                    {/* Honeypot */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    {/* Disable Captcha */}
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Custom Success Page */}
                    <input type="hidden" name="_next" value="https://bitnboard.com/thank-you" />
                    
                    {/* Custom Subject */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />

                    <input
                        type="text"
                        name="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />

                    <select
                        name="inquiry_type"
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Event Sponsorship">Event Sponsorship</option>
                        <option value="Community Collaboration">Community Collaboration</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>

                    <textarea
                        name="message"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white min-h-[120px] resize-y"
                        required
                    />

                    <input
                        type="url"
                        name="website"
                        value={formData.websiteLink}
                        onChange={handleChange}
                        placeholder="Enter website link"
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />

                    <input
                        type="url"
                        name="social_media"
                        value={formData.socialMediaLinks}
                        onChange={handleChange}
                        placeholder="Enter social media links"
                        className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 text-white font-bold"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
