import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const services = [
  { title: "Online Ability Task", description: "Aptitude, Psychometric & Personality Test, Career Assessment & IQ Quiz to analyze career objectives, subject interests, and scopes.", gif: "https://cdn.dribbble.com/userupload/22867333/file/original-f8f7dbd0e2649fcfc709054998ea46da.gif" },
  { title: "Feedback Update", description: "A detailed report about the student's mental capability, core subjects, and career interests.", gif: "https://media4.giphy.com/media/cOVwY3Tw8a3AnI9ouQ/200.gif" },
  { title: "B2B Sessions", description: "Individual/group counseling sessions on required subjects.", gif: "https://media1.giphy.com/media/eGMnUPO1I5pgsUr3pd/giphy.gif?cid=6c09b952k2c1natnr384n4iix68jdibi4m584vnaw0um3kax&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" },
  { title: "Study/Routine Management Plans", description: "Personalized study/routine management plans based on requirements.", gif: "https://cdn.dribbble.com/userupload/22604615/file/original-4bab5a01be62e72609383aa7d8d2825a.gif" },
  { title: "Wake-up Call", description: "Optional: Get a wake-up call daily at your morning routine time.", gif: "https://media0.giphy.com/media/3o6MboJngcEUAYw7aU/200w.gif?cid=6c09b952urmub50azzf9yp3wy7xdw2id6kb3sk0yi86xjkrz&ep=v1_gifs_search&rid=200w.gif&ct=g" },
  { title: "Progress Reports", description: "Monthly performance reports for analysis.", gif: "https://media.tenor.com/ZrFooc6A9ysAAAAM/goodgoodgeneral-mental-health.gif" },
  { title: "Affirmations", description: "Daily affirmations to develop a strong mindset.", gif: "https://media4.giphy.com/media/6LRvIogUe36qn6q41y/giphy.gif?cid=6c09b952c7ot6etv9zbr0v0mq0c99bmqgtdd9ddbhigcu1qm&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
  { title: "Mental Quiz", description: "Periodic quiz competitions for brain exercise.", gif: "https://scitechdaily.com/images/Brain-Signals-Rotating-Test.gif" },
  { title: "Seminars/Webinars", description: "Workshops on education, mental strength, career options.", gif: "https://conferences.pionline.com/uploads/conference_admin/GFOR-homepage.gif" },
  { title: "Motivation", description: "Regular motivational sessions through seminars and webinars.", gif: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/65626933112811.56a01870441f4.gif" },
  { title: "WA Updates", description: "WhatsApp updates about your courses and upcoming events.", gif: "https://static.wixstatic.com/media/92c7f7_7f41faa1aeb048c7baa87d99f0c79a84~mv2.gif" },
  { title: "Guardian Interactions", description: "Guardian-based seminars to discuss modernization and child goals.", gif: "https://www.danimontesinos.com/wp-content/uploads/2020/09/dani_montesinos_sunrise_01_02.gif" },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.a
        href="https://www.dfmseducation.com/services"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <motion.img 
            src={service.gif} 
            alt={service.title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const EducationServices = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#1a1f4a] to-[#32265e] min-h-screen py-16 px-6 lg:px-20 overflow-hidden">
      <AnimatedBackground />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-10 text-center"
        >
          Personalized Service Packages
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Based on your requirements, we have created personalized service packages. 
          Please register with us to avail these exceptional educational opportunities.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full flex justify-center mt-20 px-6 relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-sm py-12 px-8 shadow-2xl max-w-6xl w-full flex flex-col items-center rounded-2xl">
          <h3 className="text-4xl font-bold text-gray-900 text-center bg-clip-text">
            Looking for Top-Notch Education Services?
          </h3>
          <p className="mt-6 text-gray-700 leading-relaxed text-center text-lg max-w-4xl">
            At <a href="https://www.dfmseducation.com/" target="_blank" rel="noopener noreferrer" className="font-bold !text-orange-500 hover:text-orange-600 transition-colors">DFMS</a>, 
            a proud subsidiary of <a href="https://www.meta-grow.in/static/about-us.aspx" target="_blank" rel="noopener noreferrer" className="font-bold !text-orange-500 hover:text-orange-600 transition-colors">METAARTH</a>, 
            we are committed to revolutionizing the education sector with innovative and personalized learning solutions. 
            DFMS offers a wide range of services, including aptitude assessments, career counseling, study management plans, 
            seminars, motivational sessions, and much more.
          </p>
          <motion.a
            href="https://www.dfmseducation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 !text-white px-10 py-4 rounded-xl mt-8 text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Website
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationServices;