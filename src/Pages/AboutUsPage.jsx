import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}

      <div
        className="relative section h-screen grid items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/heroimage2.jpg')`, // Replace with your image URL
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-xl mb-8 text-white">
          Learn more about Pet Heaven Society, our mission, and the team behind our work.
          </p>
        </div>
      </div>

      {/* Information About the Charity */}
      <div className="section">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Charity</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Pet Heaven Society is a non-profit organization dedicated to rescuing, rehabilitating, and rehoming pets in need. Founded in 2010, we have helped thousands of animals find loving homes and provided them with the care they deserve. Our team of passionate volunteers and staff work tirelessly to ensure every pet gets a second chance at life.
          </p>
        </div>
      </div>

      {/* History, Values, and Team Section */}
      <div className="bg-blue-50 section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* History */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our History</h3>
              <p className="text-gray-700">
                Founded in 2010, Pet Heaven Society started as a small shelter with just a handful of volunteers. Over the years, we have grown into a leading animal welfare organization, rescuing and rehoming thousands of pets.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Values</h3>
              <p className="text-gray-700">
                We are guided by compassion, integrity, and a commitment to animal welfare. Every decision we make is driven by our mission to provide a safe and loving environment for pets in need.
              </p>
            </div>

            {/* Team */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Team</h3>
              <p className="text-gray-700">
                Our team consists of dedicated veterinarians, caregivers, and volunteers who share a common goal: to make a difference in the lives of animals. Meet the people behind our mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details and Location Section */}
      <div className="section">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            We'd love to hear from you! Reach out to us for any inquiries, volunteer opportunities, or support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Contact Details</h3>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@petheavensociety.org
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Pet Street, City, Country
            </p>
          </div>

          {/* Location Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Location</h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Pet Heaven Society Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d44e7c653f3b!2sMelbourne%20Zoo!5e0!3m2!1sen!2sus!4v1622549404251!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage
