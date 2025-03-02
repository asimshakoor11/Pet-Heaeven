import React, { useState } from 'react';
import { Link } from 'react-router';
import PetsData from '../Data/PetsData.json'
const AvailablePetsPage = () => {
    // Sample pet data
    const pets = PetsData

    // State for filters
    const [filters, setFilters] = useState({
        breed: '',
        size: '',
        age: '',
    });

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    // Filter pets based on selected filters
    const filteredPets = pets.filter((pet) => {
        return (
            (filters.breed === '' || pet.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
            (filters.size === '' || pet.size === filters.size) &&
            (filters.age === '' || pet.age === filters.age)
        );
    });

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}

            <div
                className="relative section h-screen grid items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/heroimage3.jpg')`, // Replace with your image URL
                }}
            >
                {/* Overlay to darken the background image */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Available Pets</h1>
                    <p className="text-xl mb-8 text-white">
                        Find your perfect companion from our list of adorable pets waiting for a loving home.
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="section bg-blue-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Filter Pets</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Breed Filter */}
                        <div>
                            <label className="block text-gray-700">Breed</label>
                            <input
                                type="text"
                                name="breed"
                                value={filters.breed}
                                onChange={handleFilterChange}
                                placeholder="Search by breed"
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        {/* Size Filter */}
                        <div>
                            <label className="block text-gray-700">Size</label>
                            <select
                                name="size"
                                value={filters.size}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded-lg"
                            >
                                <option value="">All Sizes</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>

                        {/* Age Filter */}
                        <div>
                            <label className="block text-gray-700">Age</label>
                            <select
                                name="age"
                                value={filters.age}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded-lg"
                            >
                                <option value="">All Ages</option>
                                <option value="Puppy/Kitten">Puppy/Kitten</option>
                                <option value="1 year">1 year</option>
                                <option value="2 years">2 years</option>
                                <option value="3+ years">3+ years</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pets List Section */}
            <div className="section">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPets.map((pet) => (
                        <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-full h-72 object-cover"
                                loading='lazy'
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{pet.name}</h3>
                                <p className="text-gray-700"><strong>Breed:</strong> {pet.breed}</p>
                                <p className="text-gray-700"><strong>Age:</strong> {pet.age}</p>
                                <p className="text-gray-700"><strong>Size:</strong> {pet.size}</p>
                                <p className="text-gray-700"><strong>Health:</strong> {pet.healthCondition}</p>
                                <p className="text-gray-700"><strong>Status:</strong> {pet.adoptionStatus}</p>
                                <Link
                                    to={`/Adopt`} // Link to a dedicated adoption page for the pet
                                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Adopt Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailablePetsPage
