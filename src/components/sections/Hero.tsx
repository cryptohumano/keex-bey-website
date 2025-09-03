import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-keex-beige to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-keex-green leading-tight mb-6">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl text-keex-terracotta font-medium mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              {SITE_CONFIG.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#calculadora-roi"
                className="bg-keex-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Calcular ROI Gratis
              </Link>
              <Link
                href="/casos-estudio"
                className="border-2 border-keex-green text-keex-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-keex-green hover:text-white transition-colors duration-200"
              >
                Ver Casos de Éxito
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-keex-ocre">✓</span>
                <span>Especialista en América Latina</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-keex-ocre">✓</span>
                <span>Enfoque basado en datos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-keex-ocre">✓</span>
                <span>Resultados medibles</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-keex-green to-keex-terracotta rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Transformación Cultural</h3>
                    <p className="text-sm opacity-90">Procesos de cambio exitosos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Comunicación Interna</h3>
                    <p className="text-sm opacity-90">Mejora la colaboración</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Entornos Híbridos</h3>
                    <p className="text-sm opacity-90">Adaptación al futuro del trabajo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-keex-ocre/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-keex-terracotta/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
