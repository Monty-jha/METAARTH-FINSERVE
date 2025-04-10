import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setSubmitStatus('idle');
  };

  const handleDirectionClick = () => {
    window.open(
      "https://www.google.com/maps/place/DFMS+Investments+pvt+ltd/@26.8431613,80.9492012,21z/data=!3m1!5s0x399bfdb8bdbf1089:0xe970e15e2912fc35!4m15!1m8!3m7!1s0x399bfd0411abfff1:0x87bde02c49c48213!2sSaran+Chambers+2,+Raj+Bhavan+Colony,+The+Mall+Avenue,+Lucknow,+Uttar+Pradesh+226001!3b1!8m2!3d26.8429462!4d80.9492401!16s%2Fg%2F11b77fzfmb!3m5!1s0x399bfd14fe668413:0xd1619899d33cef11!8m2!3d26.843177!4d80.949368!16s%2Fg%2F11t7fbm78f?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!form.current) return;

    setSubmitStatus('loading');
    
    try {
      await emailjs.sendForm(
        'service_wx305v7', // Replace with your Service ID
        'template_2syuj3w', // Replace with your Template ID
        form.current,
        'EZLMfFrnGp4IW5Hs4' // Replace with your Public Key
      );
      
      setSubmitStatus('success');
      form.current.reset();
      setTimeout(() => {
        handleClosePopup();
      }, 2000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-20 relative">
      {/* Blur effect when popup is open */}
      <div className={`transition-all duration-300 ${showPopup ? "blur-md" : ""}`}>
        <h2 className="text-4xl font-bold text-orange-500 mb-10 text-center">Contact Us</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/263/984/small/contact-us-concept.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Contact Information Section */}
          <div className="space-y-8">
            <motion.div
              className="flex items-start gap-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://static.thenounproject.com/png/3483587-200.png" alt="Corporate Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-semibold">Corporate Office:</h2>
                <p className="text-gray-700">
                  METAARTH FINSERVE PRIVATE LIMITED<br />
                  7, Ground Floor, Saran Chamber- II, Park Road, Hazratganj,<br />
                  Lucknow – 226001, India
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRED6ILoTh-KWKU0_PWELqhTxILh7WFdaxpFA&s" alt="Phone Icon" className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-semibold">Call Us</h2>
                <p className="text-gray-700">9839906754</p>
                <p className="text-gray-700">8104958203</p>
                <p className="text-gray-700">8299559257</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-email-icon-download-in-svg-png-gif-file-formats--mail-envelope-message-miscellaneous-pack-icons-1713291.png?f=webp&w=256" alt="Email Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-semibold">Email Us</h2>
                <p className="text-gray-700">metaarthfinserve@gmail.com</p>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="!bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold !hover:bg-orange-700 flex items-center gap-2"
              onClick={handleDirectionClick}
            >
              GET DIRECTION
              <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Location Icon" className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background with blur effect */}
          <div className="absolute inset-0 bg-opacity-100 backdrop-blur-md" onClick={handleClosePopup}></div>

          {/* Popup Content */}
          <motion.div
            className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full relative z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl font-bold hover:text-gray-900"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full font-bold py-3 rounded-lg transition duration-300 ${
                  submitStatus === 'loading' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : '!bg-orange-500 text-white !hover:bg-orange-600'
                }`}
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center font-semibold">Message sent successfully!</p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center font-semibold">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;