import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Lightbulb, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    title: "GLOBAL PRESENCE",
    description: "Operating across multiple industries with our innovative subsidiaries - Microdigitall, DFMS, Pharmaceuticals, Pingaksha Jewels, and Metagrow.",
    icon: Globe,
    color: "text-blue-400",
  
  },
  {
    title: "INNOVATION DRIVEN",
    description: "Pioneering technological advancements and solutions that shape the future of business across all sectors.",
    icon: Lightbulb,
    color: "text-yellow-400",
   
  },
  {
    title: "TRUSTED EXPERTISE",
    description: "Over a decade of experience in delivering excellence through our diverse portfolio of companies.",
    icon: Shield,
    color: "text-green-400",
    
  },
  {
    title: "CLIENT SUCCESS",
    description: "Dedicated to transforming businesses and enriching lives through our comprehensive range of services.",
    icon: Users,
    color: "text-purple-400",
    
  },
  {
    title: "SUSTAINABLE GROWTH",
    description: "Committed to creating long-term value while maintaining the highest standards of corporate responsibility.",
    icon: TrendingUp,
    color: "text-orange-400",
    
  },
];

const subsidiaries = [
  {
    name: "Microdigitall",
    description: "Cutting-edge IT solutions transforming businesses through digital innovation",
    gradient: "from-blue-600 to-cyan-400",
    link: "https://microdigitall.com/"
  },
  {
    name: "DFMS",
    description: "Revolutionary educational platforms reshaping the future of learning",
    gradient: "from-purple-600 to-pink-400",
    link: "https://www.dfmseducation.com/"
  },
  {
    name: "Pharmaceuticals",
    description: "Advanced medical research and healthcare solutions for a healthier tomorrow",
    gradient: "from-green-600 to-emerald-400",
    link: "/pharmaceutical-services"
  },
  {
    name: "Pingaksha Jewels",
    description: "Premium gold investment opportunities and exquisite jewelry collections",
    gradient: "from-yellow-600 to-amber-400",
    link: "https://pingakshajewels.com/"
  },
  {
    name: "Metagrow",
    description: "Innovative financial solutions for sustainable wealth creation",
    gradient: "from-red-600 to-orange-400",
    link: "https://meta-grow.in/static/about-us.aspx"
  },
];

const WhyChoose = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const firstThreeCards = subsidiaries.slice(0, 3);
  const lastTwoCards = subsidiaries.slice(3);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      {/* Main Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
            Why Choose Metaarth
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses across industries through innovation, excellence, and sustainable growth
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.a
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-lg font-semibold mb-3 text-orange-400">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Subsidiaries Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Subsidiaries</h3>
          <p className="text-gray-300">Excellence across multiple domains</p>
        </motion.div>

        {/* First Row - 3 Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {firstThreeCards.map((subsidiary, index) => (
            <motion.a
              href={subsidiary.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-r ${subsidiary.gradient} p-[2px] rounded-xl cursor-pointer`}
            >
              <div className="bg-gray-900 rounded-xl p-6 h-full">
                <h4 className="text-xl font-bold mb-3">{subsidiary.name}</h4>
                <p className="text-gray-300 text-sm">{subsidiary.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Second Row - 2 Centered Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[66%] mx-auto"
        >
          {lastTwoCards.map((subsidiary, index) => (
            <motion.a
              href={subsidiary.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-r ${subsidiary.gradient} p-[2px] rounded-xl cursor-pointer`}
            >
              <div className="bg-gray-900 rounded-xl p-6 h-full">
                <h4 className="text-xl font-bold mb-3">{subsidiary.name}</h4>
                <p className="text-gray-300 text-sm">{subsidiary.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 !text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Partner With Us Today
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]"></div>
      </div>
    </div>
  );
};

export default WhyChoose;