import React from "react";

const offers = [
    {
        title: "Buy 1 Get 1 Free on Croissants 🥐",
        description: "Limited time offer! Enjoy double the deliciousness.",
        code: "BOGO50",
        bgColor: "bg-[#F5D6B4]", // Soft Beige
    },
    {
        title: "20% Off on All Cakes 🎂",
        description: "Celebrate your moments with our delicious cakes!",
        code: "CAKE20",
        bgColor: "bg-[#EBCBAE]", // Light Caramel
    },
    {
        title: "Free Delivery on Orders Above $20 🚚",
        description: "Order your favorite bakery treats and get free delivery.",
        code: "FREESHIP",
        bgColor: "bg-[#E2B887]", // Golden Beige
    },
];

const SpecialOffers = () => {
    return (
        <section className="py-16 px-4 min-h-[90vh] bg-white text-[#5C4033]">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold">🎉 Special Offers 🎉</h2>
                <p className="text-lg text-[#8D6E63] mt-2">Don't miss out on our limited-time deals!</p>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {offers.map((offer, index) => (
                        <div key={index} className={`p-6 rounded-xl shadow-lg ${offer.bgColor} transition-transform transform hover:scale-105`}>
                            <h3 className="text-2xl font-semibold text-[#5C4033]">{offer.title}</h3>
                            <p className="text-[#6D4C41] mt-2">{offer.description}</p>
                            <div className="mt-4">
                                <span className="bg-[#FF6B6B] text-white px-4 py-2 rounded-lg text-lg font-semibold">{offer.code}</span>
                            </div>
                            <button className="mt-4 px-5 py-2 bg-[#FF6B6B] text-white rounded-full shadow-md hover:bg-[#E05C5C] transition">
                                Claim Offer
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
