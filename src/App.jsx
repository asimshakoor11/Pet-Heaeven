import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Navbar from './Components/Navbar';
import AdoptPage from './Pages/AdoptPage';
import ReleasePage from './Pages/ReleasePage';
import RegisterPage from './Pages/RegisterPage';
import AboutUsPage from './Pages/AboutUsPage';
import AvailablePetsPage from './Pages/AvailablePetsPage';
import HomePage from './Pages/HomePage';
import './App.css'
import Footer from './Components/Footer';
import AdminDashboard from './Pages/AdminDashboard';


function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AvailablePets" element={<AvailablePetsPage />} />
          <Route path="/Adopt" element={<AdoptPage />} />
          <Route path="/Release" element={<ReleasePage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/Admin" element={<AdminDashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;