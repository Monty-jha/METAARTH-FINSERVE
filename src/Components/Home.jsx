import React, { useState, useEffect } from 'react';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "IT Solutions",
      subtitle: "Digital Innovation",
      description: "Transform your business with cutting-edge technology solutions and digital transformation strategies.",
      buttonLink: "/it-investment"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Education",
      subtitle: "Future Learning",
      description: "Invest in the future of education with innovative learning platforms and educational technology.",
      buttonLink: "/education-investment"
    },
    {
      url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Pharmaceuticals",
      subtitle: "Healthcare Growth",
      description: "Explore investment opportunities in breakthrough medical research and pharmaceutical innovations.",
      buttonLink: "/pharma-investment"
    },
    {
      url: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Gold Investment",
      subtitle: "Secure Assets",
      description: "Build a stable portfolio with strategic investments in gold and precious metals.",
      buttonLink: "/gold-investment"
    },
    {
      url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Mutual Funds",
      subtitle: "Diversified Growth",
      description: "Maximize your returns with expertly managed mutual fund portfolios tailored to your goals.",
      buttonLink: "/mutual-funds"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div> {/* Updated opacity to 80% */}
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
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Freedom to choose</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            We give you access to an account that can grow with you and let you choose how to invest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {heroImages.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <img src={service.url} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
