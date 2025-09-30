import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActiveRoute = (path) => {
    return location.pathname === path
  }

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/joinus', label: 'Join Us' }
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-blue-600/95 backdrop-blur-md shadow-lg border-b border-white/20' 
            : 'bg-blue-600/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
                onClick={closeMenu}
              >
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="White Angel Logo" 
                    className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/60 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20 group-hover:from-white/20 group-hover:to-white/30 transition-all duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg lg:text-2xl font-bold text-white">
                    WHITE ANGEL
                  </h1>
                  <p className="text-xs lg:text-sm text-white/80 font-medium -mt-1">
                    Recruitment Services
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group ${
                    isActiveRoute(link.path)
                      ? 'text-white bg-white/20 shadow-lg'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActiveRoute(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
              
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen  
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-blue-600/95 backdrop-blur-md border-t border-white/20">
            
            {/* Mobile Logo Section */}
            <div className="flex items-center space-x-3 py-4 border-b border-white/20 mb-4">
              <img 
                src={logo} 
                alt="White Angel Logo" 
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
              />
              <div>
                <h2 className="text-lg font-bold text-white">
                  WHITE ANGEL
                </h2>
                <p className="text-xs text-white/80 font-medium -mt-1">
                  Recruitment Services
                </p>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute(link.path)
                    ? 'text-white bg-white/20 border-l-4 border-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}

export default Navbar
