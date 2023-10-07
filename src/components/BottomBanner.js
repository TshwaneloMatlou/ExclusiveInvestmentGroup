import React from "react";

const BottomBanner = () => {
  return (
    <header
      className="relative bg-cover bg-center h-64 font-extrabold mb-5"
      style={{
        backgroundImage: "url('/bg_3.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header content */}
      <div className="relative container mx-auto h-full flex items-center">
        <div className="text-center">
          <h1 className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 text-4xl text-white font-semibold mb-4">Welcome to Exclusive Investment Group</h1>
          <p className="text-lg text-white bg-green-400 mb-8">Explore and discover amazing content.</p>

          {/* Search bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BottomBanner;
