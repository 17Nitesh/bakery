import React from "react";
import { BestSeller } from "../data/BestSeller";
import Card from "./Card";

const BestSellerSection = () => {
    return (
        <section className="py-12 px-8 lg:px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#5C4033]">Best Sellers</h2>
                <p className="text-lg text-gray-600 mt-2">Try our most loved bakery items!</p>

                {/* Grid for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                    {Object.values(BestSeller).map((item, index) => (
                        <Card
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            rating={Math.round(item.rating)}
                            reviews={item.reviews}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellerSection;
