import { services } from '@/data/services';
import Link from 'next/link';

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-keex-green mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para transformar la cultura de tu organización 
            y mejorar la comunicación interna
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-keex-beige rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-keex-green mb-2">
                    {service.title}
                  </h3>
                  {service.duration && (
                    <span className="inline-block bg-keex-beige text-keex-green px-3 py-1 rounded-full text-sm font-medium">
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-keex-ocre mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/servicios#${service.id}`}
                className="inline-flex items-center text-keex-green hover:text-keex-terracotta font-semibold transition-colors"
              >
                Conocer más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contacto"
            className="bg-keex-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar Consulta Personalizada
          </Link>
        </div>
      </div>
    </section>
  );
}
