import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components here
// Example: import Home from './pages/Home';
// Example: import About from './pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
