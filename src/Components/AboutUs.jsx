import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const imageSources = [
    'https://internationaljournalofresearch.com/wp-content/uploads/2020/06/wp-1591971173829.jpg?w=438',
    'https://media.istockphoto.com/id/800359302/photo/summer-park.jpg?s=612x612&w=0&k=20&c=5dT490lWX65Bj9jsk397l0ba8vUiu7WL8qlUU0V1LP0=',
    'https://cdn.pixabay.com/photo/2020/06/01/21/19/park-5248514_640.jpg',
    'https://m.media-amazon.com/images/I/71S-eCc6asL._AC_UF1000,1000_QL80_.jpg'
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gray-100 py-17 px-6 lg:px-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-orange-300 to-yellow-200 opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 relative z-10">
        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            About <span className="text-orange-600">Metaarth</span>
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed mb-4 text-justify">
            At <span className="font-semibold">Metaarth</span>, we empower individuals and businesses with expert guidance in mutual fund investments. Our mission is to simplify wealth creation by providing strategic investment solutions tailored to your financial goals. Backed by a team of seasoned professionals, we offer personalized advice, in-depth market insights, and unparalleled customer service to help you make informed investment decisions with confidence. At Metaarth, we don't just manage investments—we build lasting financial success.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-4">Our Core Businesses:</h3>
          <div className="mt-3 space-y-3">
            {[
              {
                title: "Metaarth Investments – Financial Growth Made Simple",
                points: [
                  "Expert financial guidance for equity, debt, and hybrid mutual funds",
                  "Partnerships with top fund houses",
                  "Goal-oriented wealth creation"
                ]
              },
              {
                title: "DFMS Education – Shaping a Smarter Tomorrow",
                points: [
                  "Career guidance and counseling",
                  "Pan-India admissions consultancy",
                  "Workshops and leadership programs"
                ]
              },
              {
                title: "MicroDigital – Pioneering the Future of Technology",
                points: [
                  "AI & Cloud solutions",
                  "Metaverse innovations",
                  "Global presence in digital solutions"
                ]
              },
              {
                title: "Pingaksha Jewels – Excellence in Gold & Jewelry Services",
                points: [
                  "Gold investment and wealth management",
                  "Custom jewelry design and manufacturing",
                  "Gold trading and savings plans",
                  "Jewelry repair and maintenance services",
                  "Certified gold purity testing"
                ]
              }
            ].map((business, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white rounded-lg shadow-lg border-l-4 border-orange-600"
              >
                <h4 className="text-xl font-semibold text-orange-600">{business.title}</h4>
                <ul className="list-disc ml-6 text-gray-700 mt-1">
                  {business.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Image Slideshow Section */}
<motion.div 
  initial={{ opacity: 0, x: 50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8 }} 
  className="lg:w-1/2 h-[520px] relative overflow-hidden rounded-xl shadow-2xl mt-[-260px]"
>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img 
            key={currentImage}
            src={imageSources[currentImage]}
            alt="Metaarth Image" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1.5, ease: "easeOut" }
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
         
        </motion.div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Link 
            to="/Contact" 
            onClick={handleClick}
            className="relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 !text-white px-10 py-4 rounded-lg shadow-xl text-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 group-hover:animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <span className="relative">
              Get in Touch with Us Today
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;