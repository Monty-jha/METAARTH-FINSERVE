import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Mutual Funds Investment",
    description: "Expert guidance in mutual fund investments with personalized portfolio strategies, risk assessment, and regular performance monitoring to maximize your returns.",
    image: "https://finwave.co/images/gif/Mutual_Fund-1.gif",
  },
  {
    title: "Systematic Investment Plans (SIP)",
    description: "Structured approach to wealth creation through systematic investment plans, helping you build a robust portfolio with disciplined monthly investments.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQEToMOgsqvGrg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687257576544?e=2147483647&v=beta&t=pLAZ9nbnqril34OLm3nws4VgWPLkb3FKY5Ae2h7WuMc",
  },
  {
    title: "Fixed Deposits",
    description: "Secure your savings with competitive fixed deposit schemes offering attractive interest rates and flexible tenure options for steady returns.",
    image: "https://www.dimensiongroup.co.in/wp-content/uploads/2019/05/fixed-deposit.png",
  },
  {
    title: "Portfolio Management Services",
    description: "Professional portfolio management services (PMS) with expert fund managers handling your investments to achieve your financial goals.",
    image: "https://www.smifslimited.com/wp-content/uploads/2020/08/Global.gif",
  },
  {
    title: "Stock Trading Solutions",
    description: "Advanced stock trading platform with real-time market analysis, expert recommendations, and seamless execution for optimal trading experience.",
    image: "https://miro.medium.com/v2/resize:fit:1280/0*yh2tqLgKHZ0PHXCl.gif",
  },
  {
    title: "Bonds & Securities",
    description: "Diverse range of bonds and securities investment options with comprehensive analysis and strategic allocation for stable returns.",
    image: "https://d2zny4996dl67j.cloudfront.net/blogs/wp-content/uploads/2022/11/30101503/ezgif.com-gif-maker-9-1.gif",
  },
];

const additionalServices = [
  {
    title: "Loan Against Securities (LAS)",
    description: "Quick and hassle-free loans against your securities portfolio with competitive interest rates and flexible repayment options.",
  },
  {
    title: "Gold Loan Services",
    description: "Instant gold loans with attractive interest rates, safe storage, and transparent valuation process for your precious metal assets.",
  },
  {
    title: "Personal Loan Solutions",
    description: "Customized personal loan options with quick processing, minimal documentation, and competitive interest rates to meet your financial needs.",
  },
  {
    title: "Tax-Efficient Investing",
    description: "Strategic investment planning to optimize tax benefits while maximizing returns through ELSS funds and tax-saving instruments.",
  },
  {
    title: "Retirement Planning",
    description: "Comprehensive retirement planning solutions with a mix of mutual funds, bonds, and other instruments for a secure future.",
  },
  {
    title: "Wealth Management",
    description: "Holistic wealth management services combining various investment vehicles to create and preserve long-term wealth.",
  },
];

const FinancialServices = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(45deg, #1a365d 0%, #2d3748 50%, #1a365d 100%)",
            "linear-gradient(45deg, #2d3748 0%, #1a365d 50%, #2d3748 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center py-16 px-6 lg:px-20">
        <motion.h2 
          className="text-5xl font-extrabold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Investment & Financial Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl relative z-10">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="https://meta-grow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-full h-40 overflow-hidden rounded-t-lg mb-4">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed tracking-wide group-hover:text-gray-900 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.h2 
          className="text-5xl font-extrabold mt-20 mb-12 text-center text-orange-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Additional Financial Solutions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl relative z-10">
          {additionalServices.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg relative overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-orange-500 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed tracking-wide">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-full flex justify-center mt-20 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/95 backdrop-blur-sm py-12 px-8 shadow-lg max-w-6xl w-full flex flex-col items-center rounded-xl">
            <h3 className="text-4xl font-bold text-gray-900 text-center">
              Start Your Investment Journey Today
            </h3>
            <p className="mt-6 text-gray-700 leading-relaxed text-center text-lg max-w-4xl">
              At <a href="https://meta-grow.in/" target="_blank" rel="noopener noreferrer" className="font-bold !text-orange-500 hover:text-orange-600 transition-colors">METAGROW</a>, we're dedicated to helping you achieve your financial goals through expert guidance and comprehensive investment solutions. Our team of experienced professionals ensures that your investments are managed with the utmost care and strategic planning for optimal returns.
            </p>
            <motion.a
              href="https://meta-grow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 !text-white px-8 py-4 rounded-lg mt-8 text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Investing Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialServices;