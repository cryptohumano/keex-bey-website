'use client';

import { useState } from 'react';
import { LeadForm } from '@/types';

interface ContactFormProps {
  source?: LeadForm['source'];
}

export function ContactForm({ source = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interests: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Consultoría en Transformación Cultural',
    'Talleres de Comunicación Interna',
    'Adaptación a Entornos Híbridos',
    'Desarrollo de Liderazgo Transformacional',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data:', { ...formData, source });
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interests: []
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-keex-green mb-2">
          Solicita tu Consulta Gratuita
        </h3>
        <p className="text-gray-600">
          Agenda una consulta de 30 minutos sin compromiso y descubre cómo podemos 
          transformar la cultura de tu organización.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <h4 className="font-semibold text-green-800">¡Mensaje enviado!</h4>
              <p className="text-green-700 text-sm">
                Te contactaremos en las próximas 24 horas para agendar tu consulta.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <span className="text-red-600 text-xl mr-3">✗</span>
            <div>
              <h4 className="font-semibold text-red-800">Error al enviar</h4>
              <p className="text-red-700 text-sm">
                Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent transition-colors"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent transition-colors"
              placeholder="tu@empresa.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Empresa *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent transition-colors"
              placeholder="+52 55 1234 5678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Servicios de interés
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(service)}
                  onChange={() => handleInterestChange(service)}
                  className="h-4 w-4 text-keex-green focus:ring-keex-green border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keex-green focus:border-transparent transition-colors resize-none"
            placeholder="Cuéntanos sobre los desafíos culturales de tu organización..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-keex-green text-white py-4 px-6 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Al enviar este formulario, aceptas que K&apos;eex Bey se ponga en contacto contigo 
          para agendar tu consulta gratuita.
        </p>
      </form>
    </div>
  );
}
