import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Términos de Servicio
            </h1>
            <p className="text-xl text-gray-600">
              Condiciones de uso de nuestros servicios de consultoría en transformación cultural
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Última actualización: {new Date().toLocaleDateString('es-MX')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              1. Información General
            </h2>
            <p className="text-gray-700 mb-6">
              Estos Términos de Servicio (&quot;Términos&quot;) rigen el uso de los servicios proporcionados 
              por K&apos;eex Bey, empresa especializada en consultoría de transformación cultural empresarial. 
              Al acceder a nuestro sitio web o utilizar nuestros servicios, aceptas estos términos en su totalidad.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              2. Servicios Ofrecidos
            </h2>
            <p className="text-gray-700 mb-4">
              K&apos;eex Bey proporciona los siguientes servicios:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Consultoría de Transformación Cultural:</strong> Diagnóstico, diseño e implementación de estrategias culturales</li>
              <li><strong>Desarrollo de Liderazgo:</strong> Programas de coaching y desarrollo de competencias directivas</li>
              <li><strong>Comunicación Interna:</strong> Estrategias y herramientas para mejorar la comunicación organizacional</li>
              <li><strong>Adaptación a Entornos Híbridos:</strong> Consultoría para modelos de trabajo híbrido y remoto</li>
              <li><strong>Recursos y Herramientas:</strong> Plantillas, guías y calculadoras especializadas</li>
              <li><strong>Formación y Capacitación:</strong> Talleres, webinars y programas de desarrollo</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              3. Uso del Sitio Web
            </h2>
            <h3 className="text-xl font-semibold text-keex-green mb-4">
              3.1 Uso Permitido
            </h3>
            <p className="text-gray-700 mb-4">
              Puedes utilizar nuestro sitio web para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Obtener información sobre nuestros servicios</li>
              <li>Acceder a recursos gratuitos y herramientas</li>
              <li>Contactarnos para consultas y servicios</li>
              <li>Calcular ROI de proyectos de transformación cultural</li>
              <li>Descargar contenido educativo y plantillas</li>
            </ul>

            <h3 className="text-xl font-semibold text-keex-green mb-4">
              3.2 Uso Prohibido
            </h3>
            <p className="text-gray-700 mb-4">
              No puedes utilizar nuestro sitio web para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Actividades ilegales o no autorizadas</li>
              <li>Transmitir virus, malware o código malicioso</li>
              <li>Intentar acceder a sistemas o datos no autorizados</li>
              <li>Reproducir, distribuir o modificar nuestro contenido sin autorización</li>
              <li>Interferir con el funcionamiento del sitio web</li>
              <li>Recopilar información de otros usuarios</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              4. Contratación de Servicios
            </h2>
            <h3 className="text-xl font-semibold text-keex-green mb-4">
              4.1 Proceso de Contratación
            </h3>
            <p className="text-gray-700 mb-6">
              La contratación de nuestros servicios se realiza mediante:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Consulta inicial gratuita para evaluar necesidades</li>
              <li>Propuesta comercial detallada con alcance y costos</li>
              <li>Contrato de servicios específico</li>
              <li>Pago según términos acordados</li>
            </ul>

            <h3 className="text-xl font-semibold text-keex-green mb-4">
              4.2 Precios y Pagos
            </h3>
            <p className="text-gray-700 mb-6">
              Los precios de nuestros servicios se establecen en la propuesta comercial y pueden variar 
              según el alcance, duración y complejidad del proyecto. Los pagos se realizan según 
              el cronograma acordado en el contrato.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              5. Propiedad Intelectual
            </h2>
            <h3 className="text-xl font-semibold text-keex-green mb-4">
              5.1 Contenido de K&apos;eex Bey
            </h3>
            <p className="text-gray-700 mb-6">
              Todo el contenido del sitio web, incluyendo textos, imágenes, videos, herramientas, 
              plantillas y metodologías, es propiedad de K&apos;eex Bey y está protegido por 
              derechos de autor y otras leyes de propiedad intelectual.
            </p>

            <h3 className="text-xl font-semibold text-keex-green mb-4">
              5.2 Uso de Recursos
            </h3>
            <p className="text-gray-700 mb-6">
              Los recursos gratuitos pueden ser utilizados para fines internos de tu organización. 
              No pueden ser redistribuidos, vendidos o utilizados para servicios de consultoría 
              de terceros sin autorización expresa.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              6. Confidencialidad
            </h2>
            <p className="text-gray-700 mb-6">
              K&apos;eex Bey se compromete a mantener la confidencialidad de toda la información 
              proporcionada por nuestros clientes. Esta información incluye datos empresariales, 
              estrategias, procesos y cualquier información sensible compartida durante nuestros servicios.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              7. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 mb-6">
              K&apos;eex Bey proporciona sus servicios con el mayor nivel de profesionalismo y 
              experiencia. Sin embargo, no garantizamos resultados específicos, ya que estos 
              dependen de múltiples factores internos y externos de cada organización. 
              Nuestra responsabilidad se limita al valor de los servicios contratados.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              8. Cancelación y Reembolsos
            </h2>
            <h3 className="text-xl font-semibold text-keex-green mb-4">
              8.1 Cancelación por el Cliente
            </h3>
            <p className="text-gray-700 mb-6">
              Los clientes pueden cancelar servicios con 30 días de anticipación. Los reembolsos 
              se calcularán proporcionalmente a los servicios no prestados, menos los costos 
              ya incurridos.
            </p>

            <h3 className="text-xl font-semibold text-keex-green mb-4">
              8.2 Cancelación por K&apos;eex Bey
            </h3>
            <p className="text-gray-700 mb-6">
              Podemos cancelar servicios en caso de incumplimiento de pago, violación de estos 
              términos, o por razones de fuerza mayor. En tales casos, se proporcionará un 
              reembolso proporcional de los servicios no prestados.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              9. Modificaciones de los Términos
            </h2>
            <p className="text-gray-700 mb-6">
              K&apos;eex Bey se reserva el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en 
              nuestro sitio web. El uso continuado de nuestros servicios constituye la aceptación 
              de los términos modificados.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              10. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 mb-6">
              Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta 
              en los tribunales competentes de México, específicamente en la Ciudad de México.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              11. Fuerza Mayor
            </h2>
            <p className="text-gray-700 mb-6">
              K&apos;eex Bey no será responsable por retrasos o incumplimientos causados por 
              circunstancias fuera de nuestro control, incluyendo pero no limitado a desastres 
              naturales, pandemias, huelgas, o fallas en servicios de terceros.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              12. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Para preguntas sobre estos Términos de Servicio, puedes contactarnos:
            </p>
            <div className="bg-keex-beige/20 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>K&apos;eex Bey</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Correo electrónico:</strong> {SOCIAL_LINKS.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Teléfono:</strong> {SOCIAL_LINKS.phone}
              </p>
              <p className="text-gray-700">
                <strong>Sitio web:</strong> {SITE_CONFIG.url}
              </p>
            </div>

            <div className="mt-8 p-6 bg-keex-green/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> Estos Términos de Servicio forman parte integral del 
                contrato de servicios. Al contratar nuestros servicios, confirmas que has 
                leído, entendido y aceptado estos términos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
