import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80",
      gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3NmZjYzRiNjBjNDZhNjQ0ZjM0ZjI5ZjM5ZjM5ZmM1ZjM5ZmM1ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26tn33aiTi1jkl6H6/giphy.gif",
      title: "IT Solutions",
      subtitle: "Digital Innovation",
      description: "Transform your business with cutting-edge technology solutions.",
      buttonLink: "/it-services",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2070&q=80",
      gifUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/65626933112811.56a01870441f4.gif",
      title: "Education",
      subtitle: "Future Learning",
      description: "Invest in the future of education with innovative learning platforms.",
      buttonLink: "/education-services",
    },
    {
      url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=2069&q=80",
      gifUrl: "https://media.licdn.com/dms/image/v2/D4D12AQEPlI6h4_6s_Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683636785857?e=2147483647&v=beta&t=azqLlVt9QsnZxKahDkyLYTJlgsQNZhFcbaWcwzapG_8",
      title: "Pharmaceuticals",
      subtitle: "Healthcare Growth",
      description: "Explore investment opportunities in breakthrough medical research.",
      buttonLink: "/pharmaceutical-services",
    },
    {
      url: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=2070&q=80",
      gifUrl: "https://wearegurgaon.com/wp-content/uploads/2022/04/laxmi-jewellers-faridabad.gif",
      title: "Gold Investment",
      subtitle: "Secure Assets",
      description: "Build a stable portfolio with strategic investments in gold.",
      buttonLink: "/gold-investment-services",
    },
    {
      url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=2070&q=80",
      gifUrl: "https://media.assettype.com/bloombergquint/2020-01/f38a2602-e440-473a-8353-43493b220dd5/GIF__1_.gif?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
      title: "Mutual Funds",
      subtitle: "Diversified Growth",
      description: "Maximize your returns with expertly managed mutual fund portfolios.",
      buttonLink: "/financial-services",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const firstRowCards = heroImages.slice(0, 3);
  const secondRowCards = heroImages.slice(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 md:px-20 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {heroImages[currentImageIndex].title}
              <br />
              <span className="text-orange-500">{heroImages[currentImageIndex].subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">{heroImages[currentImageIndex].description}</p>
            <a
              href={heroImages[currentImageIndex].buttonLink}
              className="bg-orange-500 !text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              START NOW
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  Choose Excellence
                </span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Across Industries with{" "}
                <span className="text-orange-500">Metaarth</span>
              </h3>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
                }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                Your Gateway to Growth in{" "}
                <span className="text-orange-500 font-semibold">IT</span>,{" "}
                <span className="text-orange-500 font-semibold">Education</span>,{" "}
                <span className="text-orange-500 font-semibold">Finance</span>,{" "}
                <span className="text-orange-500 font-semibold">Healthcare</span>, and{" "}
                <span className="text-orange-500 font-semibold">Gold Investment</span>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* First Row - 3 Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-8 lg:mb-12"
          >
            {firstRowCards.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#B3EBF2] rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.gifUrl} 
                    alt={service.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <a
                      href={service.buttonLink}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 !text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 Centered Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {secondRowCards.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#B3EBF2] rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.gifUrl} 
                    alt={service.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <a
                      href={service.buttonLink}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 !text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;