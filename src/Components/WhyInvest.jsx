import React from "react";
import backgroundImage from "../assets/why_bg.jpg";

const features = [
  {
    title: "EASY REGISTRATION",
    description: "Register your investment account in just 15 minutes, that too, paperlessly!",
    icon: "⏳", // Placeholder icon (You can use an actual SVG)
  },
  {
    title: "HANDPICKED SCHEMES",
    description: "Explore and invest in the best performing schemes recommended by our experts.",
    icon: "✨",
  },
  {
    title: "MANAGE PORTFOLIO",
    description: "Manage, track and analyse your portfolio performance online.",
    icon: "💼",
  },
  {
    title: "AMFI REGISTERED",
    description: "We are registered as a distributor with AMFI with ARN - 257036.",
    icon: "📑",
  },
  {
    title: "INNOVATIVE TECHNOLOGY",
    description: "Cutting-edge trading technology that provides power, reliability, and mobility.",
    icon: "⚙️",
  },
];

const WhyInvest = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black opacity-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">Why Invest with Meta Arth</h2>
        <p className="text-orange-400 mt-2 text-lg">Freedom to do what matters most</p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-orange-400 font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-300 mt-2 text-sm max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;