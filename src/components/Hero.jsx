import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import watchImage from '../assets/watch.png';
import headphonesImage from '../assets/headphones.png';
import laptopImage from '../assets/laptop.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image to show
  const navigate = useNavigate(); // Initialize navigate
  const [category, setCategory] = useState('Mobiles'); // State to track current category

  // List of images to cycle through
  const images = [watchImage, headphonesImage, laptopImage];

  // Set interval to change image every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cycle through images
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle Shop Now button click to navigate to the respective category
  const handleShopNowClick = () => {
    navigate(`/category/${category}`); // Navigate to the current category
  };

  return (
    <section className="relative bg-gray-50 py-24 px-8 lg:px-32 w-full">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-100 via-white to-yellow-50"></div>
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-6xl lg:text-8xl font-extrabold text-gray-800 leading-tight">
            Discover the Future with
            <br />
            <span className="text-yellow-500">I FORT</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg lg:text-xl">
            Elevate your lifestyle with cutting-edge electronics designed for modern living.
          </p>
          <div className="mt-10">
            {/* Dynamic Shop Now button */}
            <button
              onClick={handleShopNowClick} // Navigate to the current category
              className="bg-yellow-500 text-white px-10 py-4 rounded-full text-xl font-medium shadow-xl hover:bg-yellow-600 transition-all duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Product Display */}
        <div className="flex items-center gap-12">
          {/* Conditional rendering for images */}
          <img
            src={images[currentImage]}
            alt={
              currentImage === 0
                ? 'Watch'
                : currentImage === 1
                ? 'Headphones'
                : 'Laptop'
            }
            className="w-80 lg:w-96 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
