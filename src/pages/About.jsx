import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Building2,
  Factory,
  Cpu,
  Settings,
  DollarSign,
  ArrowRight,
  Quote,
  Calendar,
  Globe,
  Handshake,
  Shield,
  Database,
  Network,
  Clock,
  UserCheck,
  Headphones,
  FileText,
  Trophy,
  Linkedin,
  MessageCircle,
  Zap,
  Star,
  MapPin,
  ChevronRight,
  Play,
  Sparkles
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeMission, setActiveMission] = useState(0)
  const [countUp, setCountUp] = useState({
    experience: 0,
    placements: 0,
    clients: 0,
    success: 0
  })

  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const missionRef = useRef(null)

  // Updated stats based on client data
  const stats = [
    { number: 10, suffix: '+', label: 'Years Experience', key: 'experience', icon: Award },
    { number: 1000, suffix: '+', label: 'Successful Placements', key: 'placements', icon: Users },
    { number: 200, suffix: '+', label: 'Happy Clients', key: 'clients', icon: Building2 },
    { number: 95, suffix: '%', label: 'Success Rate', key: 'success', icon: Trophy }
  ]

  // Complete services based on client information
  const services = [
    {
      icon: Users,
      title: 'Recruitment (Non-IT & IT)',
      subtitle: 'End-to-End Comprehensive Services',
      description: 'Technically experienced sourcing team with wide database of candidates and All India network for quick processing response.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['End-to-End Services', 'Technical Expertise', 'Wide Database', 'All India Network']
    },
    {
      icon: Target,
      title: 'Executive Search & Headhunting',
      subtitle: 'Board & CEO Level Hiring',
      description: 'Deeper industry and domain knowledge with broader networks and reach. When the challenge is finding the most qualified candidate.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Board & CEO Hiring', 'Industry Knowledge', 'Broader Networks', 'Qualified Candidates']
    },
    {
      icon: TrendingUp,
      title: 'Volume & Bulk Hiring',
      subtitle: 'Start-Ups & Rapid Expansion',
      description: 'Well suited for Start-Ups, New Projects, and Rapid Expansion. Bulk/Mass recruitment within project timeframe with quick turnaround.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Start-Up Solutions', 'Mass Recruitment', 'Quick Turnaround', 'Project Timeline']
    },
    {
      icon: Clock,
      title: 'Temporary & Contract Hiring',
      subtitle: 'Flexible Staffing Solutions',
      description: 'Immediate deployment of skilled resources with consistent candidate pipeline, nationwide onboarding and competitive pricing.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Immediate Deployment', 'Consistent Pipeline', 'Nationwide Process', 'Competitive Pricing']
    },
    {
      icon: Settings,
      title: 'Recruitment Process Outsourcing',
      subtitle: 'RPO Solutions',
      description: 'Full recruitment management as an extension of your team with flexible on-site or off-site processes and scalable staffing solutions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Full Management', 'Flexible Processes', 'Scalable Solutions', 'HR Optimization']
    },
    {
      icon: DollarSign,
      title: 'Payroll Management',
      subtitle: 'Complete Compliance',
      description: 'End-to-End Payroll Services with statutory compliance, audit services and registration/renewal under various labor laws.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Payroll Services', 'Statutory Compliance', 'Audit Services', 'Labor Law Registration']
    }
  ]

  // Mission, Vision, Commitment
  const missionValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower corporations and business organizations to hire the best talent, offering them a choice from the finest available pool of candidates. As a Top Placement Agency, White Angel Services assures value by identifying and nurturing exceptionally talented professionals.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Eye,
      title: 'Our Vision', 
      description: 'To change the perception of recruitment by devoting ourselves to the happiness of our clients, candidates and staff. We aim to be India\'s leading talent solutions provider, contributing to the success of both clients and candidates.',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: Heart,
      title: 'Our Commitment',
      description: 'We are committed to providing HR services including Flexi Staffing, Permanent Staffing, Payroll Processing, Background Checks, Compliance Management, and customized solutions to Corporates while focusing on providing jobs to potential job seekers.',
      gradient: 'from-purple-500 to-purple-700'
    }
  ]

  // Industry expertise
  const industries = [
    {
      icon: Cpu,
      title: 'IT & Technology',
      description: 'Comprehensive IT recruitment from technical roles to leadership positions.',
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Building2,
      title: 'Non-IT Sectors', 
      description: 'Multi-industry expertise across manufacturing, FMCG, healthcare, and finance.',
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial recruitment spanning production, operations, and management.',
      color: 'bg-orange-500', 
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current && countUp.experience === 0) {
              // Animate stats counters
              stats.forEach((stat) => {
                let startValue = 0
                const endValue = stat.number
                const duration = 2500
                const increment = endValue / (duration / 16)
                
                const counter = setInterval(() => {
                  startValue += increment
                  
                  if (startValue >= endValue) {
                    setCountUp(prev => ({
                      ...prev,
                      [stat.key]: endValue
                    }))
                    clearInterval(counter)
                  } else {
                    setCountUp(prev => ({
                      ...prev,
                      [stat.key]: Math.floor(startValue)
                    }))
                  }
                }, 16)
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe elements
    if (statsRef.current) observer.observe(statsRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)
    if (missionRef.current) observer.observe(missionRef.current)

    return () => observer.disconnect()
  }, [])

  // Auto-rotate services and mission values
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 4000)

    const missionInterval = setInterval(() => {
      setActiveMission(prev => (prev + 1) % missionValues.length)
    }, 5000)
    
    return () => {
      clearInterval(serviceInterval)
      clearInterval(missionInterval)
    }
  }, [services.length, missionValues.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Hero Section - Modern Animated */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 pt-24 lg:py-20 lg:pt-32">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Animated Logo */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="White Angel Logo" 
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-white/30 animate-pulse hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-bounce" />
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl lg:text-3xl font-bold animate-fade-in-up">WHITE ANGEL</h1>
                  <p className="text-white/80 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    RECRUITMENT SERVICES PVT LTD
                  </p>
                  <p className="text-white/60 text-xs animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <MapPin className="h-3 w-3 inline mr-1" />
                    Based in Noida, India
                  </p>
                </div>
              </div>
              
              {/* Main Headline with Typewriter Effect */}
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up">Welcome to</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  White Angel
                </span>
                <span className="block text-2xl lg:text-3xl font-normal text-white/90 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Expertise in Recruitment and Payroll Practices
                </span>
              </h2>
              
              {/* Animated Description */}
              <div className="space-y-4 mb-10">
                <p className={`text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
                  White Angel Services is a <span className="font-bold text-yellow-300">premier consulting firm</span> specializing in recruitment and payroll practices.
                </p>
                
                <p className={`text-base lg:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1s' }}>
                  We deliver comprehensive manpower solutions to organizations across all verticals with <span className="font-semibold">PAN India sourcing capabilities</span>.
                </p>
              </div>

              {/* Animated Key Points */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Users, title: 'Leading Manpower Consultancy', desc: 'Top Talent Acquisition Consultants' },
                  { icon: Globe, title: 'PAN India Network', desc: 'All India sourcing capabilities' },
                  { icon: Shield, title: '10+ Years Experience', desc: 'Proven track record of success' }
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${1.2 + index * 0.2}s` }}
                  >
                    <item.icon className="h-8 w-8 mb-3 mx-auto animate-bounce" style={{ animationDelay: `${index * 0.5}s` }} />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323C6FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Achievement</span> Numbers
            </h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations nationwide</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={stat.label}
                  className={`text-center group transform transition-all duration-700 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl mb-4 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 relative">
                    <Icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-yellow-800" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                    {countUp[stat.key]}{stat.suffix}
                  </div>
                  
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Showcase */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe in partnering with our clients and delivering a strong foundation of talent to support future business results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Service Navigation Cards */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className={`p-6 rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeService === index 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl scale-105' 
                        : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-2xl ${activeService === index ? 'bg-white/20 animate-pulse' : 'bg-blue-100 text-blue-600'} transition-all duration-300`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-semibold mb-2 ${activeService === index ? 'text-yellow-300' : 'text-blue-600'}`}>
                          {service.subtitle}
                        </div>
                        <h3 className={`text-xl font-bold mb-3 ${activeService === index ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`leading-relaxed text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                          {service.description.substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Active Service Display */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 animate-fade-in-up">
                      {services[activeService].title}
                    </h3>
                    <p className="text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {services[activeService].subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-3 animate-bounce">
                    {React.createElement(services[activeService].icon, { className: "h-6 w-6" })}
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {services[activeService].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {services[activeService].features.map((feature, idx) => (
                      <div 
                        key={feature} 
                        className={`flex items-center space-x-3 transform transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Commitment - Interactive Section */}
      <section ref={missionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-yellow-300">Core Values</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence in recruitment and HR services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {missionValues.map((value, index) => {
              const Icon = value.icon
              const isActive = activeMission === index
              
              return (
                <div 
                  key={value.title}
                  className={`group cursor-pointer transform transition-all duration-500 ${
                    isActive ? 'scale-105 lg:scale-110' : 'hover:scale-105'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActiveMission(index)}
                >
                  <div className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-500 h-full ${
                    isActive ? 'bg-white/20 shadow-2xl' : 'hover:bg-white/15'
                  }`}>
                    {/* Animated Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                      isActive ? 'bg-white/30 animate-pulse' : 'bg-white/20 group-hover:bg-white/25'
                    }`}>
                      <Icon className={`h-8 w-8 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isActive ? 'text-yellow-300' : 'text-white group-hover:text-yellow-200'
                    }`}>
                      {value.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Company Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-yellow-300 mb-6">
                About White Angel Recruitment Services
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Building2 className="h-6 w-6 mr-2 text-blue-300" />
                    Our Expertise
                  </h4>
                  <p className="text-white/90 leading-relaxed mb-4">
                    As a <strong>Top Recruitment Agency</strong>, we handle both permanent and contract staffing, 
                    employing a team of highly dedicated and competent consultants from diverse commercial backgrounds.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    With valuable experience and thorough knowledge across a broad range of industries, 
                    we offer unparalleled, prompt, and effective human resource and manpower services.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Target className="h-6 w-6 mr-2 text-green-300" />
                    Our Approach
                  </h4>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We strive to understand the intricacies of our clients' needs, their corporate culture, 
                    and organizational direction. Our hallmark is outstanding customer service, backed by 
                    best practices and sophisticated technology.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    In today's dynamic business environment, having the right people is crucial for success 
                    and long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized in multiple <strong>Non IT/IT</strong> sectors with proven track record
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div 
                  key={industry.title}
                  className={`group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transform transition-all duration-700 hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image}
                      alt={`${industry.title} Industry`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 p-4 rounded-2xl text-white ${industry.color} transform transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Star className="h-4 w-4 text-white" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-bounce mb-8">
              <Trophy className="h-20 w-20 mx-auto text-yellow-400" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Experience The
              <span className="block text-yellow-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                WHITE ANGEL Advantage
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <strong>10+ years expertise</strong> • <strong>PAN India network</strong> • <strong>24×7 support</strong> • 
              <strong> Complete HR solutions</strong> • <strong>Statutory compliance</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <Link
                to="/joinus"
                className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/25 inline-flex items-center justify-center"
              >
                <Users className="mr-3 h-6 w-6" />
                Start Your Search Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="mailto:w27072023@gmail.com"
                className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Headphones className="mr-3 h-6 w-6" />
                Get 24×7 Support
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center text-blue-200 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Shield className="h-5 w-5 mr-2" />
              <span>Trusted by 200+ companies nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default About
