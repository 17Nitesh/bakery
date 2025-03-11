import React from "react";
import bakeryImage from "../assets/visit-bg.jpg"; // Replace with an actual image

const About = () => {
    return (
        <section className="py-16 min-h-[80vh] bg-[#F5E1DA] text-[#5C4033]">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img src={bakeryImage} alt="Our Bakery" className="rounded-xl shadow-lg w-full object-cover" />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold">🍞 About Our Bakery</h2>
                    <p className="mt-4 text-lg">
                        At CakeBake, we believe in baking with love. Using the finest ingredients, we craft artisanal breads,
                        pastries, and cakes that bring warmth to every home.
                    </p>
                    <p className="mt-2 text-lg">
                        From classic recipes to new innovations, our passion is to serve <b>fresh, high-quality, and delicious</b> baked goods every day!
                    </p>
                    <button className="mt-6 px-6 py-3 bg-[#FF6B6B] text-white rounded-full shadow-md hover:bg-[#E05C5C] transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
