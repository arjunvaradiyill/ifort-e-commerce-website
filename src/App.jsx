import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategory from './components/ProductCategory';
import Login from './components/Login';
import Footer from './components/Footer'; // Assuming you have Footer in the components

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default category

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      {/* Show Header only when the user is logged in */}
      {isLoggedIn && (
        <Header
          onLogout={handleLogout}
          onCategorySelect={handleCategorySelect}
        />
      )}

      <Routes>
        {/* Default route: Redirect to /hero if logged in, else show Login page */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/hero" /> : <Login onLogin={handleLogin} />}
        />

        {/* Hero page after login */}
        <Route
          path="/hero"
          element={isLoggedIn ? <Hero /> : <Navigate to="/" />}
        />

        {/* ProductCategory page, passing selectedCategory as a prop */}
        <Route
          path="/category/:categoryName"
          element={
            isLoggedIn ? (
              <ProductCategory selectedCategory={selectedCategory} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      {/* Always show Footer */}
      <Footer />
    </Router>
  );
}

export default App;
