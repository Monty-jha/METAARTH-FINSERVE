import React from 'react';
import { Globe2, Wallet, GraduationCap, Stethoscope, Diamond, Code, TrendingUp, PiggyBank, GanttChart, BookOpen, Pill, Gem, ChevronRight, Cloud, Database, Laptop, Brain, School, Users, HeartPulse, Microscope, FlaskRound as Flask, Crown, Scale, Coins } from 'lucide-react';

const MetaarthHome = () => {
  const [activeSection, setActiveSection] = React.useState('metagrow');

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with Navigation */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative pb-24">
        <h1 className="text-6xl font-bold text-white mb-12 text-center">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Metaarth</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
          <button 
            onClick={() => setActiveSection('metagrow')}
            className={`group relative overflow-hidden rounded-2xl p-8 h-64 transition-all duration-500 ${
              activeSection === 'metagrow' ? '!bg-orange-400/20 scale-105' : '!bg-gray-800/50 hover:bg-orange-400/10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"/>
            <div className="relative z-10">
              <Wallet className={`w-12 h-12 mb-4 transition-all duration-500 ${
                activeSection === 'metagrow' ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-400'
              }`} />
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                activeSection === 'metagrow' ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
              }`}>METAGROW</h3>
              <p className="text-gray-400">Financial Excellence & Wealth Management</p>
            </div>
          </button>

          <button 
            onClick={() => setActiveSection('microdigital')}
            className={`group relative overflow-hidden rounded-2xl p-8 h-64 transition-all duration-500 ${
              activeSection === 'microdigital' ? '!bg-blue-400/20 scale-105' : '!bg-gray-800/50 hover:bg-blue-400/10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"/>
            <div className="relative z-10">
              <Code className={`w-12 h-12 mb-4 transition-all duration-500 ${
                activeSection === 'microdigital' ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'
              }`} />
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                activeSection === 'microdigital' ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
              }`}>MICRODIGITAL</h3>
              <p className="text-gray-400">Digital Innovation & Technology Solutions</p>
            </div>
          </button>

          <button 
            onClick={() => setActiveSection('dfms')}
            className={`group relative overflow-hidden rounded-2xl p-8 h-64 transition-all duration-500 ${
              activeSection === 'dfms' ? '!bg-purple-400/20 scale-105' : '!bg-gray-800/50 hover:bg-purple-400/10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"/>
            <div className="relative z-10">
              <GraduationCap className={`w-12 h-12 mb-4 transition-all duration-500 ${
                activeSection === 'dfms' ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'
              }`} />
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                activeSection === 'dfms' ? 'text-purple-400' : 'text-white group-hover:text-purple-400'
              }`}>DFMS</h3>
              <p className="text-gray-400">Digital Future Management System</p>
            </div>
          </button>

          <button 
            onClick={() => setActiveSection('metahealth')}
            className={`group relative overflow-hidden rounded-2xl p-8 h-64 transition-all duration-500 ${
              activeSection === 'metahealth' ? '!bg-green-400/20 scale-105' : '!bg-gray-800/50 hover:bg-green-400/10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"/>
            <div className="relative z-10">
              <Stethoscope className={`w-12 h-12 mb-4 transition-all duration-500 ${
                activeSection === 'metahealth' ? 'text-green-400' : 'text-gray-400 group-hover:text-green-400'
              }`} />
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                activeSection === 'metahealth' ? 'text-green-400' : 'text-white group-hover:text-green-400'
              }`}>METAHEALTH</h3>
              <p className="text-gray-400">Healthcare Innovation & Solutions</p>
            </div>
          </button>

          <button 
            onClick={() => setActiveSection('pingaksha')}
            className={`group relative overflow-hidden rounded-2xl p-8 h-64 transition-all duration-500 ${
              activeSection === 'pingaksha' ? '!bg-yellow-400/20 scale-105' : '!bg-gray-800/50 hover:bg-yellow-400/10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"/>
            <div className="relative z-10">
              <Diamond className={`w-12 h-12 mb-4 transition-all duration-500 ${
                activeSection === 'pingaksha' ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
              }`} />
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                activeSection === 'pingaksha' ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
              }`}>PINGAKSHA</h3>
              <p className="text-gray-400">Luxury Jewelry & Investment Gold</p>
            </div>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-gray-400">
            <ChevronRight className="w-8 h-8 rotate-90" />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className={`min-h-screen pt-4 px-4 -mt-24 transition-all duration-500 ${activeSection === 'metagrow' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-400/10 to-transparent rounded-3xl overflow-hidden border border-orange-400/20 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Wallet className="w-16 h-16 text-orange-400" />
              <div>
                <h2 className="text-4xl font-bold text-white">METAGROW</h2>
                <p className="text-orange-400">Financial Excellence & Wealth Management</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Your Financial Growth Partner</h3>
                <p className="text-gray-300 leading-relaxed">
                  METAGROW is your trusted partner in wealth creation and financial planning. We combine cutting-edge technology with expert financial advice to deliver superior investment solutions tailored to your goals.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">₹1000Cr+</div>
                    <div className="text-gray-400">Assets Managed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">50K+</div>
                    <div className="text-gray-400">Happy Investors</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Mutual Funds</h3>
                <p className="text-gray-400 mb-4">Expert-curated mutual fund portfolios designed for optimal returns across different risk profiles.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Equity Funds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Debt Funds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Hybrid Funds</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <PiggyBank className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">SIP Investments</h3>
                <p className="text-gray-400 mb-4">Systematic Investment Plans for disciplined wealth creation and long-term financial success.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Flexible Plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Top-up Facility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Goal-based SIPs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <GanttChart className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Portfolio Management</h3>
                <p className="text-gray-400 mb-4">Comprehensive portfolio management services with personalized strategies.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Risk Assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Asset Allocation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <span>Regular Rebalancing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`min-h-screen pt-4 px-4 -mt-24 transition-all duration-500 ${activeSection === 'microdigital' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-400/10 to-transparent rounded-3xl overflow-hidden border border-blue-400/20 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Code className="w-16 h-16 text-blue-400" />
              <div>
                <h2 className="text-4xl font-bold text-white">MICRODIGITAL</h2>
                <p className="text-blue-400">Digital Innovation & Technology Solutions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Transforming Business Through Technology</h3>
                <p className="text-gray-300 leading-relaxed">
                  MICRODIGITAL empowers businesses with cutting-edge digital solutions. We specialize in cloud computing, custom software development, and digital transformation services that drive growth and innovation.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Cloud className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Solutions</h3>
                <p className="text-gray-400 mb-4">Enterprise-grade cloud infrastructure and services for modern businesses.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Cloud Migration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>DevOps Services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Cloud Security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Laptop className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Software Development</h3>
                <p className="text-gray-400 mb-4">Custom software solutions tailored to your unique business requirements.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Web Applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Mobile Apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Enterprise Software</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Brain className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Digital Transformation</h3>
                <p className="text-gray-400 mb-4">End-to-end digital transformation services for enterprise evolution.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Digital Strategy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span>Technology Consulting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`min-h-screen pt-4 px-4 -mt-24 transition-all duration-500 ${activeSection === 'dfms' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-3xl overflow-hidden border border-purple-400/20 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <GraduationCap className="w-16 h-16 text-purple-400" />
              <div>
                <h2 className="text-4xl font-bold text-white">DFMS</h2>
                <p className="text-purple-400">Digital Future Management System</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Revolutionizing Education</h3>
                <p className="text-gray-300 leading-relaxed">
                  DFMS is transforming education through innovative digital solutions. We provide comprehensive learning management systems and educational technology solutions that enhance the learning experience.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Educational Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">100K+</div>
                    <div className="text-gray-400">Students Reached</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-gray-400">Institutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <School className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Learning Management</h3>
                <p className="text-gray-400 mb-4">Comprehensive digital learning platforms for modern education.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Virtual Classrooms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Assessment Tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Progress Tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Users className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Skill Development</h3>
                <p className="text-gray-400 mb-4">Industry-focused skill development programs for career growth.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Technical Skills</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Soft Skills</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Career Guidance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <BookOpen className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Educational Content</h3>
                <p className="text-gray-400 mb-4">High-quality educational content and resources for effective learning.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Interactive Courses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Digital Libraries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span>Research Resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`min-h-screen pt-4 px-4 -mt-24 transition-all duration-500 ${activeSection === 'metahealth' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-3xl overflow-hidden border border-green-400/20 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Stethoscope className="w-16 h-16 text-green-400" />
              <div>
                <h2 className="text-4xl font-bold text-white">METAHEALTH</h2>
                <p className="text-green-400">Healthcare Innovation & Solutions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Advancing Healthcare</h3>
                <p className="text-gray-300 leading-relaxed">
                  METAHEALTH is at the forefront of healthcare innovation, combining cutting-edge technology with pharmaceutical expertise to deliver superior healthcare solutions and services.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Healthcare Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">1M+</div>
                    <div className="text-gray-400">Patients Served</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-gray-400">Research Papers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Flask className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Pharmaceutical Research</h3>
                <p className="text-gray-400 mb-4">Advanced research and development in pharmaceutical sciences.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Drug Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Clinical Trials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Quality Control</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <HeartPulse className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Healthcare Technology</h3>
                <p className="text-gray-400 mb-4">Digital solutions for modern healthcare delivery and management.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Telemedicine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Health Records</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4  text-green-400" />
                    <span>Patient Care</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Microscope className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Medical Research</h3>
                <p className="text-gray-400 mb-4">Pioneering research in medical science and healthcare innovation.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Biotech Research</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Medical Devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span>Healthcare AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`min-h-screen pt-4 px-4 -mt-24 transition-all duration-500 ${activeSection === 'pingaksha' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl overflow-hidden border border-yellow-400/20 p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Diamond className="w-16 h-16 text-yellow-400" />
              <div>
                <h2 className="text-4xl font-bold text-white">PINGAKSHA JEWELS</h2>
                <p className="text-yellow-400">Luxury Jewelry & Investment Gold</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Crafting Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pingaksha Jewels combines traditional craftsmanship with modern design to create exquisite gold jewelry. We offer both luxury pieces and investment opportunities in precious metals.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Our Legacy</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">25+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-white">10K+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Crown className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Luxury Collections</h3>
                <p className="text-gray-400 mb-4">Exquisite gold jewelry collections for every occasion.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Bridal Jewelry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Designer Pieces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Custom Orders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Scale className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Investment Gold</h3>
                <p className="text-gray-400 mb-4">Secure your wealth with our gold investment solutions.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Gold Bars</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Gold Coins</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Gold Schemes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <Coins className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Gold Services</h3>
                <p className="text-gray-400 mb-4">Comprehensive services for all your gold needs.</p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Jewelry Exchange</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Gold Appraisal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>Safe Storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaarthHome;