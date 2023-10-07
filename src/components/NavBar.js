import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use Link to navigate to the Home page */}
        <div className="text-white font-bold text-xl">
          <Link to="/Home">E.I.G</Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none focus:bg-blue-600"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex space-x-4 font-extrabold">
            {/* Use Link to navigate to different pages */}
            <li>
              <Link to="/Home" className="text-white hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-white hover:text-blue-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-white hover:text-blue-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Services" className="text-white hover:text-blue-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/KnowledgeBase" className="text-white hover:text-blue-200">
                Knowledge_Base
              </Link>
            </li>
            <li>
              <Link to="/Calculators" className="text-white hover:text-blue-200">
                Calculators
              </Link>
            </li>
            <li>
              <Link to="/MoneyManagement" className="text-white hover:text-blue-200">
              Money_Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
