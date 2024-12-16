import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductCategory = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [products, setProducts] = useState([]);

  // Static product data with proper image links
  const allProducts = [
    {
      id: 1,
      title: 'I phone 16 pro',
      description: 'The iPhone 16 Pro combines the A18 Pro chip, a 48MP Ultra Wide camera, advanced AI features, improved gaming graphics, and enhanced safety tools, offering a cutting-edge, privacy-focused user.',
      price: 599.99,
      image: 'https://m.media-amazon.com/images/I/71ta3jyFvIL._SX679_.jpg',
      category: 'Mobiles',
    },
    {
      id: 2,
      title: 'Samsung Galaxy S23',
      description: 'The Samsung Galaxy S23 features a 50MP triple-camera system, a 6.1-inch AMOLED display, and a sleek, durable design powered by the Snapdragon 8 Gen 2 chip, ensuring high performance.........',
      price: 199.99,
      image: 'https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
      category: 'Mobiles',
    },
    {
      id: 3,
      title: 'OnePlus Nord CE4',
      description: 'The OnePlus Nord 4 features a 6.74-inch AMOLED display, Snapdragon 7+ Gen 3 chip, and a 50MP OIS main camera, delivering strong performance, long battery life, and extended software updates.',
      price: 199.99,
      image: 'https://m.media-amazon.com/images/I/61Io5-ojWUL._SX679_.jpg',
      category: 'Mobiles',
    },
    {
      id: 4,
      title: 'Smart Watch',
      description: 'A smartwatch is a versatile wearable device that offers health and fitness tracking, notifications, and smartphone connectivity, with advanced features like ECG and GPS in models from brands',
      price: 299.99,
      image: 'https://m.media-amazon.com/images/I/71uVFWWZigL._SY450_.jpg',
      category: 'All',
    },
    {
      id: 5,
      title: 'Laptop',
      description: 'The OMEN 15 laptop by HP delivers exceptional gaming performance with a 240Hz display, NVIDIA GeForce RTX graphics, up to 32GB of RAM, and customizable settings via the OMEN Gaming Hub, offer',
      price: 299.99,
      image: 'https://m.media-amazon.com/images/I/71Ntv2l1uRL._AC_UY327_FMwebp_QL65_.jpg',
      category: 'All',
    },
    {
      id: 6,
      title: 'Headphone',
      description: 'JBL headphones deliver excellent sound quality, strong bass, and noise cancellation, available in over-ear, on-ear, and true wireless designs. They offer models with long battery life and water',
      price: 299.99,
      image: 'https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UY327_FMwebp_QL65_.jpg',
      category: 'All',
    },
  ];

  // Filter products based on the category
  useEffect(() => {
    if (categoryName === 'Mobiles') {
      setProducts(allProducts.filter(product => product.category === 'Mobiles'));
    } else if (categoryName === 'All') {
      setProducts(allProducts); // Show all products
    }
  }, [categoryName]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white hover:scale-105 transform-gpu"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4 rounded-md transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-yellow-500 mb-4">${product.price}</p>
            <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
