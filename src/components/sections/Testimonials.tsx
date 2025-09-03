import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    company: 'TechCorp México',
    position: 'Directora de Recursos Humanos',
    content: 'Alicia transformó completamente nuestra cultura organizacional. En 6 meses logramos un 40% de mejora en engagement y redujimos la rotación en un 25%. Su enfoque basado en datos es excepcional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    company: 'InnovateLatam',
    position: 'CEO',
    content: 'El proceso de adaptación a trabajo híbrido fue un desafío enorme. Alicia nos guió paso a paso y hoy tenemos una de las mejores culturas remotas de la región. Los resultados hablan por sí solos.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ana Rodríguez',
    company: 'Global Solutions',
    position: 'VP de Operaciones',
    content: 'Los talleres de comunicación interna cambiaron la forma en que nuestros equipos colaboran. La mejora en productividad y satisfacción del empleado ha sido notable.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-keex-green mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que han transformado su cultura organizacional con K'eex Bey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-keex-beige/20 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-keex-ocre text-lg">★</span>
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t border-keex-beige pt-4">
                <div className="font-semibold text-keex-green">
                  {testimonial.name}
                </div>
                <div className="text-sm text-keex-terracotta">
                  {testimonial.position}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Listo para transformar la cultura de tu organización?
          </p>
          <a
            href="/casos-estudio"
            className="inline-flex items-center text-keex-green hover:text-keex-terracotta font-semibold transition-colors"
          >
            Ver más casos de estudio
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
