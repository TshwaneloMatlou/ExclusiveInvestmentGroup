import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/LandingPage">E.I.G</Link>
        </div>

        <div className="lg:hidden" ref={menuRef}>
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

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex space-x-4 font-extrabold">
            <li>
              <Link to="/admin/dashboard" className="text-white hover:text-blue-200">
                Admin
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
              <Link to="/KnowledgeBase" className="text-white hover:text-blue-200">
                Knowledge Base
              </Link>
            </li>
            <li>
              <Link to="/Calculators" className="text-white hover:text-blue-200">
                Calculators
              </Link>
            </li>
            <li>
              <Link to="/MoneyManagement" className="text-white hover:text-blue-200">
                Trade Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
