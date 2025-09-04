import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, AlertCircle, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  selectedService: string;
  companyName: string;
  problems: string;
  additionalInfo: string;
  privacyAgreed: boolean;
}

interface BookingFormProps {
  onBack: () => void;
  language: 'en' | 'fr';
}

export function BookingForm({ onBack, language }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    selectedService: '',
    companyName: '',
    problems: '',
    additionalInfo: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: "Book Your Free Consultation",
      subtitle: "Tell us about your project and we'll get back to you within 24 hours with a customized proposal.",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your email address",
        service: "Selected Service",
        servicePlaceholder: "Select a service...",
        serviceOptions: [
          "Website Creation",
          "AI Agent Chatbot",
          "Website + AI Chatbot Package"
        ],
        company: "Company Name",
        companyPlaceholder: "Enter your company name (optional)",
        problems: "What problems are you looking to solve?",
        problemsPlaceholder: "Describe the challenges your business is facing and how we can help...",
        additional: "Additional Information",
        additionalPlaceholder: "Any additional details about your project or specific requirements...",
        privacy: "I agree to the privacy policy and terms of service",
        submit: "Submit Request",
        submitting: "Submitting..."
      },
      contact: {
        title: "Contact Information",
        phone: "+1 (555) 123-4567",
        email: "hello@kktnetwork.com",
        response: "We typically respond within 24 hours"
      },
      success: {
        title: "Thank You!",
        message: "Your consultation request has been submitted successfully. We'll review your information and get back to you within 24 hours with a customized proposal.",
        backButton: "Back to Website"
      },
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        serviceRequired: "Please select a service",
        problemsRequired: "Please describe the problems you're looking to solve",
        privacyRequired: "Please agree to the privacy policy"
      }
    },
    fr: {
      title: "Réservez Votre Consultation Gratuite",
      subtitle: "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures avec une proposition personnalisée.",
      form: {
        name: "Nom Complet",
        namePlaceholder: "Entrez votre nom complet",
        email: "Adresse Email",
        emailPlaceholder: "Entrez votre adresse email",
        service: "Service Sélectionné",
        servicePlaceholder: "Sélectionnez un service...",
        serviceOptions: [
          "Création de Site Web",
          "Chatbot Agent IA",
          "Package Site Web + Chatbot IA"
        ],
        company: "Nom de l'Entreprise",
        companyPlaceholder: "Entrez le nom de votre entreprise (optionnel)",
        problems: "Quels problèmes cherchez-vous à résoudre?",
        problemsPlaceholder: "Décrivez les défis auxquels votre entreprise fait face et comment nous pouvons aider...",
        additional: "Informations Supplémentaires",
        additionalPlaceholder: "Tout détail supplémentaire sur votre projet ou exigences spécifiques...",
        privacy: "J'accepte la politique de confidentialité et les conditions de service",
        submit: "Soumettre la Demande",
        submitting: "Soumission..."
      },
      contact: {
        title: "Informations de Contact",
        phone: "+1 (555) 123-4567",
        email: "hello@kktnetwork.com",
        response: "Nous répondons généralement dans les 24 heures"
      },
      success: {
        title: "Merci!",
        message: "Votre demande de consultation a été soumise avec succès. Nous examinerons vos informations et vous répondrons dans les 24 heures avec une proposition personnalisée.",
        backButton: "Retour au Site Web"
      },
      errors: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "Veuillez entrer une adresse email valide",
        serviceRequired: "Veuillez sélectionner un service",
        problemsRequired: "Veuillez décrire les problèmes que vous cherchez à résoudre",
        privacyRequired: "Veuillez accepter la politique de confidentialité"
      }
    }
  };

  const t = content[language];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.emailInvalid;
    }

    if (!formData.selectedService) {
      newErrors.selectedService = t.errors.serviceRequired;
    }

    if (!formData.problems.trim()) {
      newErrors.problems = t.errors.problemsRequired;
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = t.errors.privacyRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">{t.success.title}</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">{t.success.message}</p>
          <button
            onClick={onBack}
            className="w-full bg-stone-800 text-white py-3 rounded-lg font-semibold hover:bg-stone-700 transition-colors duration-300"
          >
            {t.success.backButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-stone-700 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <div className="flex items-center space-x-3">
              <img 
                src="/KKT Logo 2.jpg" 
                alt="KKT Network Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-bold text-stone-800">KKT Network</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-stone-800 mb-4">{t.title}</h1>
                <p className="text-lg text-stone-600 leading-relaxed">{t.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-stone-300'
                    }`}
                    placeholder={t.form.namePlaceholder}
                  />
                  {errors.name && (
                    <div className="flex items-center space-x-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-stone-300'
                    }`}
                    placeholder={t.form.emailPlaceholder}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Selected Service Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.service} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.selectedService}
                    onChange={(e) => handleInputChange('selectedService', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.selectedService ? 'border-red-500' : 'border-stone-300'
                    }`}
                  >
                    <option value="">{t.form.servicePlaceholder}</option>
                    {t.form.serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.selectedService && (
                    <div className="flex items-center space-x-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors.selectedService}</span>
                    </div>
                  )}
                </div>

                {/* Company Name Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder={t.form.companyPlaceholder}
                  />
                </div>

                {/* Problems Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.problems} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.problems}
                    onChange={(e) => handleInputChange('problems', e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none ${
                      errors.problems ? 'border-red-500' : 'border-stone-300'
                    }`}
                    placeholder={t.form.problemsPlaceholder}
                  />
                  {errors.problems && (
                    <div className="flex items-center space-x-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors.problems}</span>
                    </div>
                  )}
                </div>

                {/* Additional Information Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.form.additional}
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder={t.form.additionalPlaceholder}
                  />
                </div>

                {/* Privacy Agreement */}
                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAgreed}
                      onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
                      className="mt-1 w-4 h-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                    />
                    <span className={`text-sm ${errors.privacyAgreed ? 'text-red-600' : 'text-stone-600'}`}>
                      {t.form.privacy} <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.privacyAgreed && (
                    <div className="flex items-center space-x-2 mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors.privacyAgreed}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-800 text-white py-4 rounded-lg font-semibold hover:bg-stone-700 disabled:bg-stone-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t.form.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.form.submit}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">{t.contact.title}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-stone-800" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{t.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-stone-800" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{t.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-stone-800" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-600">{t.contact.response}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-3">What happens next?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-stone-800 font-bold text-xs">1</span>
                  </div>
                  <p className="text-stone-300">We review your project requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-stone-800 font-bold text-xs">2</span>
                  </div>
                  <p className="text-stone-300">We prepare a customized proposal</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-stone-800 font-bold text-xs">3</span>
                  </div>
                  <p className="text-stone-300">We schedule a consultation call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}