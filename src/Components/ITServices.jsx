import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Marketing Solutions",
    description:
      "Our Marketing Solutions help businesses reach their target audience through strategic digital marketing, including SEO, social media, and content marketing to enhance brand visibility and drive growth.",
    image: "https://i.pinimg.com/originals/61/44/2f/61442f2241fc5abce9a83f053b0b904a.gif",
  },
  {
    title: "IT Solutions",
    description:
      "We provide comprehensive IT Solutions, including network management, data security, and tech support, ensuring that your business runs smoothly and securely.",
    image: "https://i.pinimg.com/originals/f2/a2/39/f2a239f48d9f832c7d45dd6198cad0e0.gif",
  },
  {
    title: "Cloud Solutions",
    description:
      "Our Cloud Solutions offer secure and scalable data storage, making it easier for businesses to access their data from anywhere while maintaining reliability and security.",
    image: "https://i.pinimg.com/originals/6b/af/d7/6bafd77fd2633aa0b469df9cef31c6b8.gif",
  },
  {
    title: "AI Solutions",
    description:
      "We leverage Artificial Intelligence to streamline processes, automate tasks, and provide data-driven insights to help businesses stay ahead of the competition.",
    image: "https://www.tlciscreative.com/wp-content/uploads/2024/08/A.I-2.gif",
  },
  {
    title: "Meta Solutions",
    description:
      "Our Meta Solutions connect the physical and virtual worlds through VR and AR, creating immersive experiences for businesses to engage with customers in innovative ways.",
    image: "https://about.fb.com/wp-content/uploads/2022/12/EOY-VR-Roundup_Header.gif?fit=960%2C540",
  },
  {
    title: "Website & App Development",
    description:
      "We design and develop custom websites and mobile apps tailored to your business needs, focusing on user experience, functionality, and modern design.",
    image: "https://qbyte.in/assets/images/web-dev-aboutus-img.gif",
  },
];

const ITServices = () => {
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
            "linear-gradient(45deg, #0f1c4d 0%, #2b1b5a 50%, #0f1c4d 100%)",
            "linear-gradient(45deg, #2b1b5a 0%, #0f1c4d 50%, #2b1b5a 100%)",
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
          Our IT Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl relative z-10">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="https://microdigitall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 backdrop-blur-sm text-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-full h-40 overflow-hidden rounded-t-lg">
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
              >
                <h3 className="text-2xl font-bold text-orange-500 mt-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-700 text-justify group-hover:text-gray-900 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.h2 
          className="text-5xl font-extrabold mt-16 text-center text-orange-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Our IT Services?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mt-10 relative z-10">
          {[
            {
              title: "Comprehensive IT Solutions",
              description: "We offer end-to-end IT support, from network management to cybersecurity, ensuring seamless business operations with minimal downtime.",
            },
            {
              title: "Advanced AI & Cloud Integration",
              description: "Leverage the power of AI for automation and data-driven insights while benefiting from our secure and scalable cloud solutions for remote accessibility and enhanced efficiency.",
            },
            {
              title: "Digital Transformation with Meta Solutions",
              description: "We bridge the gap between the real and virtual worlds using AR/VR technologies, helping businesses create immersive experiences that captivate and engage their audience.",
            },
            {
              title: "Expert Website & App Development",
              description: "Our skilled developers craft custom websites and mobile apps with intuitive designs, optimized performance, and seamless user experiences.",
            },
            {
              title: "Proven Marketing Strategies",
              description: "From SEO to social media and content marketing, our data-driven marketing solutions boost brand visibility and drive business growth.",
            },
            {
              title: "Client-Centric Approach",
              description: "We prioritize our clients, offering 24/7 support, personalized solutions, and cutting-edge technology to help businesses scale efficiently.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-sm text-gray-900 p-6 rounded-xl shadow-lg relative overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-orange-500 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-justify">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-full flex justify-center mt-16 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/95 backdrop-blur-sm py-12 px-6 shadow-lg max-w-6xl w-full flex flex-col items-center rounded-xl">
            <h3 className="text-4xl font-bold text-gray-900 text-center">
              Looking for top-notch IT solutions?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-center text-lg max-w-4xl">
              At <a href="https://meta-grow.in/static/about-us.aspx" target="_blank" rel="noopener noreferrer" className="font-bold !text-orange-500 hover:text-orange-600 transition-colors">META ARTH</a> and{" "}
              <a href="https://microdigitall.com/" target="_blank" rel="noopener noreferrer" className="font-bold !text-orange-500 hover:text-orange-600 transition-colors">MICRODIGITALL</a>, we specialize in 
              cutting-edge services, including AI solutions, cloud computing, website & app development, 
              and digital marketing. Our expertise ensures seamless integration, security, and innovation 
              to help your business thrive in the digital era.
            </p>
            <motion.a
              href="https://microdigitall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 !text-white px-8 py-4 rounded-lg mt-6 text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Website
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITServices;