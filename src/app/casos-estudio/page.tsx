import { caseStudies } from '@/data/caseStudies';
import { ContactForm } from '@/components/forms/ContactForm';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Casos de Estudio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descubre cómo hemos ayudado a organizaciones líderes a transformar 
              su cultura y lograr resultados excepcionales.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">50+ Empresas Transformadas</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">8 Países</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">95% Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Transformaciones Exitosas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casos reales de organizaciones que han logrado resultados extraordinarios 
              con nuestra metodología de transformación cultural.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-keex-green text-white px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {caseStudy.company}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-keex-green mb-4">
                        {caseStudy.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solución:</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Resultados:</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-keex-ocre mt-1">✓</span>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics & Testimonial */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-8">
                    {/* Metrics */}
                    <div className="bg-gradient-to-br from-keex-green to-keex-terracotta rounded-xl p-8 text-white">
                      <h4 className="text-xl font-semibold mb-6">Métricas Clave</h4>
                      <div className="grid grid-cols-1 gap-6">
                        {caseStudy.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-bold mb-1">{metric.value}</div>
                            <div className="text-sm opacity-90 mb-1">{metric.label}</div>
                            <div className="text-xs opacity-75">{metric.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {caseStudy.testimonial && (
                      <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(caseStudy.testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-keex-ocre text-lg">★</span>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-6">
                          &ldquo;{caseStudy.testimonial.content}&rdquo;
                        </blockquote>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="font-semibold text-keex-green">
                            {caseStudy.testimonial.name}
                          </div>
                          <div className="text-sm text-keex-terracotta">
                            {caseStudy.testimonial.position}
                          </div>
                          <div className="text-sm text-gray-600">
                            {caseStudy.testimonial.company}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Con Quienes Hemos Trabajado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizaciones líderes que confían en K&apos;eex Bey para su transformación cultural
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Clientes destacados */}
            {[
              'PEMEX', 'Tecnológico de Monterrey', 'FEMSA', 'Santander', 
              'Accenture', 'Grupo México', 'Banco de México', 'Sigma',
              'Larousse', 'Diageo', 'Sonoco', 'American Tower',
              'Copa Airlines', 'UVM', 'Mattel', 'Western Union',
              'Zurich', 'Dow', 'Alsea', 'Capgemini'
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-gray-600 font-semibold text-sm">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-keex-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Resultados Promedio de Nuestros Proyectos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Métricas consolidadas de todos nuestros casos de estudio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-keex-green mb-2">42%</div>
              <div className="text-gray-600 mb-2">Mejora Promedio en Engagement</div>
              <div className="text-sm text-gray-500">Rango: 25% - 60%</div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-keex-green mb-2">35%</div>
              <div className="text-gray-600 mb-2">Incremento en Productividad</div>
              <div className="text-sm text-gray-500">Rango: 25% - 50%</div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-keex-green mb-2">45%</div>
              <div className="text-gray-600 mb-2">Reducción en Conflictos</div>
              <div className="text-sm text-gray-500">Rango: 30% - 60%</div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-keex-green mb-2">38%</div>
              <div className="text-gray-600 mb-2">Mejora en Retención</div>
              <div className="text-sm text-gray-500">Rango: 25% - 50%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-keex-green to-keex-terracotta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Listo para Ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a las organizaciones líderes que han transformado su cultura 
            con K&apos;eex Bey. Agenda una consulta gratuita y descubre cómo podemos 
            ayudarte a lograr resultados similares.
          </p>
          
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <ContactForm source="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
