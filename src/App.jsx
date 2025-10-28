import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Science from './pages/Science';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Integrations from './pages/Integrations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Simulator from './pages/Simulator';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/science" element={<Science />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Simulator />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;