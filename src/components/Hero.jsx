const Hero = () => {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center text-white"
        >
            {/* Background div with the image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/abcd.jpg')",
                }}
            ></div>

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content on top of everything */}
            <div className="relative z-10 max-w-2xl px-6">
                <h1 className="text-5xl md:text-6xl font-bold font-[Montserrat]">
                    Freshly Baked, Lovingly Made
                </h1>
                <p className="mt-4 text-lg md:text-xl font-light">
                    Taste the magic in every bite – homemade, just for you!
                </p>
                <button className="mt-6 px-6 py-3 bg-[#FF6B6B] text-white text-lg rounded-full shadow-lg hover:bg-[#E05C5C] transition">
                    Order Now
                </button>
            </div>
        </section>
    );
};

export default Hero;