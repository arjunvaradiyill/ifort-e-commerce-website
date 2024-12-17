import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage the mobile menu visibility
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <header className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 bg-yellow-200 shadow-md w-full">
      {/* Title */}
      <div className="text-gray-800 font-bold text-3xl mb-2 md:mb-0">I FORT</div>

      {/* Hamburger Menu Icon (Visible on mobile view) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-800 text-3xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8"> {/* Increased gap value */}
        <Link
          to="/hero"
          className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/category/Mobiles"
          className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Mobiles
        </Link>
        <Link
          to="/category/All"
          className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          All Products
        </Link>
        {isLoggedIn ? (
          <button
            onClick={() => onLogin(false)}
            className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu (Dropdown, only shown when hamburger icon is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-yellow-200 shadow-lg p-4 z-50">
          <Link
            to="/hero"
            className="block text-lg text-gray-800 border-b-2 border-yellow-500 py-2 hover:bg-yellow-400 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/category/Mobiles"
            className="block text-lg text-gray-800 border-b-2 border-yellow-500 py-2 hover:bg-yellow-400 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Mobiles
          </Link>
          <Link
            to="/category/All"
            className="block text-lg text-gray-800 border-b-2 border-yellow-500 py-2 hover:bg-yellow-400 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            All Products
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogin(false);
                setIsMobileMenuOpen(false); // Close menu after logout
              }}
              className="w-full text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
                setIsMobileMenuOpen(false); // Close menu after login
              }}
              className="w-full text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
