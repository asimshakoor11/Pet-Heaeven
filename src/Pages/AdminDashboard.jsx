import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    // State for adoption requests
    const [adoptionRequests, setAdoptionRequests] = useState([]);

    // State for release requests
    const [releaseRequests, setReleaseRequests] = useState([]);

    // State for pet listings
    const [pets, setPets] = useState([]);

    // State for members
    const [members, setMembers] = useState([]);

    // Fetch data from localStorage on component mount
    useEffect(() => {
        // Fetch adoption requests
        const storedAdoptionRequests = JSON.parse(localStorage.getItem('adoptionRequests')) || [];
        setAdoptionRequests(storedAdoptionRequests);

        // Fetch release requests
        const storedReleaseRequests = JSON.parse(localStorage.getItem('releaseRequests')) || [];
        setReleaseRequests(storedReleaseRequests);

        // Fetch pet listings
        const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
        setPets(storedPets);

        // Fetch members
        const storedMembers = JSON.parse(localStorage.getItem('registrations')) || [];
        setMembers(storedMembers);
    }, []);

    // Handle adoption request approval/rejection
    const handleAdoptionRequest = (id, action) => {
        const updatedRequests = adoptionRequests.map((request) =>
            request.id === id ? { ...request, status: action } : request
        );
        setAdoptionRequests(updatedRequests);
        localStorage.setItem('adoptionRequests', JSON.stringify(updatedRequests));
    };

    // Handle release request approval/rejection
    const handleReleaseRequest = (id, action) => {
        const updatedRequests = releaseRequests.map((request) =>
            request.id === id ? { ...request, status: action } : request
        );
        setReleaseRequests(updatedRequests);
        localStorage.setItem('releaseRequests', JSON.stringify(updatedRequests));
    };

    // Handle deleting a pet
    const handleDeletePet = (id) => {
        const updatedPets = pets.filter((pet) => pet.id !== id);
        setPets(updatedPets);
        localStorage.setItem('pets', JSON.stringify(updatedPets));
    };

    // Handle deleting a member
    const handleDeleteMember = (id) => {
        const updatedMembers = members.filter((member) => member.id !== id);
        setMembers(updatedMembers);
        localStorage.setItem('registrations', JSON.stringify(updatedMembers));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

            {/* Adoption Requests Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Adoption Requests</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {adoptionRequests.map((request) => (
                        <div key={request.id} className="mb-4 p-4 border rounded-lg">
                            <p><strong>Name:</strong> {request.fullName}</p>
                            <p><strong>Pet:</strong> {request.petName}</p>
                            <p><strong>Status:</strong> {request.status}</p>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleAdoptionRequest(request.id, 'Approved')}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleAdoptionRequest(request.id, 'Rejected')}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Release Requests Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Release Requests</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {releaseRequests.map((request) => (
                        <div key={request.id} className="mb-4 p-4 border rounded-lg">
                            <p><strong>Owner:</strong> {request.ownerName}</p>
                            <p><strong>Pet:</strong> {request.petName}</p>
                            <p><strong>Status:</strong> {request.status}</p>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleReleaseRequest(request.id, 'Approved')}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleReleaseRequest(request.id, 'Rejected')}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Members Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Members</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {members.map((member) => (
                        <div key={member.id} className="mb-4 p-4 border rounded-lg">
                            <p><strong>Name:</strong> {member.fullName}</p>
                            <p><strong>Email:</strong> {member.email}</p>
                            <p><strong>Membership Type:</strong> {member.membershipType}</p>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleDeleteMember(member.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;