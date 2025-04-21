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
  { name: "Home", path: "/Home" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "#", isDropdown: true },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  { name: "IT Services", path: "/it-services", description: "Professional IT solutions and support", icon: ComputerDesktopIcon },
  { name: "Education", path: "/education-services", description: "Quality educational services", icon: AcademicCapIcon },
  { name: "Pharmaceuticals", path: "/pharmaceutical-services", description: "Healthcare and medical solutions", icon: BeakerIcon },
  { name: "Gold Investment", path: "/gold-investment-services", description: "Secure gold investment options", icon: CurrencyDollarIcon },
  { name: "Mutual Funds", path: "/financial-services", description: "Expert mutual fund investment solutions", icon: BanknotesIcon }
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
};

const mobileMenuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const serviceButtonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          serviceButtonRef.current && !serviceButtonRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/Home" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block"
            >
              <img 
                src={logo} 
                alt="Your Company Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-4">
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
                  className="group bg-white !text-orange-500 border border-orange-500 px-2 sm:px-3 lg:px-4 xl:px-5 py-1.5 sm:py-2 rounded-full font-semibold shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center hover:bg-orange-500 hover:text-white text-xs sm:text-sm lg:text-base whitespace-nowrap"
                >
                  <span className="group-hover:text-white">{item.name}</span>
                  {item.isDropdown && (
                    <ChevronDownIcon className={`ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180 group-hover:text-white" : "text-orange-500 group-hover:text-white"}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {item.isDropdown && dropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 md:left-0 mt-2 w-64 sm:w-72 lg:w-80 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50"
                    >
                      <div className="py-2">
                        <motion.h3 className="px-4 py-2 text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-100 bg-gray-50">
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
                                    className="flex items-start px-4 py-2 hover:bg-orange-50 transition-colors duration-200"
                                    onClick={() => {
                                      setDropdownOpen(false);
                                      window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                  >
                                    <Icon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                                    <div className="ml-3">
                                      <div className="text-sm sm:text-base text-gray-800 font-medium">{service.name}</div>
                                      <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{service.description}</div>
                                    </div>
                                  </a>
                                ) : (
                                  <Link
                                    to={service.path}
                                    className="flex items-start px-4 py-2 hover:bg-orange-50 transition-colors duration-200"
                                    onClick={() => {
                                      setDropdownOpen(false);
                                      window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                  >
                                    <Icon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                                    <div className="ml-3">
                                      <div className="text-sm sm:text-base text-gray-800 font-medium">{service.name}</div>
                                      <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{service.description}</div>
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={serviceButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-orange-500 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 w-full sm:w-3/4 md:max-w-md bg-white shadow-xl md:hidden z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <Link 
                to="/Home" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block"
              >
                <img src={logo} alt="Your Company Logo" className="h-8 sm:h-10 w-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-orange-500 hover:text-orange-600 hover:bg-orange-50 focus:outline-none"
              >
                <XMarkIcon className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="py-3 px-2 sm:px-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="mb-1 sm:mb-2">
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 text-sm sm:text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-2 sm:pl-4"
                          >
                            {services.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="flex items-start px-3 sm:px-4 py-2.5 text-xs sm:text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }}
                                >
                                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5" />
                                  <div>
                                    <div className="font-medium">{service.name}</div>
                                    <div className="text-xs text-gray-500">{service.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 sm:px-4 py-2.5 text-sm sm:text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}