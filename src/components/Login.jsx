import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productVideo1 from '../assets/product-video1.mp4'; // Replace with your product video
import productVideo2 from '../assets/product-video2.mp4'; // Replace with your product video
import productVideo3 from '../assets/product-video3.mp4'; // Replace with your product video

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [videoIndex, setVideoIndex] = useState(0); // Track current video index
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation (can be replaced with actual authentication logic)
    if (username && password) {
      onLogin(); // Update the login state
      navigate('/hero'); // Redirect to the Hero page
    } else {
      alert('Please enter both username and password!');
    }
  };

  // Product array with video, name, and price
  const products = [
    { video: productVideo1, name: "Smart Watch", price: "$199.99" },
    { video: productVideo2, name: "Wireless Headphones", price: "$149.99" },
    { video: productVideo3, name: "Bluetooth Speaker", price: "$249.99" },
  ];

  // Function to change the video index (next video)
  const handleNext = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % products.length); // Go to next video, loop back to the first
  };

  // Function to change the video index (previous video)
  const handlePrev = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length); // Go to previous video, loop to last
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-20">
      {/* First Section: I FORT and Caption */}
      <div className="text-center mb-10 w-full">
        <h1 className="text-5xl font-extrabold text-gray-800">I FORT</h1>
        <p className="text-xl text-gray-500 mt-4">"Discover the future with I FORT"</p>
      </div>

      {/* Second Section: Product on Left, Login Form on Right */}
      <section className="flex flex-col lg:flex-row w-full max-w-screen-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Product Display with Video */}
        <div className="lg:w-1/2 p-8 bg-gray-100 flex flex-col justify-center items-center">
          {/* Display video based on selected index */}
          <div className="relative w-full h-64 mb-6">
            <div className="w-full h-full bg-cover bg-center rounded-lg cursor-pointer">
              <video
                src={products[videoIndex].video}
                controls
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                unmuted
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-lg text-gray-600">{products[videoIndex].name}</p>
              <p className="text-sm text-gray-500">{products[videoIndex].price}</p>
            </div>
          </div>

          {/* Left and Right Scroll Buttons */}
          <div className="flex justify-between w-full">
            {/* Left button */}
            <button
              onClick={handlePrev}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-3 flex items-center justify-center transition duration-300"
            >
              <span className="text-2xl">&lt;</span> {/* Left Arrow Icon */}
            </button>
            {/* Right button */}
            <button
              onClick={handleNext}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-3 flex items-center justify-center transition duration-300"
            >
              <span className="text-2xl">&gt;</span> {/* Right Arrow Icon */}
            </button>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <div className="w-full space-y-4">
            {/* Username Input */}
            <div>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
