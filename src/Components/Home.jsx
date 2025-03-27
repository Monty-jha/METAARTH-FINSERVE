import React from "react";

const services = [
  {
    title: "META ARTH PICKS",
    subtitle: "Pick from wide variety of portfolios",
    description:
      "We provide low-cost access to well diversified portfolios using data from industry-leading providers and our own investment team.",
    image:
      "data:image/png;base64,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", // Replace with actual image URL
  },
  {
    title: "GOAL BASED INVESTING",
    subtitle: "Let us create a portfolio for you",
    description:
      "Answer a few quick questions and we will create a low-cost, diversified portfolio customised for your needs and risk tolerance.",
    image:
      "https://via.placeholder.com/400x250", // Replace with actual image URL
  },
  {
    title: "EXPLORE FUNDS",
    subtitle: "Invest Responsibly",
    description:
      "We provide various easy ways for you to invest in companies that share your values and make more conscious investment decisions.",
    image:
      "https://via.placeholder.com/400x250", // Replace with actual image URL
  },
  {
    title: "META ARTH PICKS",
    subtitle: "Pick from wide variety of portfolios",
    description:
      "We provide low-cost access to well diversified portfolios using data from industry-leading providers and our own investment team.",
    image:
      "data:image/png;base64,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", // Replace with actual image URL
  },
  {
    title: "GOAL BASED INVESTING",
    subtitle: "Let us create a portfolio for you",
    description:
      "Answer a few quick questions and we will create a low-cost, diversified portfolio customised for your needs and risk tolerance.",
    image:
      "https://via.placeholder.com/400x250", // Replace with actual image URL
  },
  {
    title: "EXPLORE FUNDS",
    subtitle: "Invest Responsibly",
    description:
      "We provide various easy ways for you to invest in companies that share your values and make more conscious investment decisions.",
    image:
      "https://via.placeholder.com/400x250", // Replace with actual image URL
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section - Remove h-screen and add specific height */}
      <section className="w-full min-h-[800px] flex items-center justify-center relative overflow-hidden bg-orange-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: "url(https://meta-grow.in/app_themes/images/banner_1.jpg)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center px-6 md:px-20">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Build more <br /> Worry less
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Get the perfect mix of personalization and automation and start making your own money moves. For free.
            </p>
            <button className="mt-6 !bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 ease-in-out">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Add margin-top for spacing */}
      <section className="py-16 bg-white text-center mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Freedom to choose</h2>
          <p className="text-gray-600 mt-2 mb-12 text-lg max-w-3xl mx-auto">
          We give you access to an account that can grow with you and let you choose how to invest.
        </p>
          <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-orange-500 text-sm font-semibold mt-1">{service.subtitle}</p>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <a href="#" className="block mt-4 text-black font-semibold hover:text-orange-500">
                  KNOW MORE
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
