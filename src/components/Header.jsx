import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogin }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-yellow-200 shadow-md">
      <div className="text-gray-800 font-bold text-3xl">I FORT</div>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Link
          to="/hero"
          className="text-lg text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/category/Mobiles"
          className="text-lg text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Mobiles
        </Link>
        <Link
          to="/category/All"
          className="text-lg text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          All Products
        </Link>
      </div>

      <button
        onClick={() => onLogin(false)}
        className="text-lg text-gray-800 border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
