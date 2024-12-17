import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productVideo1 from '../assets/product-video1.mp4';
import productVideo2 from '../assets/product-video2.mp4';
import productVideo3 from '../assets/product-video3.mp4';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [videoIndex, setVideoIndex] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      onLogin();
      setLoggedIn(true);
      navigate('/hero');
    } else {
      alert('Please enter both username and password!');
    }
  };

  const products = [
    { video: productVideo1, name: 'Smart Watch', price: '$199.99' },
    { video: productVideo2, name: 'Mobile Phones', price: '$149.99' },
    { video: productVideo3, name: 'Laptops', price: '$249.99' },
  ];

  const handleNext = () => {
    setVideoIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setVideoIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10 w-full">
        <h1 className="text-5xl font-extrabold text-gray-800">I FORT</h1>
        <p className="text-xl text-gray-500 mt-2">"Discover the future with I FORT"</p>
      </div>

      {/* Conditional Rendering */}
      {loggedIn ? (
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold text-green-600">Merry Christmas!</h2>
          <p className="text-lg text-gray-600 mt-2">Enjoy our exclusive Christmas offers!</p>
          <button
            onClick={() => navigate('/hero')}
            className="mt-6 py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition-all"
          >
            Explore Offers
          </button>
        </div>
      ) : (
        <section className="flex flex-col lg:flex-row w-full max-w-screen-lg bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Product Video Section */}
          <div className="lg:w-1/2 bg-gray-100 p-6 flex flex-col items-center relative">
            <video
              src={products[videoIndex].video}
              controls
              autoPlay
              muted
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-gray-700">{products[videoIndex].name}</p>
              <p className="text-sm text-gray-500">{products[videoIndex].price}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={handlePrev}
                className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-3 shadow-md"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-3 shadow-md"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
            <div className="w-full space-y-4">
              <input
                type="text"
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
