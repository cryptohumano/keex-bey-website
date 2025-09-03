import { resources, resourceCategories } from '@/data/resources';
import { ROICalculator } from '@/components/tools/ROICalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { Download, Lock, Clock, Users, FileText, Play, Calculator } from 'lucide-react';

export default function ResourcesPage() {
  const featuredResources = resources.filter(resource => resource.featured);
  // const gatedResources = resources.filter(resource => resource.isGated);
  // const freeResources = resources.filter(resource => !resource.isGated);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Recursos Exclusivos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Herramientas, guías y plantillas probadas para impulsar la transformación 
              cultural en tu organización. Acceso gratuito a recursos premium.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">8 Recursos Premium</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Calculadora de ROI</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Acceso Gratuito</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Calculadora de ROI Interactiva
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calcula el retorno de inversión de tu proyecto de transformación cultural 
              con nuestra herramienta basada en datos reales de 50+ empresas.
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-keex-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Recursos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros recursos más populares y efectivos para la transformación cultural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-keex-green to-keex-terracotta flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">
                      {resource.type === 'tool' && <Calculator />}
                      {resource.type === 'guide' && <FileText />}
                      {resource.type === 'webinar' && <Play />}
                      {resource.type === 'framework' && <FileText />}
                    </div>
                    <div className="text-sm opacity-90">{resource.format}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-keex-green/10 text-keex-green px-2 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                    {resource.isGated && (
                      <span className="bg-keex-ocre/10 text-keex-ocre px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Premium
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-keex-green mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {resource.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-keex-ocre mt-1">✓</span>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{resource.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{resource.targetAudience}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-keex-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    {resource.isGated ? 'Acceder Gratis' : 'Descargar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Explora por Categoría
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra el recurso perfecto para tu necesidad específica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resourceCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-xl p-6 hover:bg-keex-beige/20 transition-colors duration-200 cursor-pointer">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-keex-green mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                <div className="text-xs text-keex-terracotta font-medium">
                  {category.count} recursos
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Todos los Recursos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Biblioteca completa de herramientas y recursos para transformación cultural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-keex-green/10 text-keex-green px-2 py-1 rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                  {resource.isGated && (
                    <Lock className="w-4 h-4 text-keex-ocre" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-keex-green mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
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
                
                <button className="w-full bg-keex-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  {resource.isGated ? 'Acceder Gratis' : 'Descargar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-br from-keex-green to-keex-terracotta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Por Qué Nuestros Recursos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Basados en Datos</h3>
              <p className="text-white/90 text-sm">
                Todos nuestros recursos están respaldados por investigación y datos reales de 50+ empresas
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Probados en Campo</h3>
              <p className="text-white/90 text-sm">
                Metodologías y herramientas que han demostrado resultados en empresas Fortune 500
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Listos para Usar</h3>
              <p className="text-white/90 text-sm">
                Plantillas, frameworks y herramientas que puedes implementar inmediatamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-keex-green mb-6">
            ¿Necesitas Recursos Personalizados?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Si no encuentras lo que buscas, podemos crear recursos específicos 
            para tu organización. Agenda una consulta gratuita.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <ContactForm source="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
