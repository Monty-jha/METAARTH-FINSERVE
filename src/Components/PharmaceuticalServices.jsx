import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { 
    title: "Research & Development",
    description: "Pioneering innovative pharmaceutical solutions through cutting-edge research and development programs.",
    gif: "https://static.wixstatic.com/media/22f665_2a06fe2e3f5747c087e024361b15b7aa~mv2.gif"
  },
  { 
    title: "Manufacturing Excellence",
    description: "State-of-the-art manufacturing facilities ensuring the highest quality pharmaceutical products.",
    gif: "https://www.shutterstock.com/image-illustration/drug-manufacturing-process-conveyor-medical-260nw-2462200277.jpg"
  },
  { 
    title: "Quality Assurance",
    description: "Rigorous quality control processes meeting international pharmaceutical standards.",
    gif: "https://media.istockphoto.com/id/1444182483/vector/pharmaceutical-industry.jpg?s=612x612&w=0&k=20&c=s8zQe-Qp2k92SCJ1tIUBF2xqeCaA-po78k6y2w-_lS4="
  },
  { 
    title: "Clinical Research",
    description: "Comprehensive clinical trial management and research services for drug development.",
    gif: "https://static.wixstatic.com/media/f753bb_41b861f247564862aab3da07e7d1911e~mv2.gif"
  },
  { 
    title: "Healthcare Distribution",
    description: "Efficient distribution network ensuring timely delivery of pharmaceutical products worldwide.",
    gif: "https://routine-automation.com/wp-content/uploads/2024/02/50185886dd0bfd2c8fc231044423e30f.gif"
  },
  { 
    title: "Patient Care Solutions",
    description: "Innovative healthcare solutions focused on improving patient outcomes and experiences.",
    gif: "https://i.pinimg.com/originals/82/b6/48/82b64893248a3a018403e9157dbc7cee.gif"
  }
];

const PharmaceuticalServices = () => {
  return (
    <div className="relative min-h-screen bg-[#1a4a3f] py-12 px-6 lg:px-20 overflow-hidden flex flex-col items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a4a3f] to-[#2c5e4a] opacity-80 animate-gradient-move"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-teal-500 rounded-full opacity-20"
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
      <h2 className="text-4xl font-bold text-teal-400 mb-10 text-center relative z-10">MetaHealth Pharmaceutical Services</h2>
      <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10 relative z-10">
        Advancing healthcare through innovation, quality, and commitment to global health standards. Our comprehensive pharmaceutical services are designed to meet the evolving needs of healthcare providers and patients worldwide.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl flex flex-col justify-between w-full relative overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
              <img src={service.gif} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="text-xl font-semibold text-teal-600">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 bg-white p-8 rounded-xl shadow-xl text-center max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner with MetaHealth Pharmaceuticals</h2>
        <p className="text-gray-800">
          At <strong className="text-teal-600">MetaHealth Pharmaceuticals</strong>, we're committed to advancing global healthcare through innovation and excellence. Our state-of-the-art facilities, expert research teams, and commitment to quality make us a trusted partner in the pharmaceutical industry. Join us in our mission to create a healthier tomorrow.
        </p>
        <button 
          className="inline-block mt-6 px-6 py-3 !bg-teal-500 !text-white text-lg font-bold rounded-full shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
          onClick={() => window.location.href = '/contact'}
        >
          Connect With Our Experts
        </button>
      </motion.div>
    </div>
  );
};

export default PharmaceuticalServices;