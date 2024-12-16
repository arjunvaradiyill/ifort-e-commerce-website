import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-6"> {/* Reduced the gap */}
          {/* Left Section: Links */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-yellow-500 transition-colors duration-300">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Center Section: Social Media Icons */}
          <div className="flex-1 text-center">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {/* Social media links */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex-1 min-w-[250px] text-right">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:contact@ifort.com" className="hover:text-yellow-500 transition-colors duration-300">contact@ifort.com</a></li>
              <li>Phone: <span className="hover:text-yellow-500">+1 234 567 890</span></li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-yellow-700">
          <p>&copy; {new Date().getFullYear()} I FORT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
