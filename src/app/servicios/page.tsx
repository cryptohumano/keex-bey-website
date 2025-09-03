import { services } from '@/data/services';
import Link from 'next/link';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para transformar la cultura de tu organización 
              y mejorar la comunicación interna con metodologías probadas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-keex-green mb-2">
                      {service.title}
                    </h2>
                    {service.duration && (
                      <span className="inline-block bg-keex-beige text-keex-green px-4 py-2 rounded-full text-sm font-medium">
                        Duración: {service.duration}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-keex-green mb-4">
                    ¿Qué incluye este servicio?
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-keex-ocre mt-1 text-lg">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center bg-keex-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200"
                  >
                    Solicitar Información
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados medibles y transformación sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-keex-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-keex-green mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">
                Análisis profundo de la cultura actual, identificación de desafíos y oportunidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-keex-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-keex-green mb-2">Estrategia</h3>
              <p className="text-gray-600 text-sm">
                Diseño de plan personalizado con objetivos claros y métricas de éxito
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-keex-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-keex-green mb-2">Implementación</h3>
              <p className="text-gray-600 text-sm">
                Ejecución del plan con acompañamiento continuo y ajustes según necesidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-keex-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-keex-green mb-2">Seguimiento</h3>
              <p className="text-gray-600 text-sm">
                Monitoreo de resultados, optimización continua y consolidación de cambios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-keex-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Beneficios de Transformar tu Cultura
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los resultados que puedes esperar al trabajar con K'eex Bey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-keex-green text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-3">
                Mayor Productividad
              </h3>
              <p className="text-gray-600">
                Hasta 40% de mejora en productividad y eficiencia organizacional
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-keex-green text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-3">
                Mejor Comunicación
              </h3>
              <p className="text-gray-600">
                Reducción del 60% en conflictos internos y mejora en colaboración
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-keex-green text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-3">
                Mayor Engagement
              </h3>
              <p className="text-gray-600">
                Incremento del 50% en satisfacción y retención de empleados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-keex-green to-keex-terracotta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear 
            una cultura que prospere.
          </p>
          
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <ContactForm source="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
