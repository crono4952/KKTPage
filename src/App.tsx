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
        title1: "Crafting Digital",
        title2: "Experiences"
      },
      services: {
        badge: "Our Services",
        title: "Our Core Services",
        subtitle: "We specialize in two essential services that transform how businesses connect with their customers online.",
        service1: {
          title: "Complete Website Creation",
          description: "We build stunning, professional websites for any business from the ground up. Modern, responsive, and optimized for search engines to help you establish a powerful online presence."
        },
        service2: {
          title: "24/7 AI Chatbot Integration",
          description: "Smart AI chatbot agents that never sleep. Provide instant customer support, answer questions, and capture leads around the clock to grow your business automatically."
        }
      },
      about: {
        badge: "About KKT Network",
        title: "Passionate About Digital Excellence",
        description1: "At KKT Network, we specialize in two game-changing services that transform how businesses operate online. We create beautiful, professional websites from scratch and integrate intelligent AI chatbots that work 24/7 to serve your customers.",
        description2: "Whether you're a startup needing your first website or an established business wanting to automate customer service, we provide the complete solution. Our websites are built to convert visitors into customers, while our AI chatbots ensure no inquiry goes unanswered.",
        stat1: "Websites Built",
        stat2: "AI Support",
        excellence: "Creative Excellence",
        excellenceDesc: "Award-winning designs",
        integration: "AI Integration",
        integrationDesc: "Smart chatbot solutions",
        solutions: "Complete Solutions",
        solutionsDesc: "Website + AI chatbot"
      },
      portfolio: {
        badge: "Our Portfolio",
        title: "Success Stories",
        subtitle: "See how our websites and AI chatbots have helped businesses increase sales and improve customer satisfaction.",
        projects: [
          { title: "Local Restaurant Chain", category: "Website + AI Chatbot" },
          { title: "Medical Practice", category: "Website + AI Assistant" },
          { title: "Real Estate Agency", category: "Website + Lead Bot" },
          { title: "Law Firm", category: "Website + FAQ Bot" },
          { title: "E-commerce Store", category: "Website + Sales Bot" },
          { title: "Fitness Studio", category: "Website + Booking Bot" }
        ]
      },
      cta: {
        title1: "Ready to Transform Your",
        title2: "Digital Presence?",
        subtitle: "Get a professional website and 24/7 AI customer support. Transform how your business connects with customers online.",
        button: "Get Your Website + AI Bot"
      },
      testimonials: {
        badge: "Client Testimonials",
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it. Here's what our satisfied clients have to say about working with KKT Network.",
        rating: "Average Rating",
        clients: "Happy Clients",
        testimonialList: [
          {
            name: "Sarah Johnson",
            role: "Owner, Johnson's Bakery",
            content: "KKT Network built us a beautiful website and added an AI chatbot that takes orders 24/7. We're getting customers even when we're closed! Our online orders increased by 400% in just two months."
          },
          {
            name: "Michael Chen",
            role: "Dentist, Chen Family Dental",
            content: "The AI chatbot answers patient questions instantly and books appointments automatically. Our staff can focus on patient care while the bot handles inquiries. It's like having a receptionist that never sleeps!"
          },
          {
            name: "Emily Rodriguez",
            role: "Real Estate Agent",
            content: "My new website looks amazing and the AI chatbot qualifies leads automatically. I'm closing more deals because potential buyers get instant answers to their questions, even at midnight!"
          },
          {
            name: "David Thompson",
            role: "Attorney, Thompson & Associates",
            content: "Our law firm's website now looks incredibly professional, and the AI chatbot handles initial client consultations perfectly. We're getting more qualified leads than ever before."
          },
          {
            name: "Lisa Park",
            role: "Fitness Studio Owner",
            content: "The website showcases our classes beautifully, and the AI chatbot books memberships and answers questions about our programs instantly. Our conversion rate has tripled!"
          },
          {
            name: "James Wilson",
            role: "Restaurant Owner, Wilson's Grill",
            content: "The AI chatbot takes reservations and answers menu questions 24/7. We never miss a booking now, and customers love getting instant responses. Our revenue has increased significantly!"
          }
        ]
      },
      bookCall: {
        badge: "Ready to Get Started?",
        title1: "Let's Discuss Your",
        title2: "Next Project",
        subtitle: "Schedule a free consultation to discuss your website needs and learn how a 24/7 AI chatbot can transform your customer service and boost your sales.",
        button: "Book a Call",
        available: "Available today",
        analysis: "Website Analysis",
        analysisDesc: "Free website audit",
        demo: "AI Demo",
        demoDesc: "See chatbot in action",
        custom: "Custom Solutions",
        customDesc: "Built for your business"
      },
      contact: {
        badge: "Get In Touch",
        title: "Let's Start a Conversation",
        subtitle: "Ready to get a professional website and 24/7 AI customer support? Let's discuss how we can transform your business.",
        email: "Email Us",
        call: "Call Us",
        firstName: "First Name",
        lastName: "Last Name",
        projectType: "Project Type",
        message: "Message",
        messagePlaceholder: "Tell us about your business and what you'd like to achieve with your website and AI chatbot...",
        sendMessage: "Send Message",
        projectOptions: [
          "New Website + AI Chatbot",
          "Website Only",
          "AI Chatbot Only",
          "Website Redesign + AI Chatbot",
          "Other"
        ]
      },
      footer: {
        description: "Building professional websites and intelligent AI chatbots that work 24/7 to grow your business and delight your customers.",
        servicesTitle: "Services",
        services: [
          "Website Creation",
          "AI Chatbot Integration",
          "24/7 Customer Support",
          "Lead Generation"
        ],
        companyTitle: "Company",
        company: [
          "About Us",
          "Portfolio",
          "Contact",
          "Careers"
        ],
        copyright: "© 2025 KKT Network. All rights reserved. Crafted with",
        copyrightEnd: "to help businesses thrive online."
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
        title1: "Créer des Expériences",
        title2: "Numériques"
      },
      services: {
        badge: "Nos Services",
        title: "Nos Services Principaux",
        subtitle: "Nous nous spécialisons dans deux services essentiels qui transforment la façon dont les entreprises se connectent avec leurs clients en ligne.",
        service1: {
          title: "Création Complète de Site Web",
          description: "Nous construisons des sites web magnifiques et professionnels pour toute entreprise à partir de zéro. Modernes, adaptatifs et optimisés pour les moteurs de recherche pour vous aider à établir une présence en ligne puissante."
        },
        service2: {
          title: "Intégration de Chatbot IA 24/7",
          description: "Agents chatbot IA intelligents qui ne dorment jamais. Fournissent un support client instantané, répondent aux questions et capturent des prospects 24h/24 pour faire croître votre entreprise automatiquement."
        }
      },
      about: {
        badge: "À Propos de KKT Network",
        title: "Passionnés par l'Excellence Numérique",
        description1: "Chez KKT Network, nous nous spécialisons dans deux services révolutionnaires qui transforment la façon dont les entreprises opèrent en ligne. Nous créons de beaux sites web professionnels à partir de zéro et intégrons des chatbots IA intelligents qui travaillent 24h/24 pour servir vos clients.",
        description2: "Que vous soyez une startup ayant besoin de votre premier site web ou une entreprise établie souhaitant automatiser le service client, nous fournissons la solution complète. Nos sites web sont conçus pour convertir les visiteurs en clients, tandis que nos chatbots IA s'assurent qu'aucune demande ne reste sans réponse.",
        stat1: "Sites Web Créés",
        stat2: "Support IA",
        excellence: "Excellence Créative",
        excellenceDesc: "Designs primés",
        integration: "Intégration IA",
        integrationDesc: "Solutions chatbot intelligentes",
        solutions: "Solutions Complètes",
        solutionsDesc: "Site web + chatbot IA"
      },
      portfolio: {
        badge: "Notre Portfolio",
        title: "Histoires de Succès",
        subtitle: "Découvrez comment nos sites web et chatbots IA ont aidé les entreprises à augmenter leurs ventes et améliorer la satisfaction client.",
        projects: [
          { title: "Chaîne de Restaurants Locaux", category: "Site Web + Chatbot IA" },
          { title: "Cabinet Médical", category: "Site Web + Assistant IA" },
          { title: "Agence Immobilière", category: "Site Web + Bot Prospects" },
          { title: "Cabinet d'Avocats", category: "Site Web + Bot FAQ" },
          { title: "Boutique E-commerce", category: "Site Web + Bot Ventes" },
          { title: "Studio de Fitness", category: "Site Web + Bot Réservation" }
        ]
      },
      cta: {
        title1: "Prêt à Transformer Votre",
        title2: "Présence Numérique?",
        subtitle: "Obtenez un site web professionnel et un support client IA 24h/24. Transformez la façon dont votre entreprise se connecte avec les clients en ligne.",
        button: "Obtenez Votre Site Web + Bot IA"
      },
      testimonials: {
        badge: "Témoignages Clients",
        title: "Ce Que Disent Nos Clients",
        subtitle: "Ne nous croyez pas sur parole. Voici ce que nos clients satisfaits ont à dire sur leur collaboration avec KKT Network.",
        rating: "Note Moyenne",
        clients: "Clients Satisfaits",
        testimonialList: [
          {
            name: "Sarah Johnson",
            role: "Propriétaire, Boulangerie Johnson",
            content: "KKT Network nous a construit un beau site web et ajouté un chatbot IA qui prend les commandes 24h/24. Nous recevons des clients même quand nous sommes fermés ! Nos commandes en ligne ont augmenté de 400% en seulement deux mois."
          },
          {
            name: "Michael Chen",
            role: "Dentiste, Dentaire Famille Chen",
            content: "Le chatbot IA répond aux questions des patients instantanément et prend les rendez-vous automatiquement. Notre personnel peut se concentrer sur les soins aux patients pendant que le bot gère les demandes. C'est comme avoir une réceptionniste qui ne dort jamais !"
          },
          {
            name: "Emily Rodriguez",
            role: "Agent Immobilier",
            content: "Mon nouveau site web est magnifique et le chatbot IA qualifie les prospects automatiquement. Je conclus plus d'affaires parce que les acheteurs potentiels obtiennent des réponses instantanées à leurs questions, même à minuit !"
          },
          {
            name: "David Thompson",
            role: "Avocat, Thompson & Associés",
            content: "Le site web de notre cabinet d'avocats paraît incroyablement professionnel maintenant, et le chatbot IA gère parfaitement les consultations initiales des clients. Nous obtenons plus de prospects qualifiés que jamais."
          },
          {
            name: "Lisa Park",
            role: "Propriétaire Studio de Fitness",
            content: "Le site web présente nos cours magnifiquement, et le chatbot IA réserve les adhésions et répond aux questions sur nos programmes instantanément. Notre taux de conversion a triplé !"
          },
          {
            name: "James Wilson",
            role: "Propriétaire Restaurant, Grill Wilson",
            content: "Le chatbot IA prend les réservations et répond aux questions sur le menu 24h/24. Nous ne manquons jamais une réservation maintenant, et les clients adorent obtenir des réponses instantanées. Nos revenus ont considérablement augmenté !"
          }
        ]
      },
      bookCall: {
        badge: "Prêt à Commencer?",
        title1: "Discutons de Votre",
        title2: "Prochain Projet",
        subtitle: "Planifiez une consultation gratuite pour discuter de vos besoins de site web et découvrir comment un chatbot IA 24h/24 peut transformer votre service client et augmenter vos ventes.",
        button: "Réserver un Appel",
        available: "Disponible aujourd'hui",
        analysis: "Analyse de Site Web",
        analysisDesc: "Audit gratuit de site web",
        demo: "Démo IA",
        demoDesc: "Voir le chatbot en action",
        custom: "Solutions Personnalisées",
        customDesc: "Conçu pour votre entreprise"
      },
      contact: {
        badge: "Contactez-Nous",
        title: "Commençons une Conversation",
        subtitle: "Prêt à obtenir un site web professionnel et un support client IA 24h/24? Discutons de la façon dont nous pouvons transformer votre entreprise.",
        email: "Envoyez-nous un Email",
        call: "Appelez-Nous",
        firstName: "Prénom",
        lastName: "Nom",
        projectType: "Type de Projet",
        message: "Message",
        messagePlaceholder: "Parlez-nous de votre entreprise et de ce que vous aimeriez accomplir avec votre site web et chatbot IA...",
        sendMessage: "Envoyer le Message",
        projectOptions: [
          "Nouveau Site Web + Chatbot IA",
          "Site Web Seulement",
          "Chatbot IA Seulement",
          "Refonte Site Web + Chatbot IA",
          "Autre"
        ]
      },
      footer: {
        description: "Construire des sites web professionnels et des chatbots IA intelligents qui travaillent 24h/24 pour faire croître votre entreprise et ravir vos clients.",
        servicesTitle: "Services",
        services: [
          "Création de Site Web",
          "Intégration Chatbot IA",
          "Support Client 24/7",
          "Génération de Prospects"
        ],
        companyTitle: "Entreprise",
        company: [
          "À Propos",
          "Portfolio",
          "Contact",
          "Carrières"
        ],
        copyright: "© 2025 KKT Network. Tous droits réservés. Créé avec",
        copyrightEnd: "pour aider les entreprises à prospérer en ligne."
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
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
            <div className="md:hidden py-4 border-t border-stone-200">
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
        <BackgroundPaths title={`${t.hero.title1} ${t.hero.title2}`} />
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-white z-10">
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
                icon: <Globe className="w-8 h-8" />,
                title: t.services.service1.title,
                description: t.services.service1.description
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t.services.service2.title,
                description: t.services.service2.description
              }
            ].map((service, index) => (
              <div key={index} className="group bg-stone-50 rounded-2xl p-12 hover:bg-stone-800 transition-all duration-300 hover:shadow-xl text-center">
                <div className="text-amber-600 group-hover:text-amber-400 mb-6 transition-colors flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-white mb-6 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-300 transition-colors text-lg leading-relaxed">
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
                <span className="text-sm font-medium uppercase tracking-wider">{t.about.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t.about.title}
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                {t.about.description1}
              </p>
              <p className="text-stone-300 leading-relaxed mb-8">
                {t.about.description2}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
                  <div className="text-stone-300">{t.about.stat1}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-stone-300">{t.about.stat2}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-stone-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-white/20 max-w-xs mx-auto">
                <div className="space-y-6 flex flex-col items-start">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-stone-800 fill-current" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{t.about.excellence}</h4>
                      <p className="text-stone-300 text-sm">{t.about.excellenceDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-stone-800" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{t.about.integration}</h4>
                      <p className="text-stone-300 text-sm">{t.about.integrationDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-stone-800" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{t.about.solutions}</h4>
                      <p className="text-stone-300 text-sm">{t.about.solutionsDesc}</p>
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
              className="group bg-stone-800 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 mx-auto"
            >
              <span>{t.cta.button}</span>
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
              <span className="text-sm font-medium uppercase tracking-wider">{t.testimonials.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.testimonialList.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
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
              <span className="text-white font-medium">4.9/5 {t.testimonials.rating}</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-300">150+ {t.testimonials.clients}</span>
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
              <span className="text-sm font-medium uppercase tracking-wider">{t.bookCall.badge}</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
              {t.bookCall.title1}
              <span className="block text-amber-600">{t.bookCall.title2}</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {t.bookCall.subtitle}
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={handleBookCall}
                className="group bg-stone-800 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>{t.bookCall.button}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">{t.bookCall.analysis}</h4>
                <p className="text-sm text-stone-600">{t.bookCall.analysisDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-stone-800" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">{t.bookCall.demo}</h4>
                <p className="text-sm text-stone-600">{t.bookCall.demoDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-stone-800 fill-current" />
                </div>
                <h4 className="font-semibold text-stone-800 mb-1">{t.bookCall.custom}</h4>
                <p className="text-sm text-stone-600">{t.bookCall.customDesc}</p>
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