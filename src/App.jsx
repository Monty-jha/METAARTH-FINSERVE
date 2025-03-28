import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/Home';
import WealthPicks from './Components/WealthPicks';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import WhyInvest from "./Components/WhyInvest";
import ITServices from "./Components/ITServices";
import EducationServices from "./Components/EducationServices";
import GoldInvestmentServices from "./Components/GoldInvestmentServices";



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <WealthPicks />
                <WhyInvest />
            
               
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/wealth-picks" element={<WealthPicks />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/education-services" element={<EducationServices />} />
            <Route path="/gold-investment-services" element={<GoldInvestmentServices />} />

            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
