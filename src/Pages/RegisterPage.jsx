import React, { useState } from 'react';

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        membershipType: '',
    });

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

        const newRegistration = {
            id: new Date().getTime(),
            ...formData,
            submissionDate: new Date().toLocaleString(), 
        };

        const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

        const updatedRegistrations = [...existingRegistrations, newRegistration];

        localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));

        alert('Thank you! Your registration has been submitted.');

        setFormData({
            fullName: '',
            email: '',
            phone: '',
            membershipType: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <div
                className="relative section h-screen grid items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/heroimage6.jpg')`, // Replace with your image URL
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Member Registration</h1>
                    <p className="text-xl mb-8 text-white">
                        Join us as a member or supporter to help make a difference in the lives of pets.
                    </p>
                </div>
            </div>

            {/* Registration Form Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
                    <form onSubmit={handleSubmit}>
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

                        <div className="mb-4">
                            <label className="block text-gray-700">Membership Type</label>
                            <select
                                name="membershipType"
                                value={formData.membershipType}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                <option value="">Select membership type</option>
                                <option value="Member">Member</option>
                                <option value="Supporter">Supporter</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Submit Registration
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;