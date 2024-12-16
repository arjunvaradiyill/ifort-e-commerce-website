import React from 'react';
import { Link } from 'react-router-dom'; // Using Link to navigate to routes

const Header = ({ onLogin }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-yellow-200"> {/* Light yellow background */}
      <div className="text-gray-800 font-bold text-3xl">I FORT</div>
      <div className="flex flex-1 justify-center items-center space-x-4">
        {/* Home Button to navigate to Hero Section */}
        <Link
          to="/hero" // Navigate to the hero page
          className="text-xl text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Home
        </Link>

        {/* Category Buttons */}
        <Link
          to="/category/Mobiles"
          className="text-xl text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Mobiles
        </Link>
        <Link
          to="/category/All"
          className="text-xl text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          All Products
        </Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => onLogin(false)} // Handle logout
        className="text-xl text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
