import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-keex-green to-keex-terracotta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          ¿Listo para transformar tu organización?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agenda una consulta gratuita de 30 minutos y descubre cómo podemos 
          ayudar a tu empresa a crear una cultura que prospere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contacto"
            className="bg-white text-keex-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-keex-beige transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Consulta Gratuita
          </Link>
          <Link
            href="/recursos"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-keex-green transition-colors duration-200"
          >
            Descargar Recursos
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white">✓</span>
            <span>Consulta gratuita de 30 min</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">✓</span>
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">✓</span>
            <span>Respuesta en 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
