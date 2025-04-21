import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-100 pt-6 sm:pt-8 md:pt-10">
      {/* Top Section */}
      <div className="w-screen px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10 flex flex-col md:flex-row justify-between">
        {/* Left Section: Company Info */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg sm:text-xl font-bold text-red-600 flex items-center">
            META<span className="text-orange-500">ARTH</span>
          </h2>
          <h3 className="text-orange-500 font-semibold mt-2 text-sm sm:text-base">REGISTERED OFFICE</h3>
          <p className="text-gray-700 text-xs sm:text-sm mt-2">
            Metaarth Finserve Pvt Ltd <br />
            7 Ground Floor, Saran Chamber-II, <br />
            Park road, Hazratganj, <br />
            Lucknow-226001
          </p>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-orange-500 font-semibold text-sm sm:text-base">CALL US @</h3>
          <p className="text-gray-700 text-xs sm:text-sm">+919839906754</p>

          <h3 className="text-orange-500 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">EMAIL US @</h3>
          <p className="!text-gray-700 text-xs sm:text-sm">
            <a href="mailto:metaarthfinserve@gmail.com" className="!hover:text-gray-500 break-words">
              metaarthfinserve@gmail.com
            </a>
          </p>

          <h3 className="text-orange-500 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">USEFUL LINKS</h3>
          <div className="!text-black text-xs sm:text-sm flex flex-wrap">
            <a href="https://www.camsonline.com" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">CAMS</a>
            <span className="mx-1">|</span>
            <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">AMFI</a>
            <span className="mx-1">|</span>
            <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">BSE</a>
            <span className="mx-1">|</span>
            <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">NSE</a>
            <span className="mx-1">|</span>
            <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">SEBI</a>
            <span className="mx-1">|</span>
            <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">RBI</a>
            <span className="mx-1">|</span>
            <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="!hover:text-gray-500">IRDA</a>
          </div>
        </div>

        {/* Right Section: Social Links & Disclaimer */}
        <div className="md:w-1/3 mt-6 md:mt-0 flex flex-col items-center md:items-end">
          {/* Social Icons */}
          <div className="flex space-x-4 md:space-x-5">
            <a 
              href="https://www.facebook.com/metagrow1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-xl sm:text-2xl"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.linkedin.com/in/metaarth-finserve-008140267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoB2iAAuyQpm6pQvpMB3pTQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xl sm:text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.instagram.com/metagrow__/?fbclid=IwZXh0bgNhZW0CMTEAAR2rS7oltTE6NZ2diyC0sQyIVzCjOJ1m0oHfHzf2GKQmfML6BouWTZCF0kY_aem_5FTm7QHys2tYVsdewxni_A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 text-xl sm:text-2xl"
            >
              <FaInstagram />
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-2">
            <a 
              href="https://play.google.com/store/apps/details?id=com.mf.metaarth" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-8 sm:h-10 mb-0 sm:mb-2"
              />
            </a>
            <a 
              href="https://apps.apple.com/in/app/meta-grow/id6450893872" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-8 sm:h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-screen bg-gray-900 text-white py-3 sm:py-4 text-center">
        <div className="px-2 sm:px-4 text-xs sm:text-sm">
          <span className="inline-block">Copyright © 2025 Metaarth Finserve Pvt Ltd. All rights Reserved.</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="inline-block">Designed, Developed & Content Powered by Accord Fintech Pvt.Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;