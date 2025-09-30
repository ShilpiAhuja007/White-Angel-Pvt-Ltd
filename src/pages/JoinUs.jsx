import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Clock,
  Handshake,
  FileText,
  Send,
  Zap,
  Trophy,
  Building2,
  UserPlus,
  Rocket,
  Diamond,
  Shield,
  MapPin,
  Sparkles,
  ChevronRight,
  MessageCircle,
  ThumbsUp
} from "lucide-react";

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [countUp, setCountUp] = useState({
    companies: 0,
    support: 0,
    success: 0,
    premium: 0
  });

  const statsRef = useRef(null);
  const processRef = useRef(null);
  const storiesRef = useRef(null);

  const googleFormUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqK9epcFicmJOGyG-DORcpKCOFktmm8HzmH1mVkKTAXVjoww/formResponse";

  // Add the employer form URL
  const employerFormUrl = 
    "https://docs.google.com/forms/d/e/1FAIpQLSdPH_34fwwzZZQ-m9Z27XIF_Las1LgKbtY5Qaw6Xb0hOsa50Q/viewform";

  const opportunities = [
    {
      title: "Find Your Dream Job",
      subtitle: "Multiple Industries",
      description:
        "Explore exciting opportunities across Textile, IT, Manufacturing, FMCG sectors and Real Estate with our extensive network.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Premium Job Matching",
        "Career Guidance",
        "Interview Support",
        "Salary Negotiation",
      ],
    },
    {
      title: "Fast-Track Your Career",
      subtitle: "10-Day Process",
      description:
        "Our lightning-fast recruitment process gets you from application to offer in just 10 days with dedicated support.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "24-48 Hr Response",
        "Dedicated SPOC",
        "Interview Coaching",
        "Quick Placement",
      ],
    },
    {
      title: "Global Network Access",
      subtitle: "30K+ Connections",
      description:
        "Leverage our vast network of 30K+ LinkedIn connections and premium job portals for maximum exposure.",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Global Reach",
        "Premium Portals",
        "Network Expansion",
        "Industry Connections",
      ],
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: "Top Companies",
      desc: "200+ partner organizations",
      count: 200,
      key: "companies"
    },
    { 
      icon: Clock, 
      title: "24/7 Support", 
      desc: "Round-the-clock assistance",
      count: 24,
      key: "support"
    },
    { 
      icon: Star, 
      title: "95% Success Rate", 
      desc: "Proven track record",
      count: 95,
      key: "success"
    },
    {
      icon: Diamond,
      title: "Premium Service",
      desc: "VIP candidate treatment",
      count: 100,
      key: "premium"
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TechCorp",
      salary: "12 LPA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "WHITE ANGEL made my career transition smooth and successful. Their support was exceptional!"
    },
    {
      name: "Rajesh Kumar",
      role: "Sales Manager",
      company: "FMCG Leader",
      salary: "15 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Found my dream job in just 8 days! The team was incredibly professional and supportive."
    },
    {
      name: "Anita Singh",
      role: "HR Director",
      company: "MNC Giant",
      salary: "18 LPA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Excellent service! They understood my requirements perfectly and delivered beyond expectations."
    },
  ];

  const processSteps = [
    {
      title: "Profile Delivery",
      description: "24-48 hours to deliver qualified profiles against your JD requirements",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "bg-blue-600"
    },
    {
      title: "Interview Coordination",
      description: "3-7 days for all levels of interviews with dedicated project management",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "bg-green-600"
    },
    {
      title: "Onboarding Support",
      description: "Continuous follow-up for offer acceptance, resignation, and smooth joining",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "bg-purple-600"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current && countUp.companies === 0) {
              // Animate benefit counters
              benefits.forEach((benefit) => {
                let startValue = 0;
                const endValue = benefit.count;
                const duration = 2000;
                const increment = endValue / (duration / 16);
                
                const counter = setInterval(() => {
                  startValue += increment;
                  
                  if (startValue >= endValue) {
                    setCountUp(prev => ({
                      ...prev,
                      [benefit.key]: endValue
                    }));
                    clearInterval(counter);
                  } else {
                    setCountUp(prev => ({
                      ...prev,
                      [benefit.key]: Math.floor(startValue)
                    }));
                  }
                }, 16);
              });
            }
          }
        })
      },
      { threshold: 0.1 }
    );

    // Observe elements
    if (statsRef.current) observer.observe(statsRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (storiesRef.current) observer.observe(storiesRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % opportunities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [opportunities.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - Enhanced with Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 pt-24 lg:py-20 lg:pt-32">
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Animated Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={logo}
                    alt="White Angel Logo"
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white/30 animate-pulse hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 text-blue-800 rounded-full p-2 animate-bounce">
                      <Star className="h-6 w-6" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -left-1">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up">Join Our</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Success Story
                </span>
              </h1>

              <p className={`text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                Ready to find your{" "}
                <span className="font-bold text-yellow-300">dream job</span>?
                Join thousands of professionals who found their perfect match
                with WHITE ANGEL!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
                {[
                  { icon: Users, label: '1000+ Placements', color: 'text-green-300' },
                  { icon: Building2, label: '200+ Companies', color: 'text-blue-300' },
                  { icon: Clock, label: '10-Day Process', color: 'text-yellow-300' },
                  { icon: Globe, label: '30K+ Network', color: 'text-purple-300' }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <item.icon className={`h-6 w-6 mx-auto mb-2 ${item.color}`} />
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 flex items-center"
                >
                  <FileText className="mr-3 h-6 w-6" />
                  Submit Your Details
                  <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center text-white/80 text-lg">
                  <Clock className="h-5 w-5 mr-2 animate-bounce" />
                  <span>10-Day Fast Track Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Showcase - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Why Choose <span className="text-blue-600">WHITE ANGEL</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              Experience the difference with our proven 10+ year track record
              and 24×7 support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Opportunity Cards */}
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <div
                    key={opportunity.title}
                    className={`p-6 rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeCard === index
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl scale-105"
                        : "bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                    } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-4 rounded-2xl transition-all duration-300 ${
                          activeCard === index
                            ? "bg-white/20 animate-pulse"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-semibold mb-2 ${
                            activeCard === index
                              ? "text-yellow-300"
                              : "text-blue-600"
                          }`}
                        >
                          {opportunity.subtitle}
                        </div>
                        <h3
                          className={`text-2xl font-bold mb-3 ${
                            activeCard === index
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {opportunity.title}
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            activeCard === index
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          {opportunity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Opportunity Display - Enhanced */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={opportunities[activeCard].image}
                    alt={opportunities[activeCard].title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 animate-fade-in-up">
                      {opportunities[activeCard].title}
                    </h3>
                    <p className="text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {opportunities[activeCard].subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-3 animate-bounce">
                    {React.createElement(opportunities[activeCard].icon, { className: "h-6 w-6" })}
                  </div>
                </div>

                {/* Benefits */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {opportunities[activeCard].benefits.map((benefit, idx) => (
                      <div
                        key={benefit}
                        className={`flex items-center space-x-3 transform transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Enhanced with Counter Animation */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
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
              Why <span className="text-blue-600">Professionals Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const displayValue = benefit.key === 'support' ? `${countUp[benefit.key]}/7` : 
                                  benefit.key === 'success' ? `${countUp[benefit.key]}%` :
                                  `${countUp[benefit.key]}+`;
              
              return (
                <div
                  key={benefit.title}
                  className={`text-center group transform transition-all duration-700 hover:scale-110 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-yellow-800" fill="currentColor" />
                    </div>
                  </div>

                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                    {displayValue}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 font-medium">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories - Enhanced */}
      <section ref={storiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who found their dream careers with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.name}
                className={`group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transform transition-all duration-700 hover:-translate-y-3 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-20 h-20 rounded-full mx-auto ring-4 ring-blue-200 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                      <ThumbsUp className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {story.role} at {story.company}
                  </p>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-6 inline-block animate-pulse">
                    {story.salary}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <MessageCircle className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 italic text-sm">
                      "{story.testimonial}"
                    </p>
                  </div>

                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow - Enhanced */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined 10-day recruitment process with dedicated support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.title} 
                className={`text-center group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8 overflow-hidden rounded-3xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg animate-bounce`}>
                    {index + 1}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>{step.description.split(' ')[0]}</strong> {step.description.split(' ').slice(1).join(' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced with Employer Button */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
              <Rocket className="h-20 w-20 mx-auto text-yellow-400" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Your Dream Job
              <span className="block text-yellow-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Awaits You!
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Don't wait! Submit your details now and let our expert team
              connect you with amazing opportunities.
              <strong className="text-yellow-300">
                {" "}
                24×7 support • 10-day process • 95% success rate
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              {/* Job Seeker Button */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 flex items-center"
              >
                <UserPlus className="mr-3 h-7 w-7" />
                Submit Your Resume Now
                <Send className="ml-3 h-7 w-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              {/* Employer Button - NEW */}
              <a
                href={employerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-white/25"
              >
                <Building2 className="mr-3 h-7 w-7" />
                Employer's Query
                <ChevronRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center text-blue-200 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Shield className="h-5 w-5 mr-2" />
              <span>Your information is 100% secure and confidential</span>
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
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default JoinUs
