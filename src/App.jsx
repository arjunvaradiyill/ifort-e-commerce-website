import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
      {isLoggedIn && <Header onLogin={handleLogout} />}

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/hero" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/hero"
            element={isLoggedIn ? <Hero /> : <Navigate to="/" />}
          />
          <Route
            path="/category/:categoryName"
            element={isLoggedIn ? <ProductCategory /> : <Navigate to="/" />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
