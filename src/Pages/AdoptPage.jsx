import React, { useState } from 'react';
import PetsData from '../Data/PetsData.json';

const Adopt = () => {
    const pets = PetsData;

    // State for form fields
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        petName: '',
        reasonForAdoption: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new adoption request object
        const newRequest = {
            id: new Date().getTime(), // Unique ID based on timestamp
            ...formData,
            submissionDate: new Date().toLocaleString(), // Add submission date
        };

        // Get existing adoption requests from localStorage
        const existingRequests = JSON.parse(localStorage.getItem('adoptionRequests')) || [];

        // Add the new request to the array
        const updatedRequests = [...existingRequests, newRequest];

        // Save the updated array back to localStorage
        localStorage.setItem('adoptionRequests', JSON.stringify(updatedRequests));

        // Show success message
        alert('Thank you! Your adoption request has been submitted.');

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            petName: '',
            reasonForAdoption: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative section h-screen grid items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/heroimage4.jpg')`, // Replace with your image URL
                }}
            >
                {/* Overlay to darken the background image */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Adopt a Pet</h1>
                    <p className="text-xl mb-8 text-white">
                        Fill out the form below to request adoption of your new furry friend.
                    </p>
                </div>
            </div>

            {/* Adoption Form Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Adoption Request Form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Pet Selection Dropdown */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Select a Pet</label>
                            <select
                                name="petName"
                                value={formData.petName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                <option value="">Select a pet</option>
                                {pets.map((pet) => (
                                    <option key={pet.id} value={pet.name}>
                                        {pet.name} - {pet.breed}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Reason for Adoption */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Reason for Adoption</label>
                            <textarea
                                name="reasonForAdoption"
                                value={formData.reasonForAdoption}
                                onChange={handleInputChange}
                                placeholder="Why do you want to adopt a pet?"
                                className="w-full p-2 border rounded-lg"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Adopt;