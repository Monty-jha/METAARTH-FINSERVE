import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { title: "Gold Investment", description: "Secure your future with smart gold investments and wealth management solutions.", gif: "https://www.smifslimited.com/wp-content/uploads/2022/09/browserpreview_tmp-1.gif" },
  { title: "Custom Jewelry Design", description: "Bespoke jewelry pieces crafted with precision and elegance.", gif: "https://www.customdiamjewel.com/cdn/shop/files/custom_diam_jewel_CAD_Design.gif?v=1665052375" },
  { title: "Gold Trading", description: "Buy and sell gold with trusted market insights and guidance.", gif: "https://miro.medium.com/v2/resize:fit:1400/1*RrlQr37t_u4-xiRp13VAfQ.gif" },
  { title: "Gold Savings Plan", description: "Invest in gold with flexible and convenient savings plans.", gif: "https://rajlaxmijewellerschennai.com/images/scheme.gif" },
  { title: "Jewelry Repair & Maintenance", description: "Professional repair and polishing services to maintain your precious jewelry.", gif: "https://www.valeriemadison.com/cdn/shop/files/ZAP.gif?v=1738470335&width=1080" },
  { title: "Gold Purity Testing", description: "Certified gold testing to ensure the highest quality and authenticity.", gif: "https://images.bhaskarassets.com/web2images/521/2024/10/24/cover-hallmark-2_1729762941.gif" }
];

const GoldInvestmentServices = () => {
  return (
    <div className="relative min-h-screen bg-[#1a1f4a] py-12 px-6 lg:px-20 overflow-hidden flex flex-col items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f4a] to-[#32265e] opacity-80 animate-gradient-move"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-orange-500 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>
      
      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-orange-500 mb-10 text-center relative z-10">Gold Investment & Jewelry Services</h2>
      <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10 relative z-10">
        Explore our premium gold investment and jewelry-making services, crafted to provide excellence and security.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.a
            key={index}
            href="https://pingakshajewels.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-xl flex flex-col justify-between w-full relative overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
              <img src={service.gif} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="text-xl font-semibold text-orange-500">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 bg-white p-8 rounded-xl shadow-xl text-center max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Looking for Top-Notch Gold Solutions?</h2>
        <p className="text-gray-800">
          At <a href="https://meta-grow.in/static/about-us.aspx" target="_blank"><strong className="text-orange-500">META ARTH</strong></a>, we believe in delivering excellence and trust in the world of gold investments and jewelry. Our child company, <a href="https://pingakshajewels.com/" target="_blank"><strong className="text-orange-500">Pingaksha Jewels</strong></a>, specializes in premium gold-related services, ensuring quality, security, and luxury in every offering.
        </p>
        <a 
          href="https://pingakshajewels.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-6 px-6 py-3 bg-orange-500 !text-white text-lg font-bold rounded-full shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Visit Pingaksha Jewels
        </a>
      </motion.div>
    </div>
  );
};

export default GoldInvestmentServices;
