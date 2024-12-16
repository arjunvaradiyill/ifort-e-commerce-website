import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogin }) => {
  return (
    <header className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 bg-yellow-200 shadow-md w-full">
      {/* Title */}
      <div className="text-gray-800 font-bold text-3xl mb-2 md:mb-0">I FORT</div>

      {/* Navigation Links and Logout Button */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 w-full md:w-auto">
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
        <button
          onClick={() => onLogin(false)}
          className="text-lg text-gray-800 border-2 border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
