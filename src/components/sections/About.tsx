import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export function About() {
  return (
    <section className="py-20 bg-keex-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-keex-green mb-6">
              Sobre {SITE_CONFIG.author}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Especialista en transformación cultural con más de 10 años de experiencia 
              ayudando a empresas en América Latina a adaptarse a los cambios organizacionales 
              y mejorar su comunicación interna.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Su enfoque basado en datos y metodologías probadas ha resultado en 
              transformaciones exitosas en más de 50 empresas, generando mejoras 
              medibles en engagement, productividad y retención de talento.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-keex-ocre text-xl">🎓</span>
                <span className="text-gray-700">Maestría en Psicología Organizacional</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-keex-ocre text-xl">🌎</span>
                <span className="text-gray-700">Experiencia en 8 países de América Latina</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-keex-ocre text-xl">📊</span>
                <span className="text-gray-700">Enfoque basado en datos y métricas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-keex-ocre text-xl">🏆</span>
                <span className="text-gray-700">Certificada en metodologías ágiles</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sobre-alicia"
                className="bg-keex-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 text-center"
              >
                Conocer más sobre Alicia
              </Link>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-keex-green text-keex-green px-6 py-3 rounded-lg font-semibold hover:bg-keex-green hover:text-white transition-colors duration-200 text-center"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-keex-green to-keex-terracotta rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white">👩‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-keex-green mb-2">
                  {SITE_CONFIG.author}
                </h3>
                <p className="text-keex-terracotta font-medium mb-4">
                  Fundadora de K&apos;eex Bey
                </p>
                <p className="text-gray-600 text-sm">
                  &ldquo;Mi misión es ayudar a las organizaciones a crear culturas 
                  que no solo sobrevivan al cambio, sino que prosperen en él.&rdquo;
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-keex-green">50+</div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-keex-green">10+</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-keex-green">8</div>
                <div className="text-sm text-gray-600">Países</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-keex-green">95%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
