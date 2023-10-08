import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-extrabold mb-4">
            Welcome to Your Investment Journey
          </h1>
          <p className="text-lg text-green-300 mb-8 underline">
            We help you achieve your financial goals.
          </p>
          <button className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            We are a trusted investment company with a mission to provide
            financial growth for our clients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Investment Planning</h3>
              <p className="text-gray-600">
                We provide expert investment planning services tailored to your
                financial goals.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Portfolio Management</h3>
              <p className="text-gray-600">
                Our team manages your investment portfolio to maximize returns.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Risk Analysis</h3>
              <p className="text-gray-600">
                We assess risks and provide strategies to mitigate them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Have questions or ready to start your investment journey? Contact us
            today.
          </p>
          <button className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;