import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { ROICalculator } from '@/components/tools/ROICalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { caseStudies } from '@/data/caseStudies';
import { resources } from '@/data/resources';
import Link from 'next/link';
import { Calculator, FileText, Play, ArrowRight, Star, Clock } from 'lucide-react';

export default function Home() {
  const featuredResources = resources.filter(resource => resource.featured).slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <>
      <Hero />
      
      {/* ROI Calculator Section - Early Conversion */}
      <section id="calculadora-roi" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Calcula el ROI de tu Transformación Cultural
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cuánto puede ahorrar tu organización con nuestra calculadora 
              basada en datos reales de 50+ empresas.
            </p>
          </div>
          
          <ROICalculator />
          
          <div className="text-center mt-8">
            <Link
              href="/recursos"
              className="inline-flex items-center text-keex-terracotta hover:text-keex-green font-semibold transition-colors"
            >
              Ver más herramientas gratuitas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - Social Proof */}
      <section className="py-16 bg-keex-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casos reales de empresas que han transformado su cultura con K&apos;eex Bey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredCaseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-keex-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <span className="text-gray-500 text-sm">{caseStudy.company}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-keex-green mb-3">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {caseStudy.challenge.substring(0, 150)}...
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-keex-ocre mt-1">✓</span>
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/casos-estudio"
                  className="inline-flex items-center text-keex-terracotta hover:text-keex-green font-semibold transition-colors"
                >
                  Ver caso completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/casos-estudio"
              className="bg-keex-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200"
            >
              Ver Todos los Casos de Estudio
            </Link>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Featured Resources - Lead Magnet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Recursos Gratuitos para Empezar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas y guías probadas que puedes usar inmediatamente en tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-keex-green/10 rounded-full flex items-center justify-center">
                    {resource.type === 'tool' && <Calculator className="w-6 h-6 text-keex-green" />}
                    {resource.type === 'guide' && <FileText className="w-6 h-6 text-keex-green" />}
                    {resource.type === 'webinar' && <Play className="w-6 h-6 text-keex-green" />}
                    {resource.type === 'framework' && <FileText className="w-6 h-6 text-keex-green" />}
                  </div>
                  <span className="bg-keex-green/10 text-keex-green px-2 py-1 rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-keex-green mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description.substring(0, 120)}...
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.estimatedTime}</span>
                  </div>
                  <span className="text-keex-terracotta font-medium">
                    {resource.format}
                  </span>
                </div>
                
                <Link
                  href="/recursos"
                  className="w-full bg-keex-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Acceder Gratis
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/recursos"
              className="inline-flex items-center text-keex-terracotta hover:text-keex-green font-semibold transition-colors"
            >
              Ver todos los recursos gratuitos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <About />
      
      {/* Social Proof with Testimonials */}
      <section className="py-16 bg-gradient-to-br from-keex-green to-keex-terracotta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Testimonios reales de líderes que han transformado sus organizaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white/10 rounded-xl p-6">
                {caseStudy.testimonial && (
                  <>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(caseStudy.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-keex-ocre fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-white/90 italic mb-4">
                      &ldquo;{caseStudy.testimonial.content}&rdquo;
                    </blockquote>
                    
                    <div className="border-t border-white/20 pt-4">
                      <div className="font-semibold text-white">
                        {caseStudy.testimonial.name}
                      </div>
                      <div className="text-sm text-white/80">
                        {caseStudy.testimonial.position}
                      </div>
                      <div className="text-sm text-white/70">
                        {caseStudy.testimonial.company}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-keex-green mb-6">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear 
            una cultura que prospere.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <ContactForm source="contact" />
          </div>
    </div>
      </section>
    </>
  );
}