import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-primarycolor text-white section">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Details */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-100">Email: info@example.com</p>
                    <p className="text-gray-100">Phone: +1 (123) 456-7890</p>
                    <p className="text-gray-100">Address: 123 Pet Street, City, Country</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="text-gray-100">
                        <li> <Link to={'/'} className="text-gray-100 hover:text-white hover:underline">Home</Link></li>
                        <li> <Link to={'/AvailablePets'} className="text-gray-100 hover:text-white hover:underline">Available Pets </Link></li>
                        <li> <Link to={'/Adopt'} className="text-gray-100 hover:text-white hover:underline">Adopt </Link></li>
                        <li> <Link to={'/Release'} className="text-gray-100 hover:text-white hover:underline">Release</Link></li>
                        <li> <Link to={'/Register'} className="text-gray-100 hover:text-white hover:underline">Register</Link></li>
                        <li> <Link to={'/AboutUs'} className="text-gray-100 hover:text-white hover:underline">About Us</Link></li>
                        <li> <Link to={'/Admin'} className="text-gray-100 hover:text-white hover:underline">Admin</Link></li>
                    </ul>
                </div>

                 {/* Social Media Links */}
                 <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 hover:text-white transition duration-300"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 hover:text-white transition duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 hover:text-white transition duration-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 hover:text-white transition duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                
            </div>

            {/* Copyright Information */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-100">
                    &copy; {new Date().getFullYear()} MyPetAdoption. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;