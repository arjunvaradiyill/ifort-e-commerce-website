import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import watchImage from '../assets/watch.png';
import headphonesImage from '../assets/headphones.png';
import laptopImage from '../assets/laptop.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSidePanel, setShowSidePanel] = useState(false); // State to control side panel visibility
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const images = [watchImage, headphonesImage, laptopImage];
  const navigate = useNavigate(); // Hook for navigation

  // Product data for different categories with original and discount prices
  const products = {
    'Smart Watches': [
      { id: 1, name: 'Galaxy Watch', price: '$199.99', originalPrice: '$249.99', image: watchImage },
      { id: 2, name: 'Apple Watch', price: '$399.99', originalPrice: '$499.99', image: watchImage },
      { id: 3, name: 'Fitbit Versa', price: '$179.99', originalPrice: '$229.99', image: watchImage },
    ],
    Laptops: [
      { id: 3, name: 'MacBook Pro', price: '$1299.99', originalPrice: '$1499.99', image: laptopImage },
      { id: 4, name: 'Dell XPS 13', price: '$1099.99', originalPrice: '$1399.99', image: laptopImage },
      { id: 5, name: 'HP Spectre x360', price: '$1499.99', originalPrice: '$1799.99', image: laptopImage },
    ],
    'Wireless Headphones': [
      { id: 6, name: 'Sony WH-1000XM4', price: '$349.99', originalPrice: '$399.99', image: headphonesImage },
      { id: 7, name: 'Bose QuietComfort', price: '$299.99', originalPrice: '$349.99', image: headphonesImage },
      { id: 8, name: 'Sennheiser Momentum 3', price: '$399.99', originalPrice: '$449.99', image: headphonesImage },
    ],
  };

  // Set interval to change the hero image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle category button click and navigate to the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Simulate a successful login and show the side panel with discounted products
  const handleLogin = () => {
    // After login, show the side panel
    setLoggedIn(true);
    setShowSidePanel(true);

    // Close the side panel after 5 seconds
    setTimeout(() => {
      setShowSidePanel(false);
    }, 5000);
  };

  return (
    <section className="relative bg-gray-50 py-16 px-6 md:py-24 md:px-12 lg:px-24 w-full">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-8">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Discover the Future with
            <br />
            <span className="text-green-500">I FORT</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl">
            Celebrate the season with amazing Christmas offers!
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={images[currentImage]}
            alt={currentImage === 0 ? 'Watch' : currentImage === 1 ? 'Headphones' : 'Laptop'}
            className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Christmas Offers Heading */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600">
          Get Exclusive Christmas Offers
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Choose your favorite category and explore the best Christmas deals.
        </p>
      </div>

      {/* Category Buttons on the Page */}
      <div className="mt-8 text-center">
        <div className="flex justify-center gap-6">
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Show Offers for Selected Category */}
      {selectedCategory && (
        <div className="mt-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
            Get Offers in {selectedCategory}
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[selectedCategory].map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-red-500 text-sm line-through">{product.originalPrice}</p>
                  <p className="text-green-500 font-bold text-xl">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Side Panel for Discount Products */}
      {showSidePanel && loggedIn && (
        <div className="fixed inset-0 flex items-center justify-end bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 w-96 h-full overflow-y-auto shadow-lg transform transition-transform duration-300">
            <button
              onClick={() => setShowSidePanel(false)}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>
            <h2 className="text-2xl font-extrabold text-green-500">Exclusive Discount!</h2>
            <p className="mt-4 text-lg text-gray-600">
              Enjoy a special Christmas discount of 20% on your next purchase! 🎉
            </p>

            {/* Display Discounted Products */}
            <div className="mt-8">
              {Object.keys(products).map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {products[category].map((product) => (
                      <div key={product.id} className="bg-white p-4 shadow-md rounded-lg flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{product.name}</h4>
                          <p className="text-red-500 text-sm line-through">{product.originalPrice}</p>
                          <p className="text-green-500 font-bold">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
