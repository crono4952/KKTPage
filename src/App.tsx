import React, { useState } from 'react';
import { Menu, X, Diamond, Star, Zap, Globe, ArrowRight, Mail, Phone, MapPin, Languages } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { BookingForm } from '@/components/BookingForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const handleBookCall = () => {
    setShowBookingForm(true);
  };

  const handleBackToMain = () => {
    setShowBookingForm(false);
  };

  if (showBookingForm) {
    return <BookingForm onBack={handleBackToMain} language={language} />;
  }

  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      hero: {
        title1: "Transform Your Business",
        title2: "with AI That Actually Work"
      },
      intro: {
        title: "AI-Powered Solutions That Work 24/7", 
        description: "We help businesses grow faster with smart AI chatbots and lightning-fast website creation. While others take months, we deliver professional results in days using cutting-edge AI technology."
      },
      services: {
        badge: "What We Do",
        title: "Two Ways We Help You Grow",
        subtitle: "Choose the solution that fits your business needs. Both are powered by AI for faster, better results.",
        service1: {
          title: "AI Chatbot Integration",
          description: "Already have a website? Add a smart AI assistant that never sleeps.",
          benefits: [
            "Answer customer questions instantly, 24/7",
            "Capture more leads automatically",
            "Boost customer satisfaction",
            "Reduce support workload"
          ]
        },
        service2: {
          title: "AI Website Creation",
          description: "Need a website? We'll build you a professional one in days, not months.",
          benefits: [
            "Professional design delivered in days",
            "Cost-effective compared to agencies",
            "Mobile-friendly and fast-loading",
            "Built to convert visitors into customers"
          ]
        }
      },
      whyChoose: {
        badge: "Why Choose KKT Network",
        title: "We're Different (And Faster)",
        subtitle: "While others take months and charge thousands, we deliver professional results in days at a fraction of the cost.",
        reasons: [
          {
            title: "Lightning Fast",
            description: "AI-powered development means days, not months"
          },
          {
            title: "Budget Friendly",
            description: "Professional results without agency prices"
          },
          {
            title: "Always Available",
            description: "Your AI chatbot works 24/7, even when you don't"
          },
          {
            title: "Real Support",
            description: "Talk to real humans when you need help"
          }
        ]
      },
      portfolio: {
        badge: "Our Portfolio",
        title: "Real Results for Real Businesses",
        subtitle: "See how we've helped businesses like yours get more customers and save time.",
        projects: [
          { title: "Local Restaurant", category: "Takes orders 24/7 now" },
          { title: "Medical Practice", category: "Books appointments automatically" },
          { title: "Real Estate Agency", category: "Qualifies leads instantly" },
          { title: "Law Firm", category: "Answers client questions 24/7" },
          { title: "E-commerce Store", category: "Increased sales by 40%" },
          { title: "Fitness Studio", category: "Tripled membership signups" }
        ]
      },
      cta: {
        title1: "Ready to Get More",
        title2: "Customers?",
        subtitle: "Book a free consultation and we'll show you exactly how AI can grow your business. No commitment, just results.",
        button: "Book Your Free Consultation"
      },
      testimonials: {
        badge: "Happy Customers",
        title: "Real People, Real Results",
        subtitle: "Here's what happens when you let AI work for your business.",
        rating: "Average Rating",
        clients: "Happy Clients",
        testimonialList: [
          {
            name: "Sarah Johnson",
            role: "Owner, Johnson's Bakery",
            content: "Our AI chatbot takes orders even when we're closed! We went from zero online orders to 400% more sales in just two months. Best investment we ever made."
          },
          {
            name: "Michael Chen",
            role: "Dentist, Chen Family Dental",
            content: "Patients love getting instant answers to their questions. The AI books appointments automatically, so my staff can focus on patient care. It's like having a receptionist that never takes a break!"
          },
          {
            name: "Emily Rodriguez",
            role: "Real Estate Agent",
            content: "Buyers get instant answers to their questions, even at midnight. The AI qualifies leads for me automatically. I'm closing 50% more deals now!"
          },
          {
            name: "David Thompson",
            role: "Attorney, Thompson & Associates",
            content: "The AI handles initial client questions perfectly. We're getting 3x more qualified leads, and our website finally looks as professional as our service."
          },
          {
            name: "Lisa Park",
            role: "Fitness Studio Owner",
            content: "Members can ask questions about classes and book sessions instantly. Our membership signups tripled in the first month!"
          },
          {
            name: "James Wilson",
            role: "Restaurant Owner, Wilson's Grill",
            content: "We never miss a reservation anymore. The AI answers menu questions and takes bookings 24/7. Revenue is up 35% and customers love the instant service!"
          }
        ]
      },
      bookCall: {
        badge: "Get Started Today",
        title1: "See How AI Can",
        title2: "Grow Your Business",
        subtitle: "Book a free 15-minute call. We'll show you exactly how AI can get you more customers and save you time. No sales pitch, just results.",
        button: "Book Your Free Call",
        available: "Available today",
        analysis: "Free Analysis",
        analysisDesc: "We'll audit your current setup",
        demo: "Live Demo",
        demoDesc: "See AI in action for your business",
        custom: "Custom Plan",
        customDesc: "Tailored to your specific needs"
      },
      contact: {
        badge: "Let's Talk",
        title: "Ready to Grow Your Business?",
        subtitle: "Tell us about your business and we'll show you exactly how AI can help you get more customers.",
        email: "Email Us",
        call: "Call Us",
        firstName: "First Name",
        lastName: "Last Name",
        projectType: "Project Type",
        message: "Message",
        messagePlaceholder: "Tell us about your business and your biggest challenges with getting new customers...",
        sendMessage: "Send Message",
        projectOptions: [
          "I need an AI chatbot for my existing website",
          "I need a new website built",
          "I want both a website and AI chatbot",
          "I'm not sure what I need",
          "Other"
        ]
      },
      footer: {
        description: "We help businesses get more customers with AI-powered websites and chatbots that work 24/7. Fast, affordable, and effective.",
        servicesTitle: "Services",
        services: [
          "AI Chatbot Integration",
          "AI Website Creation",
          "Free Consultation",
          "Ongoing Support"
        ],
        companyTitle: "Company",
        company: [
          "About Us",
          "Portfolio",
          "Contact",
          "Get Started"
        ],
        copyright: "© 2025 KKT Network. All rights reserved. Built with",
        copyrightEnd: "to help your business grow."
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À Propos",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      hero: {
        title1: "Transformez Votre Entreprise",
        title2: "avec l'IA Qui Fonctionne Vraiment"
      },
      intro: {
        title: "Solutions IA Qui Travaillent 24h/24",
        description: "Nous aidons les entreprises à croître plus rapidement avec des chatbots IA intelligents et une création de sites web ultra-rapide. Pendant que d'autres prennent des mois, nous livrons des résultats professionnels en quelques jours grâce à la technologie IA de pointe."
      },
      services: {
        badge: "Ce Que Nous Faisons",
        title: "Deux Façons de Vous Aider à Grandir",
        subtitle: "Choisissez la solution qui correspond aux besoins de votre entreprise. Les deux sont alimentées par l'IA pour des résultats plus rapides et meilleurs.",
        service1: {
          title: "Intégration Chatbot IA",
          description: "Vous avez déjà un site web? Ajoutez un assistant IA intelligent qui ne dort jamais.",
          benefits: [
            "Répond aux questions clients instantanément, 24h/24",
            "Capture plus de prospects automatiquement",
            "Améliore la satisfaction client",
            "Réduit la charge de support"
          ]
        },
        service2: {
          title: "Création de Site Web IA",
          description: "Besoin d'un site web? Nous vous en construirons un professionnel en quelques jours, pas des mois.",
          benefits: [
            "Design professionnel livré en quelques jours",
            "Rentable comparé aux agences",
            "Compatible mobile et chargement rapide",
            "Conçu pour convertir les visiteurs en clients"
          ]
        }
      },
      whyChoose: {
        badge: "Pourquoi Choisir KKT Network",
        title: "Nous Sommes Différents (Et Plus Rapides)",
        subtitle: "Pendant que d'autres prennent des mois et facturent des milliers, nous livrons des résultats professionnels en quelques jours à une fraction du coût.",
        reasons: [
          {
            title: "Ultra Rapide",
            description: "Le développement alimenté par l'IA signifie des jours, pas des mois"
          },
          {
            title: "Abordable",
            description: "Résultats professionnels sans les prix d'agence"
          },
          {
            title: "Toujours Disponible",
            description: "Votre chatbot IA travaille 24h/24, même quand vous ne le faites pas"
          },
          {
            title: "Vrai Support",
            description: "Parlez à de vraies personnes quand vous avez besoin d'aide"
          }
        ]
      },
      portfolio: {
        badge: "Notre Portfolio",
        title: "Vrais Résultats pour Vraies Entreprises",
        subtitle: "Voyez comment nous avons aidé des entreprises comme la vôtre à obtenir plus de clients et économiser du temps.",
        projects: [
          { title: "Restaurant Local", category: "Prend commandes 24h/24 maintenant" },
          { title: "Cabinet Médical", category: "Réserve rendez-vous automatiquement" },
          { title: "Agence Immobilière", category: "Qualifie prospects instantanément" },
          { title: "Cabinet d'Avocats", category: "Répond aux clients 24h/24" },
          { title: "Boutique E-commerce", category: "Augmenté ventes de 40%" },
          { title: "Studio de Fitness", category: "Triplé inscriptions membres" }
        ]
      },
      cta: {
        title1: "Prêt à Obtenir Plus",
        title2: "de Clients?",
        subtitle: "Réservez une consultation gratuite et nous vous montrerons exactement comment l'IA peut faire croître votre entreprise. Aucun engagement, que des résultats.",
        button: "Réservez Votre Consultation Gratuite"
      },
      testimonials: {
        badge: "Clients Satisfaits",
        title: "Vraies Personnes, Vrais Résultats",
        subtitle: "Voici ce qui arrive quand vous laissez l'IA travailler pour votre entreprise.",
        rating: "Note Moyenne",
        clients: "Clients Satisfaits",
        testimonialList: [
          {
            name: "Sarah Johnson",
            role: "Propriétaire, Boulangerie Johnson",
            content: "Notre chatbot IA prend les commandes même quand nous sommes fermés! Nous sommes passés de zéro commande en ligne à 400% plus de ventes en seulement deux mois. Meilleur investissement jamais fait."
          },
          {
            name: "Michael Chen",
            role: "Dentiste, Dentaire Famille Chen",
            content: "Les patients adorent obtenir des réponses instantanées à leurs questions. L'IA réserve les rendez-vous automatiquement, donc mon personnel peut se concentrer sur les soins. C'est comme avoir une réceptionniste qui ne prend jamais de pause!"
          },
          {
            name: "Emily Rodriguez",
            role: "Agent Immobilier",
            content: "Les acheteurs obtiennent des réponses instantanées à leurs questions, même à minuit. L'IA qualifie les prospects pour moi automatiquement. Je conclus 50% plus d'affaires maintenant!"
          },
          {
            name: "David Thompson",
            role: "Avocat, Thompson & Associés",
            content: "L'IA gère parfaitement les questions initiales des clients. Nous obtenons 3x plus de prospects qualifiés, et notre site web paraît enfin aussi professionnel que notre service."
          },
          {
            name: "Lisa Park",
            role: "Propriétaire Studio de Fitness",
            content: "Les membres peuvent poser des questions sur les cours et réserver des sessions instantanément. Nos inscriptions d'adhésion ont triplé le premier mois!"
          },
          {
            name: "James Wilson",
            role: "Propriétaire Restaurant, Grill Wilson",
            content: "Nous ne manquons plus jamais une réservation. L'IA répond aux questions sur le menu et prend les réservations 24h/24. Les revenus ont augmenté de 35% et les clients adorent le service instantané!"
          }
        ]
      },
      bookCall: {
        badge: "Commencez Aujourd'hui",
        title1: "Voyez Comment l'IA Peut",
        title2: "Faire Croître Votre Entreprise",
        subtitle: "Réservez un appel gratuit de 15 minutes. Nous vous montrerons exactement comment l'IA peut vous obtenir plus de clients et vous faire économiser du temps. Pas de discours de vente, que des résultats.",
        button: "Réservez Votre Appel Gratuit",
        available: "Disponible aujourd'hui",
        analysis: "Analyse Gratuite",
        analysisDesc: "Nous auditerons votre configuration actuelle",
        demo: "Démo en Direct",
        demoDesc: "Voir l'IA en action pour votre entreprise",
        custom: "Plan Personnalisé",
        customDesc: "Adapté à vos besoins spécifiques"
      },
      contact: {
        badge: "Parlons",
        title: "Prêt à Faire Croître Votre Entreprise?",
        subtitle: "Parlez-nous de votre entreprise et nous vous montrerons exactement comment l'IA peut vous aider à obtenir plus de clients.",
        email: "Envoyez-nous un Email",
        call: "Appelez-Nous",
        firstName: "Prénom",
        lastName: "Nom",
        projectType: "Type de Projet",
        message: "Message",
        messagePlaceholder: "Parlez-nous de votre entreprise et de vos plus grands défis pour obtenir de nouveaux clients...",
        sendMessage: "Envoyer le Message",
        projectOptions: [
          "J'ai besoin d'un chatbot IA pour mon site existant",
          "J'ai besoin d'un nouveau site web",
          "Je veux un site web et un chatbot IA",
          "Je ne suis pas sûr de ce dont j'ai besoin",
          "Autre"
        ]
      },
      footer: {
        description: "Nous aidons les entreprises à obtenir plus de clients avec des sites web et chatbots IA qui travaillent 24h/24. Rapide, abordable et efficace.",
        servicesTitle: "Services",
        services: [
          "Intégration Chatbot IA",
          "Création Site Web IA",
          "Consultation Gratuite",
          "Support Continu"
        ],
        companyTitle: "Entreprise",
        company: [
          "À Propos",
          "Portfolio",
          "Contact",
          "Commencer"
        ],
        copyright: "© 2025 KKT Network. Tous droits réservés. Construit avec",
        copyrightEnd: "pour aider votre entreprise à grandir."
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto pl-4 pr-2 sm:pr-4 lg:pr-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center -ml-2">
              <img 
                src="/KKT Logo 2.jpg" 
                alt="KKT Network Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">{t.nav.home}</a>
                <a href="#services" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">{t.nav.services}</a>
                <a href="#about" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">{t.nav.about}</a>
                <a href="#portfolio" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">{t.nav.portfolio}</a>
                <a href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors font-medium">{t.nav.contact}</a>
              </nav>
              
              {/* Book a Call Button */}
              <button
                onClick={handleBookCall}
                className="hidden md:flex items-center space-x-2 bg-amber-500 text-stone-800 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>{language === 'en' ? 'Book a Call' : 'Réserver un Appel'}</span>
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                <Languages className="w-4 h-4 text-stone-700" />
                <span className="text-sm font-medium text-stone-700">
                  {language === 'en' ? 'FR' : 'EN'}
                </span>
              </button>
            </div>

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
            <div className="md:hidden py-4 border-t border-stone-200 bg-amber-50">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">{t.nav.home}</a>
                <a href="#services" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">{t.nav.services}</a>
                <a href="#about" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">{t.nav.about}</a>
                <a href="#portfolio" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">{t.nav.portfolio}</a>
                <a href="#contact" className="px-4 py-2 text-stone-700 hover:text-amber-600 transition-colors">{t.nav.contact}</a>
                <div className="px-4 py-2">
                  <button
                    onClick={handleBookCall}
                    className="w-full mb-3 flex items-center justify-center space-x-2 bg-amber-500 text-stone-800 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300"
                  >
                    <span>{language === 'en' ? 'Book a Call' : 'Réserver un Appel'}</span>
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <Languages className="w-4 h-4 text-stone-700" />
                    <span className="text-sm font-medium text-stone-700">
                      {language === 'en' ? 'FR' : 'EN'}
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <BackgroundPaths title={`${t.hero.title1} ${t.hero.title2}`} language={language} />
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {t.intro.title}
          </h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            {t.intro.description}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-amber-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.services.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: t.services.service1.title,
                description: t.services.service1.description,
                benefits: t.services.service1.benefits
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: t.services.service2.title,
                description: t.services.service2.description,
                benefits: t.services.service2.benefits
              }
            ].map((service, index) => (
              <div key={index} className="group bg-stone-100 rounded-2xl p-12 hover:bg-stone-800 transition-all duration-300 hover:shadow-xl text-center border border-stone-300 hover:border-stone-700">
                <div className="text-amber-600 group-hover:text-amber-400 mb-6 transition-colors flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-white mb-6 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-300 transition-colors text-xl font-medium leading-relaxed mb-12 font-serif">
                  {service.description}
                </p>
                <ul className="text-left space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3 text-stone-600 group-hover:text-stone-300 transition-colors">
                      <div className="w-2 h-2 bg-amber-600 group-hover:bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.whyChoose.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.whyChoose.title}
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyChoose.reasons.map((reason, index) => {
              const icons = [<Zap className="w-6 h-6" />, <Diamond className="w-6 h-6" />, <Globe className="w-6 h-6" />, <Star className="w-6 h-6 fill-current" />];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-stone-800">
                      {icons[index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-stone-300">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
                <div className="text-stone-300">Happy Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-stone-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.portfolio.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.projects.map((project, index) => {
              const images = [
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              ];
              return (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-stone-100 hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={images[index]} 
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
            )})}
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
              {t.cta.title1}
              <span className="block text-amber-400">{t.cta.title2}</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <button 
              onClick={handleBookCall}
              className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10 
                        p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08]
                            text-white/60 hover:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-white/10
                            hover:shadow-md hover:shadow-neutral-800/50 flex items-center justify-center space-x-3">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  {t.cta.button}
                </span>
                <span
                  className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                            transition-all duration-300"
                >
                  →
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.testimonials.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.testimonialList.map((testimonial, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:bg-stone-100 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-stone-800 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">{testimonial.name}</div>
                    <div className="text-stone-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-stone-100 rounded-full px-6 py-3 border border-stone-200">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span className="text-stone-800 font-medium">4.9/5 {t.testimonials.rating}</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-500">150+ {t.testimonials.clients}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-amber-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.bookCall.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.bookCall.title1}
              <span className="block text-amber-400">{t.bookCall.title2}</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
              {t.bookCall.subtitle}
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={handleBookCall}
                className="group bg-amber-500 text-stone-800 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>{t.bookCall.button}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-white mb-1">{t.bookCall.analysis}</h4>
                <p className="text-sm text-stone-300">{t.bookCall.analysisDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-white mb-1">{t.bookCall.demo}</h4>
                <p className="text-sm text-stone-300">{t.bookCall.demoDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-stone-800 fill-current" />
                </div>
                <h4 className="font-semibold text-white mb-1">{t.bookCall.custom}</h4>
                <p className="text-sm text-stone-300">{t.bookCall.customDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.contact.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
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
                    <h3 className="font-semibold text-stone-800 mb-1">{t.contact.email}</h3>
                    <p className="text-stone-600">info@kktnetwork.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.firstName}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.lastName}</label>
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
                  <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.projectType}</label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                    {t.contact.projectOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-stone-800 text-white py-4 rounded-lg font-semibold hover:bg-stone-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{t.contact.sendMessage}</span>
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
                {t.footer.description}
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
              <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2 text-stone-400">
                {t.footer.services.map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-amber-400 transition-colors">{service}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.companyTitle}</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">{t.footer.company[0]}</a></li>
                <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">{t.footer.company[1]}</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.footer.company[2]}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.company[3]}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center">
            <p className="text-stone-400">
              {t.footer.copyright}
              <span className="text-amber-400 mx-1">★</span> 
              {t.footer.copyrightEnd}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;