import { ContactForm } from '@/components/forms/ContactForm';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { FAQ } from '@/components/ui/FAQ';
import { SOCIAL_LINKS } from '@/lib/constants';

const faqData = [
  {
    question: "¿Cuánto tiempo toma el proceso de transformación cultural?",
    answer: "El tiempo varía según el tamaño y complejidad de la organización. Los procesos típicos van de 3 a 12 meses, con resultados visibles desde los primeros 30 días."
  },
  {
    question: "¿Trabajan con empresas de todos los tamaños?",
    answer: "Nos especializamos en empresas medianas y grandes (50+ empleados), pero también trabajamos con startups en crecimiento que buscan establecer una cultura sólida desde el inicio."
  },
  {
    question: "¿Ofrecen servicios remotos?",
    answer: "Sí, trabajamos tanto de forma presencial como remota. Nuestros talleres y consultorías se adaptan perfectamente a entornos híbridos y remotos."
  },
  {
    question: "¿Cómo miden el éxito de la transformación?",
    answer: "Utilizamos métricas específicas como engagement, productividad, retención de talento y satisfacción del empleado. Proporcionamos reportes detallados con datos cuantificables."
  },
  {
    question: "¿Qué incluye la consulta gratuita?",
    answer: "La consulta gratuita de 30 minutos incluye un análisis inicial de tus desafíos culturales, recomendaciones específicas y un plan de acción personalizado para tu organización."
  },
  {
    question: "¿Trabajan en toda América Latina?",
    answer: "Sí, tenemos experiencia trabajando en 8 países de América Latina y ofrecemos servicios tanto presenciales como remotos para adaptarnos a las necesidades de cada región."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Contacta con K&apos;eex Bey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Listo para transformar la cultura de tu organización? 
              Agenda una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm source="contact" />
            </div>

            {/* Contact Info & Newsletter */}
            <div className="space-y-6 lg:space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <h3 className="text-xl font-serif font-bold text-keex-green mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-keex-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-keex-green text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Correo Electrónico</h4>
                      <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="text-keex-terracotta hover:text-keex-green transition-colors"
                      >
                        {SOCIAL_LINKS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-keex-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-keex-green text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <a 
                        href={`tel:${SOCIAL_LINKS.phone}`}
                        className="text-keex-terracotta hover:text-keex-green transition-colors"
                      >
                        {SOCIAL_LINKS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-keex-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-keex-green text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                      <a 
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-keex-terracotta hover:text-keex-green transition-colors"
                      >
                        Conectar en LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Horarios de Atención</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM (GMT-6)</p>
                    <p>Sábados: 10:00 AM - 2:00 PM (GMT-6)</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-keex-green mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600">
              Respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>

          <FAQ items={faqData} />
        </div>
      </section>
    </div>
  );
}
