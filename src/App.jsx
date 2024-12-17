import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategory from './components/ProductCategory';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      {/* Header with dynamic Login/Logout button */}
      <Header isLoggedIn={isLoggedIn} onLogin={setIsLoggedIn} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Hero isLoggedIn={isLoggedIn} />} // Pass the login state to Hero
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />} // Login component with onLogin handler
          />
          <Route
            path="/hero"
            element={<Hero isLoggedIn={isLoggedIn} />} // Hero page is accessible
          />
          <Route
            path="/category/:categoryName"
            element={isLoggedIn ? <ProductCategory /> : <Hero />} // Restrict access to categories if not logged in
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
