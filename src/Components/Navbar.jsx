import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Metaarth.png";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "#", isDropdown: true },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  { name: "IT Services", path: "/it-services", description: "Professional IT solutions and support", icon: ComputerDesktopIcon },
  { name: "Education", path: "/education-services", description: "Quality educational services", icon: AcademicCapIcon },
  { name: "Pharmaceuticals", path: "/pharmaceuticals", description: "Healthcare and medical solutions", icon: BeakerIcon },
  { name: "Gold Investment", path: "/gold-investment-services", description: "Secure gold investment options", icon: CurrencyDollarIcon },
  { name: "Mutual Funds", path: "https://meta-grow.in/", description: "Expert mutual fund investment solutions", icon: BanknotesIcon }
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Your Company Logo" className="h-10 sm:h-12 md:h-15 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map(item => (
              <div key={item.name} className="relative" ref={item.isDropdown ? dropdownRef : null}>
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.isDropdown) {
                      e.preventDefault();
                      setDropdownOpen(prev => !prev);
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="group bg-white text-orange-500 border border-orange-500 px-3 lg:px-5 py-2 rounded-full font-semibold shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center hover:bg-orange-500 hover:text-white text-sm lg:text-base"
                >
                  <span className="group-hover:text-white">{item.name}</span>
                  {item.isDropdown && (
                    <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180 group-hover:text-white" : "text-orange-500 group-hover:text-white"}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {item.isDropdown && dropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 md:left-0 mt-3 w-72 lg:w-80 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden"
                    >
                      <div className="py-2">
                        <motion.h3 className="px-4 py-3 text-lg font-semibold text-gray-800 border-b border-gray-100 bg-gray-50">
                          Our Services
                        </motion.h3>
                        <div className="py-1">
                          {services.map(service => {
                            const Icon = service.icon;
                            const isExternal = service.path.startsWith("http");
                            return (
                              <motion.div key={service.name}>
                                {isExternal ? (
                                  <a
                                    href={service.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                                    onClick={() => {
                                      setDropdownOpen(false);
                                      window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                  >
                                    <Icon className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                                    <div className="ml-3">
                                      <div className="text-gray-800 font-medium">{service.name}</div>
                                      <div className="text-sm text-gray-500 mt-0.5">{service.description}</div>
                                    </div>
                                  </a>
                                ) : (
                                  <Link
                                    to={service.path}
                                    className="flex items-start px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                                    onClick={() => {
                                      setDropdownOpen(false);
                                      window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                  >
                                    <Icon className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                                    <div className="ml-3">
                                      <div className="text-gray-800 font-medium">{service.name}</div>
                                      <div className="text-sm text-gray-500 mt-0.5">{service.description}</div>
                                    </div>
                                  </Link>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
