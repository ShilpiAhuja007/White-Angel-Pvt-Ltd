import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import logo from '../assets/logo.jpeg'
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award, 
  ChevronRight, 
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Settings,
  DollarSign,
  Building2,
  Globe,
  Eye,
  Heart,
  MapPin,
  Sparkles
} from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [countUp, setCountUp] = useState({
    placements: 0,
    companies: 0,
    success: 0,
    experience: 0
  })

  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)

  const stats = [
    { number: 1000, suffix: '+', label: 'Successful Placements', icon: Users, key: 'placements' },
    { number: 200, suffix: '+', label: 'Partner Companies', icon: Briefcase, key: 'companies' },
    { number: 95, suffix: '%', label: 'Success Rate', icon: TrendingUp, key: 'success' },
    { number: 10, suffix: '+', label: 'Years Experience', icon: Award, key: 'experience' }
  ]

  const services = [
    {
      title: 'Recruitment (Non-IT & IT)',
      subtitle: 'End-to-End Solutions',
      description: 'Comprehensive recruitment services with technically experienced sourcing team and wide database of candidates across all India network.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['End-to-End Services', 'Technical Expertise', 'Wide Database', 'Pan India Network']
    },
    {
      title: 'Textile & Real Estate Recruitment',
      subtitle: 'Industry-Specialized Solutions',
      description: 'Comprehensive talent acquisition for textile manufacturing, garment production, real estate development, and property management sectors.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Textile Manufacturing Experts', 'Garment Industry Professionals', 'Real Estate Specialists', 'Property Management Teams']
    },
    {
      title: 'Volume & Bulk Hiring',
      subtitle: 'Start-Ups & Expansion',
      description: 'Perfect for Start-Ups, New Projects, and Rapid Expansion with bulk recruitment within project timeframe and quick turnaround.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Start-Up Solutions', 'Mass Recruitment', 'Quick Turnaround', 'Project Timeframe']
    },
    {
      title: 'Temporary & Contract Hiring',
      subtitle: 'Flexible Staffing',
      description: 'Immediate deployment of skilled resources with consistent candidate pipeline, nationwide onboarding and competitive pricing.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Immediate Deployment', 'Consistent Pipeline', 'Nationwide Process', 'Competitive Pricing']
    },
    {
      title: 'Recruitment Process Outsourcing',
      subtitle: 'RPO Solutions',
      description: 'Full recruitment management as an extension of your team with flexible on-site or off-site processes and scalable solutions.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Full Management', 'Flexible Processes', 'Scalable Solutions', 'HR Optimization']
    },
    {
      title: 'Executive Search & Headhunting',
      subtitle: 'Board & CEO Level',
      description: 'Specialized hiring for Board and CEO Level positions with deeper industry knowledge and broader networks when finding the most qualified candidate.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Board & CEO Hiring', 'Industry Knowledge', 'Broader Networks', 'Qualified Candidates']
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Gupta',
      position: 'HR Director, Manufacturing Corp',
      content: 'White Angel\'s expertise in both IT and Non-IT recruitment helped us build a diverse, talented team across all verticals.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Priya Mehta',
      position: 'CEO, Tech Solutions',
      content: 'Their payroll management and compliance services have been exceptional. Truly a one-stop solution for all HR needs.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Amit Kumar',
      position: 'Operations Head, FMCG Leader',
      content: 'From executive search to bulk hiring, White Angel has consistently delivered quality candidates within tight deadlines.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const brandPartners = [
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/512px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/960px-HCL_Technologies_logo.svg.png?20100214041014' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/618px-Tech_Mahindra_New_Logo.svg.png?20130808140256' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png?20220319083105' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' }
  ]

  const offerings = [
    {
      title: 'TALENT ACQUISITION',
      description: 'Access a vast network of qualified professionals to bring your hiring vision to life.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'RECRUITMENT CAMPAIGNS',
      description: 'Launch end-to-end recruitment campaigns with world-class sourcing & screening for maximum impact.',
      image: 'https://www.careersingovernment.com/tools/wp-content/uploads/2016/06/interview-preparation.jpg',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'EXECUTIVE SEARCH',
      description: 'Connect with excellent and top-tier leadership talent for Board and C-Suite positions.',
      image: 'https://kleistech.com/wp-content/uploads/2023/03/executive-search.jpg',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'PAYROLL SOLUTIONS',
      description: 'Comprehensive payroll management with full statutory compliance and audit support.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Share Your Brief',
      description: 'Share your requirement & project objective – whether it\'s recruitment, payroll, or staffing. Let\'s craft something that truly resonates with your needs.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-blue-500'
    },
    {
      step: 2,
      title: 'We Hand-pick the Best Partners',
      description: 'With our pan-India aggregation and diverse pool of professionals & partners, we curate the perfect match for your budget, location and project needs.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-green-500'
    },
    {
      step: 3,
      title: 'Advisory & Full Service Support',
      description: 'Collaborate with our team to sharpen ideas, craft precise plans, and commission projects seamlessly. Our strategy and service teams support you at every step.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-purple-500'
    },
    {
      step: 4,
      title: 'Turn-key Execution',
      description: 'From sourcing to onboarding, briefs to completion, we handle in-depth execution to ensure highest quality, budget compliance, and on-time results.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-orange-500'
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current && countUp.placements === 0) {
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

    if (statsRef.current) observer.observe(statsRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)
    if (aboutRef.current) observer.observe(aboutRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 4000)
    
    return () => {
      clearInterval(testimonialInterval)
    }
  }, [testimonials.length])

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 pt-24 lg:py-20 lg:pt-32">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
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
              
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="White Angel Logo" 
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-white/30 animate-pulse hover:scale-110 transition-transform duration-300"
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

              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up">Create talent solutions</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  your way.
                </span>
              </h2>
              
              <p className={`text-lg lg:text-xl text-white font-semibold mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                From comprehensive recruitment solutions and executive search, to payroll management and compliance - 
                <span className="font-semibold text-yellow-500"> we've got you covered.</span>
              </p>

              {/* UPDATED: Three boxes with cool animations */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left perspective-container">
                {[
                  { title: 'Any Role. Any Industry. Any Location.', desc: 'Connect with talent across IT & Non-IT sectors with our pan-India network.' },
                  { title: 'End-to-End HR Solutions', desc: 'From recruitment to payroll management, we handle your complete HR lifecycle.' },
                  { title: 'Permanent & Contract Staffing', desc: 'Flexible staffing solutions for startups, enterprises, and rapid expansion needs.' }
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 overflow-hidden cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: `${0.8 + index * 0.2}s`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center mr-3 group-hover:rotate-360 group-hover:scale-110 transition-all duration-700">
                          <Sparkles className="h-5 w-5 text-white animate-pulse" />
                        </div>
                        <h3 className="font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300 group-hover:translate-x-2 transform">{item.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">{item.desc}</p>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-particle"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-particle" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                ))}
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.4s' }}>
                <Link
                  to="/joinus"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Find Talent Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Slider */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Trusted by Leading <span className="text-blue-600">Brands & Companies</span>
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...brandPartners, ...brandPartners].map((brand, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-8 hover:scale-110 transition-all duration-300"
                  style={{ width: '150px' }}
                >
                  <div className="h-20 flex items-center justify-center bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-12 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-center hidden">
                      <span className="text-sm font-bold text-gray-800">{brand.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Solution Offerings</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive HR services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={offering.title}
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className={`${offering.bgColor} p-8`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <Link 
                    to="/about"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process ensures quality results at every step
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={`desc-${step.step}`}
                  className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-14">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Services We <span className="text-blue-600">Offer</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              We believe in partnering with our clients and delivering a strong foundation of talent to support future business results. 
              We work to understand our clients' specific requirements, beyond just technical skills.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={service.title}
                  className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 text-sm font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className={`flex items-center text-gray-700 transform transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                        style={{ transitionDelay: `${index * 150 + featureIndex * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/about"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
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
              Trusted by <span className="text-blue-600">Leading Organizations</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our track record speaks for itself
            </p>
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

      {/* About White Angel Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">White Angel</span>
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                Expertise in Recruitment and Payroll Practices
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                  White Angel Services is a <strong>premier consulting firm</strong> specializing in recruitment and payroll practices. 
                  We deliver comprehensive manpower solutions to organizations across all verticals.
                </p>
                
                <p className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                  As a <strong>Leading Manpower Consultancy</strong>, our team of top Talent Acquisition Consultants provides 
                  fast, quality, and cost-effective end-to-end manpower solutions to our clients.
                </p>
                
                <p className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                  We handle both <strong>permanent and contract staffing</strong>, employing a team of highly dedicated and 
                  competent consultants from diverse commercial backgrounds.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {[
                  { icon: Globe, text: 'PAN India Sourcing' },
                  { icon: Clock, text: '24/7 Support' },
                  { icon: CheckCircle, text: 'Multi-Industry Expertise' },
                  { icon: CheckCircle, text: 'Complete Compliance' }
                ].map((item, index) => (
                  <div 
                    key={item.text}
                    className={`flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <item.icon className="h-6 w-6 text-green-500" />
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <img 
                src="https://img.freepik.com/premium-photo/portrait-attractive-professional-asian-business-woman-look-camera-outside-office-building_38052-1717.jpg"
                alt="Professional Team"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
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
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', content: 'To empower corporations and business organizations to hire the best talent, offering them a choice from the finest available pool of candidates while maintaining our reputation as a reliable and trustworthy recruitment partner.' },
              { icon: Eye, title: 'Our Vision', content: 'To change the perception of recruitment by devoting ourselves to the happiness of our clients, candidates, and staff, becoming India\'s leading talent solutions provider.' },
              { icon: Heart, title: 'Our Commitment', content: 'We are committed to providing comprehensive HR services including Flexi Staffing, Permanent Staffing, Payroll Processing, and Compliance Management, focusing on customized solutions for our corporate partners.' }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 animate-pulse">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading companies across industries
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 text-center shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                      
                      <div className="flex justify-center mb-6">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-200 hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-6 w-6 text-yellow-400 fill-current animate-pulse" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </blockquote>
                      
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-600 font-medium">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
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
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 
                        0 0 40px rgba(139, 92, 246, 0.3),
                        inset 0 0 20px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 
                        0 0 60px rgba(139, 92, 246, 0.5),
                        inset 0 0 40px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes rotate-360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 1;
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
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .group:hover .group-hover\\:rotate-360 {
          animation: rotate-360 0.7s ease-in-out;
        }

        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }

        .perspective-container {
          perspective: 1000px;
        }

        .group:hover {
          transform: translateY(-10px) rotateX(5deg);
        }
      `}</style>
    </div>
  )
}

export default Home
