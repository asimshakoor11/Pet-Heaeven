import React, { useState } from 'react';

const ReleasePage = () => {
    const [formData, setFormData] = useState({
        petName: '',
        petBreed: '',
        petAge: '',
        petSize: '',
        reasonForRelease: '',
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRequest = {
            id: new Date().getTime(), 
            ...formData,
            submissionDate: new Date().toLocaleString(),
        };

        const existingRequests = JSON.parse(localStorage.getItem('releaseRequests')) || [];

        const updatedRequests = [...existingRequests, newRequest];

        localStorage.setItem('releaseRequests', JSON.stringify(updatedRequests));

        alert('Thank you! Your pet release request has been submitted.');

        setFormData({
            petName: '',
            petBreed: '',
            petAge: '',
            petSize: '',
            reasonForRelease: '',
            ownerName: '',
            ownerEmail: '',
            ownerPhone: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div
                className="relative section h-screen grid items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/heroimage5.jpg')`, 
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Release a Pet</h1>
                    <p className="text-xl mb-8 text-white">
                        Fill out the form below to request the release of your pet to our society.
                    </p>
                </div>
            </div>

            {/* Release Form Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Pet Release Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Pet Name</label>
                            <input
                                type="text"
                                name="petName"
                                value={formData.petName}
                                onChange={handleInputChange}
                                placeholder="Enter your pet's name"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Pet Breed</label>
                            <input
                                type="text"
                                name="petBreed"
                                value={formData.petBreed}
                                onChange={handleInputChange}
                                placeholder="Enter your pet's breed"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Pet Age</label>
                            <input
                                type="text"
                                name="petAge"
                                value={formData.petAge}
                                onChange={handleInputChange}
                                placeholder="Enter your pet's age"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Pet Size</label>
                            <select
                                name="petSize"
                                value={formData.petSize}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                <option value="">Select pet size</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Reason for Release</label>
                            <textarea
                                name="reasonForRelease"
                                value={formData.reasonForRelease}
                                onChange={handleInputChange}
                                placeholder="Why are you releasing your pet?"
                                className="w-full p-2 border rounded-lg"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Your Email</label>
                            <input
                                type="email"
                                name="ownerEmail"
                                value={formData.ownerEmail}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Your Phone</label>
                            <input
                                type="tel"
                                name="ownerPhone"
                                value={formData.ownerPhone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

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

export default ReleasePage;