import React, { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-md shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-[#8D6E63]">
                    CakeBake
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-[#5C4033] font-[Montserrat] text-lg">
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all">Home</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all">Menu</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all">Offers</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all">About</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all">Contact</li>
                </ul>

                {/* Call-to-Action Button (Desktop) */}
                <button className="bg-[#FF6B6B] text-white px-5 py-2 rounded-full shadow-md hidden md:block hover:bg-[#E05C5C] transition">
                    Order Now
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-[#5C4033] text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? "✕" : "☰"}
                </div>
            </div>

            {/* Full-Screen Dropdown Menu for Mobile */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#FFF5E4] flex flex-col items-center justify-center text-[#5C4033] font-[Montserrat] text-2xl space-y-8 transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-6">
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all" onClick={() => setOpen(false)}>Home</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all" onClick={() => setOpen(false)}>Menu</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all" onClick={() => setOpen(false)}>Offers</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all" onClick={() => setOpen(false)}>About</li>
                    <li className="hover:text-[#E05C5C] cursor-pointer transition-all" onClick={() => setOpen(false)}>Contact</li>
                </ul>
                <button className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#E05C5C] transition">
                    Order Now
                </button>
            </div>
        </nav>
    );
};

export default Nav;
