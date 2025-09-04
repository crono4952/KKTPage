import React, { useState } from 'react';
import { Menu, X, Star, Zap, Palette, Smartphone, Globe, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/KKT Logo 2.jpg" 
                alt="KKT Network Logo" 
                className="h-14 w-14 rounded-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">About</a>
              <a href="#portfolio" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">Home</a>
                <a href="#services" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">Services</a>
                <a href="#about" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">About</a>
                <a href="#portfolio" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">Portfolio</a>
                <a href="#contact" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <HeroGeometric 
          title1="Crafting Digital"
          title2="Experiences"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Our Services</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              What We Create
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From stunning websites to powerful web applications, we deliver comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Website Development",
                description: "Custom websites built with modern technologies, optimized for performance and user experience."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First Design",
                description: "Responsive designs that look perfect on every device, from smartphones to desktop computers."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Applications",
                description: "Complex web applications with advanced functionality, databases, and user management systems."
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces designed to engage users and drive conversions."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Brand Identity",
                description: "Complete brand packages including logos, color schemes, and visual guidelines."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Digital Strategy",
                description: "Comprehensive digital strategies to help your business grow and succeed online."
              }
            ].map((service, index) => (
              <div key={index} className="group bg-stone-50 rounded-2xl p-8 hover:bg-stone-800 transition-all duration-300 hover:shadow-xl">
                <div className="text-amber-600 group-hover:text-amber-400 mb-4 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-300 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wider">About KKT Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Passionate About Digital Excellence
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                At KKT Network, we believe every business deserves a digital presence that truly represents their brand. Our team of creative designers and skilled developers work together to create websites that not only look amazing but perform exceptionally.
              </p>
              <p className="text-stone-300 leading-relaxed mb-8">
                With years of experience in web development, we've helped businesses of all sizes establish their online presence and achieve their digital goals. From startups to established enterprises, we bring the same level of dedication and expertise to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">150+</div>
                  <div className="text-stone-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-stone-300">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-stone-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-stone-800 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Creative Excellence</h4>
                      <p className="text-stone-300 text-sm">Award-winning designs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Technical Expertise</h4>
                      <p className="text-stone-300 text-sm">Latest technologies</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Global Standards</h4>
                      <p className="text-stone-300 text-sm">World-class quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Our Portfolio</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Explore some of our latest work and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Corporate Website",
                category: "Brand Identity",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Mobile App Landing",
                category: "UI/UX Design",
                image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Restaurant Chain",
                category: "Web Development",
                image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Tech Startup",
                category: "Full Stack",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Creative Agency",
                category: "Brand Design",
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-stone-100 hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-amber-400 text-sm font-medium mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-amber-400 mb-4">
              <Star className="w-6 h-6 fill-current animate-pulse" />
              <Star className="w-4 h-4 fill-current animate-pulse delay-100" />
              <Star className="w-6 h-6 fill-current animate-pulse delay-200" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your
              <span className="block text-amber-400">Digital Presence?</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. Your success is our mission.
            </p>
            <button className="group bg-amber-500 text-stone-800 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 mx-auto">
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Client Testimonials</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with KKT Network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "KKT Network transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations. Our website traffic increased by 300% within the first month!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, GreenEats",
                content: "Working with KKT Network was a game-changer for our restaurant chain. They created a beautiful, functional website that perfectly captures our brand essence. Highly recommended!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, StyleCo",
                content: "The team at KKT Network is incredibly talented and professional. They delivered our e-commerce platform on time and within budget. The results speak for themselves - our online sales doubled!",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Owner, Thompson Law Firm",
                content: "KKT Network created a sophisticated website that perfectly represents our law firm's professionalism. The user experience is exceptional, and we've seen a significant increase in client inquiries.",
                rating: 5
              },
              {
                name: "Lisa Park",
                role: "Creative Director, ArtSpace",
                content: "Their creative vision and technical expertise are unmatched. KKT Network brought our artistic vision to life with a stunning portfolio website that showcases our work beautifully.",
                rating: 5
              },
              {
                name: "James Wilson",
                role: "VP Marketing, InnovateTech",
                content: "From concept to launch, KKT Network was with us every step of the way. Their strategic approach and flawless execution made our product launch a huge success.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-200 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-stone-800 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-stone-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span className="text-white font-medium">4.9/5 Average Rating</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-300">150+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Ready to Get Started?</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
              Let's Discuss Your
              <span className="block text-amber-600">Next Project</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation call with our team. We'll discuss your goals, explore possibilities, and create a roadmap for your digital success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-stone-800 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Book a Call</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center space-x-2 text-stone-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available today</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">Free Consultation</h4>
                <p className="text-sm text-stone-600">No commitment required</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-stone-800 fill-current" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">Expert Guidance</h4>
                <p className="text-sm text-stone-600">Professional insights</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">Custom Solutions</h4>
                <p className="text-sm text-stone-600">Tailored to your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Get In Touch</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Email Us</h3>
                    <p className="text-stone-600">hello@kktnetwork.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Call Us</h3>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Visit Us</h3>
                    <p className="text-stone-600">123 Creative Street<br />Design District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                    <option>Website Development</option>
                    <option>Web Application</option>
                    <option>UI/UX Design</option>
                    <option>Brand Identity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-stone-800 text-white py-4 rounded-lg font-semibold hover:bg-stone-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/KKT Logo 2.jpg" 
                  alt="KKT Network Logo" 
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-xl font-bold">KKT Network</span>
              </div>
              <p className="text-stone-400 mb-4 max-w-md">
                Creating exceptional digital experiences that drive business growth and engage audiences worldwide.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Web Applications</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Brand Identity</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center">
            <p className="text-stone-400">
              © 2025 KKT Network. All rights reserved. Crafted with 
              <span className="text-amber-400 mx-1">★</span> 
              and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;