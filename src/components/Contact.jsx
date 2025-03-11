import React from "react";

const Contact = () => {
    return (
        <section className="py-16 min-h-[80vh] bg-white text-[#5C4033]">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6">

                {/* Contact Information */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold">📍 Visit Our Bakery</h2>
                    <p className="mt-4 text-lg">We’d love to see you at our store! Reach out for orders or inquiries.</p>

                    <div className="mt-6 space-y-4 text-lg">
                        <p><strong>📍 Address:</strong> 123 Bakery Lane, Sweet City, CA 90210</p>
                        <p><strong>📞 Phone:</strong> +1 234 567 890</p>
                        <p><strong>✉️ Email:</strong> contact@cakebake.com</p>
                        <p><strong>🕒 Business Hours:</strong> Mon-Sun: 7:00 AM - 9:00 PM</p>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="lg:w-1/2">
                    <iframe
                        title="Google Maps Location"
                        className="w-full h-64 rounded-xl shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95565131531857!3d-37.81731397975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5a7a7%3A0x1f3e0e0b8b22a6dd!2sBakery!5e0!3m2!1sen!2sus!4v1631122334000!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto mt-12 px-6">
                <h3 className="text-3xl font-bold text-center">📩 Get in Touch</h3>
                <p className="text-lg text-center text-[#8D6E63]">Have questions? Send us a message!</p>

                <form className="max-w-lg mx-auto mt-6 bg-[#F5D6B4] p-6 rounded-xl shadow-lg">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-[#FFF5E1] text-[#5C4033] placeholder-[#8D6E63] mb-4"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-[#FFF5E1] text-[#5C4033] placeholder-[#8D6E63] mb-4"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg bg-[#FFF5E1] text-[#5C4033] placeholder-[#8D6E63] mb-4"
                    ></textarea>
                    <button type="submit" className="w-full bg-[#FF6B6B] text-white p-3 rounded-lg hover:bg-[#E05C5C] transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
