import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Join Us', path: '/joinus' }
  ]

  const services = [
    'Executive Search',
    'Mass Recruitment', 
    'Talent Acquisition',
    'HR Consulting',
    'Campus Recruitment',
    'Contract Staffing'
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Connected with Opportunities
            </h3>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Look our newsletter for the latest job openings, career tips, and industry insights.
            </p>
            
            
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src={logo} 
                    alt="White Angel Logo" 
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-white/20"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">WHITE ANGEL</h2>
                    <p className="text-blue-200 text-sm font-medium">RECRUITMENT SERVICES</p>
                  </div>
                </div>
                
                <p className="text-blue-100 leading-relaxed mb-8">
                  WHITE ANGEL RECRUITMENT SERVICES (OPC) PRIVATE LIMITED - Your trusted partner in connecting exceptional talent with outstanding opportunities across industries.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <a 
                        href="mailto:w27072023@gmail.com" 
                        className="text-white hover:text-blue-200 transition-colors font-medium"
                      >
                        w27072023@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <a 
                        href="tel:+919717091400" 
                        className="text-white hover:text-blue-200 transition-colors font-medium"
                      >
                        +91 97170 91400
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 text-sm">Address</p>
                      <address className="text-white not-italic leading-relaxed">
                        R G Residency J-1504,<br />
                        Sector 120, Noida
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 text-sm">Business Hours</p>
                      <p className="text-white">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors text-sm">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="text-blue-200 hover:text-white transition-colors text-sm">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookies" className="text-blue-200 hover:text-white transition-colors text-sm">
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

              
              </div>

              {/* Social & Additional Info */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>
                
                <div className="flex space-x-4 mb-8">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Industry Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      {['IT', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education'].map((industry) => (
                        <span 
                          key={industry}
                          className="px-3 py-1 bg-white/10 text-blue-100 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm">
                © {currentYear} WHITE ANGEL RECRUITMENT SERVICES (OPC) PRIVATE LIMITED. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-2 text-blue-200 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
                <span>by</span>
                <a 
                  href="https://www.techbro24.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 font-medium transition-colors"
                >
                  TechBro24
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
