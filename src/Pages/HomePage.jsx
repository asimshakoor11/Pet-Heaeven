import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div
        className="relative section h-screen grid items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/heroimage1.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Pet Heaven Society</h1>
          <p className="text-xl mb-8 text-white">
            Your trusted partner in finding loving homes for pets in need.
          </p>
          <Link
            to="/AvailablePets"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            View Available Pets
          </Link>
        </div>
      </div>


      {/* Introduction Section */}
      <div className="section bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Pet Heaven Society</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Pet Heaven Society, we are dedicated to rescuing, rehabilitating, and rehoming pets in need. Our mission is to provide a safe haven for animals and connect them with loving families who will cherish them forever. Whether you're looking to adopt, volunteer, or support our cause, we welcome you to join our community.
          </p>
        </div>
      </div>


      {/* Mission and Vision Section */}
      <div className="bg-blue-50 section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                To rescue, rehabilitate, and rehome pets in need, ensuring they find loving and caring families. We strive to create a world where every pet has a safe and happy home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                A society where no pet is left behind, and every animal is treated with love, respect, and compassion. We envision a future where pet adoption is the first choice for families.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Images of Pets Section */}
      <div className="section bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/image1.jpg" 
              alt="Happy Dog"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">Buddy</p>
              <p className="text-gray-600">Friendly and playful</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/image2.jpg" 
              alt="Curious Cat"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">Whiskers</p>
              <p className="text-gray-600">Curious and cuddly</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/image3.jpg" 
              alt="Playful Puppy"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">Max</p>
              <p className="text-gray-600">Energetic and fun-loving</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/image4.jpg" 
              alt="Adorable Kitten"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">Luna</p>
              <p className="text-gray-600">Sweet and affectionate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="section bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-700 mb-8">
            Join us in our mission to give every pet a second chance at life.
          </p>
          <div className="space-x-4">
            <Link
              to="/Adopt"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Adopt a Pet
            </Link>
            <Link
              to="/Register"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Register as a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage
