'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica para suscribir al newsletter
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Newsletter subscription:', email);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-keex-green to-keex-terracotta rounded-xl p-8 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">
          Mantente Actualizado
        </h3>
        <p className="text-white/90">
          Recibe insights exclusivos sobre transformación cultural y mejores prácticas 
          directamente en tu correo.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-white/20 rounded-lg">
          <div className="flex items-center justify-center">
            <span className="text-white text-xl mr-3">✓</span>
            <span className="font-medium">¡Te has suscrito exitosamente!</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 rounded-lg">
          <div className="flex items-center justify-center">
            <span className="text-white text-xl mr-3">✗</span>
            <span className="font-medium">Error al suscribirse. Inténtalo de nuevo.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="tu@empresa.com"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-keex-green py-3 px-6 rounded-lg font-semibold hover:bg-keex-beige transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Suscribiendo...' : 'Suscribirse al Newsletter'}
        </button>

        <p className="text-xs text-white/80 text-center">
          Recibirás máximo 2 emails por mes. Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Sin spam</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Contenido exclusivo</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Cancelar cuando quieras</span>
          </div>
        </div>
      </div>
    </div>
  );
}
