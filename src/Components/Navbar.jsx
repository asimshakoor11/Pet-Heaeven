import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primarycolor py-4 paddingleftright">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link to={'/'}>
                        Pet Heaven
                    </Link>
                </div>

                {/* Hamburger Menu Button (Mobile) */}
                <div className="block py-2 lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <div className="hidden lg:flex space-x-4">
                    <Link to={'/'} className="text-gray-100 hover:text-white hover:underline">Home</Link>
                    <Link to={'/AboutUs'} className="text-gray-100 hover:text-white hover:underline">About Us</Link>
                    <Link to={'/AvailablePets'} className="text-gray-100 hover:text-white hover:underline">Available Pets </Link>
                    <Link to={'/Adopt'} className="text-gray-100 hover:text-white hover:underline">Adopt </Link>
                    <Link to={'/Release'} className="text-gray-100 hover:text-white hover:underline">Release</Link>
                    <Link to={'/Register'} className="text-gray-100 hover:text-white hover:underline">Register</Link>
                    <Link to={'/Admin'} className="text-gray-100 hover:text-white hover:underline">Admin</Link>
                </div>
            </div>

            {/* Mobile Menu (Collapsible) */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'min-h-0 h-0 max-h-0'}`}
            >
                <Link to={'/'} className="block py-2 text-gray-100 hover:text-white hover:underline">Home</Link>
                <Link to={'/AboutUs'} className="block py-2 text-gray-100 hover:text-white hover:underline">About Us</Link>zz
                <Link to={'/AvailablePets'} className="block py-2 text-gray-100 hover:text-white hover:underline">Available Pets </Link>
                <Link to={'/Adopt'} className="block py-2 text-gray-100 hover:text-white hover:underline">Adopt </Link>
                <Link to={'/Release'} className="block py-2 text-gray-100 hover:text-white hover:underline">Release</Link>
                <Link to={'/Register'} className="block py-2 text-gray-100 hover:text-white hover:underline">Register</Link>
                <Link to={'/Admin'} className="text-gray-100 hover:text-white hover:underline">Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;