import { ContactForm } from '@/components/forms/ContactForm';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function AboutAliciaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
                Conoce a {SITE_CONFIG.author}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Especialista en transformación cultural con más de 10 años de experiencia 
                ayudando a organizaciones a crear culturas que prosperan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-keex-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-keex-terracotta transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  Conectar en LinkedIn
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center border-2 border-keex-green text-keex-green px-6 py-3 rounded-lg font-semibold hover:bg-keex-green hover:text-white transition-colors duration-200"
                >
                  Agenda una Consulta
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-keex-green to-keex-terracotta rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">👩‍💼</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {SITE_CONFIG.author}
                  </h3>
                  <p className="text-keex-beige font-medium mb-4">
                    Fundadora de K'eex Bey
                  </p>
                  <p className="text-white/90 text-sm italic">
                    "Mi misión es ayudar a las organizaciones a crear culturas 
                    que no solo sobrevivan al cambio, sino que prosperen en él."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-6">
              Mi Historia
            </h2>
            <p className="text-xl text-gray-600">
              De la experiencia práctica a la transformación organizacional
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Mi trayectoria profesional comenzó hace más de una década en el sector de relaciones públicas 
              y atención al cliente, donde desarrollé una profunda comprensión de la importancia de la 
              comunicación efectiva y la empatía en el entorno laboral.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Durante mi experiencia en el <strong>Instituto Mexicano del Petróleo</strong>, participé en 
              proyectos de evaluación y análisis de impacto que me permitieron entender cómo las dinámicas 
              organizacionales afectan directamente los resultados empresariales. Esta experiencia fue 
              fundamental para desarrollar mi enfoque basado en datos y métricas.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Mi formación académica incluye estudios en <strong>Psicología</strong> y una especialización 
              como <strong>Técnico Superior en Animación Sociocultural y Turística</strong>, lo que me ha 
              proporcionado una base sólida para entender tanto los aspectos técnicos como humanos de la 
              transformación organizacional.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              A lo largo de mi carrera, he trabajado en diversos sectores, desde el turismo hasta la 
              industria energética, lo que me ha dado una perspectiva única sobre cómo adaptar estrategias 
              de transformación cultural a diferentes contextos y realidades empresariales.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-keex-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Mi Experiencia y Especialización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una combinación única de experiencia práctica y formación académica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-keex-green text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-4">
                Formación Académica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Estudios en Psicología (UNED)</li>
                <li>• Técnico Superior en Animación Sociocultural</li>
                <li>• Certificaciones en metodologías ágiles</li>
                <li>• Especialización en transformación cultural</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-keex-green text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-4">
                Experiencia Corporativa
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Instituto Mexicano del Petróleo</li>
                <li>• Proyectos de evaluación e impacto</li>
                <li>• Análisis de dinámicas organizacionales</li>
                <li>• Gestión de equipos multidisciplinarios</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-keex-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-keex-green text-2xl">🌎</span>
              </div>
              <h3 className="text-xl font-semibold text-keex-green mb-4">
                Alcance Regional
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Experiencia en 8 países de América Latina</li>
                <li>• Adaptación a contextos culturales diversos</li>
                <li>• Comprensión de realidades empresariales locales</li>
                <li>• Red de contactos regionales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Métricas que demuestran el impacto de mi trabajo en las organizaciones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-keex-green mb-2">50+</div>
              <div className="text-gray-600">Empresas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-keex-green mb-2">10+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-keex-green mb-2">95%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-keex-green mb-2">8</div>
              <div className="text-gray-600">Países de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-keex-green to-keex-terracotta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">
            Mi Filosofía de Trabajo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enfoque Basado en Datos</h3>
              <p className="text-white/90 text-sm">
                Cada recomendación está respaldada por métricas específicas y análisis cuantificables
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Colaboración Auténtica</h3>
              <p className="text-white/90 text-sm">
                Trabajo codo a codo con los equipos para crear soluciones sostenibles y auténticas
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Resultados Medibles</h3>
              <p className="text-white/90 text-sm">
                Cada proyecto incluye métricas claras de éxito y seguimiento continuo
              </p>
            </div>
          </div>

          <blockquote className="text-xl text-white/90 italic mb-8">
            "La transformación cultural no es un destino, es un viaje continuo de mejora, 
            adaptación y crecimiento que requiere compromiso, paciencia y una visión clara 
            del futuro que queremos construir."
          </blockquote>
          
          <p className="text-white/80">— Alicia Rodríguez Rosas</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-keex-green mb-6">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos trabajar juntos 
            para crear una cultura que prospere.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <ContactForm source="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
