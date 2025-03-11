import React from "react";

const Card = ({ img, name, price, rating, reviews }) => {
    return (
        <div className="bg-[#FFF5E4] rounded-2xl shadow-lg p-5 transition-transform transform hover:scale-105">
            {/* Image */}
            <img src={img} alt={name} className="w-full h-40 object-cover rounded-xl" />

            {/* Content */}
            <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-[#5C4033]">{name}</h3>
                <p className="text-lg text-[#8D6E63]">{price}</p>

                {/* Rating */}
                <div className="flex justify-center items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={index < rating ? "text-[#FF6B6B]" : "text-gray-300"}>
                            ★
                        </span>
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">({reviews} reviews)</span>
                </div>

                {/* Order Button */}
                <button className="mt-4 px-5 py-2 bg-[#FF6B6B] text-white rounded-full shadow-md hover:bg-[#E05C5C] transition">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Card;
