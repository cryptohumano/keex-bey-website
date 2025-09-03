import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-keex-beige to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-keex-green mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-600">
              Información sobre cómo recopilamos, usamos y protegemos tus datos personales
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
              K&apos;eex Bey, con domicilio en México, es responsable del tratamiento de los datos personales 
              que nos proporciones a través de nuestro sitio web y servicios de consultoría en transformación cultural.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              2. Datos Personales que Recopilamos
            </h2>
            <p className="text-gray-700 mb-4">
              Recopilamos los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Datos de identificación:</strong> Nombre completo, correo electrónico, teléfono</li>
              <li><strong>Datos laborales:</strong> Empresa, cargo, industria</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, cookies, páginas visitadas</li>
              <li><strong>Datos de comunicación:</strong> Mensajes enviados a través de formularios de contacto</li>
              <li><strong>Datos de uso:</strong> Información sobre el uso de nuestros recursos y herramientas</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              3. Finalidades del Tratamiento
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos tus datos personales para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Proporcionar nuestros servicios de consultoría en transformación cultural</li>
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Enviar recursos, guías y herramientas relacionadas con nuestros servicios</li>
              <li>Mejorar nuestros servicios y desarrollar nuevos productos</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Realizar análisis estadísticos y de mercado</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              4. Base Legal para el Tratamiento
            </h2>
            <p className="text-gray-700 mb-6">
              El tratamiento de tus datos personales se basa en:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Consentimiento:</strong> Cuando nos proporcionas tus datos voluntariamente</li>
              <li><strong>Ejecución contractual:</strong> Para cumplir con los servicios contratados</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicaciones</li>
              <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales aplicables</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              5. Derechos ARCO
            </h2>
            <p className="text-gray-700 mb-4">
              De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México, 
              tienes los siguientes derechos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-keex-beige/20 rounded-lg p-6">
                <h3 className="font-semibold text-keex-green mb-2">Acceso</h3>
                <p className="text-sm text-gray-700">
                  Conocer qué datos personales tenemos sobre ti y cómo los utilizamos.
                </p>
              </div>
              
              <div className="bg-keex-beige/20 rounded-lg p-6">
                <h3 className="font-semibold text-keex-green mb-2">Rectificación</h3>
                <p className="text-sm text-gray-700">
                  Corregir tus datos personales cuando sean inexactos o estén incompletos.
                </p>
              </div>
              
              <div className="bg-keex-beige/20 rounded-lg p-6">
                <h3 className="font-semibold text-keex-green mb-2">Cancelación</h3>
                <p className="text-sm text-gray-700">
                  Solicitar la eliminación de tus datos personales de nuestras bases de datos.
                </p>
              </div>
              
              <div className="bg-keex-beige/20 rounded-lg p-6">
                <h3 className="font-semibold text-keex-green mb-2">Oposición</h3>
                <p className="text-sm text-gray-700">
                  Oponerte al tratamiento de tus datos para fines específicos.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              6. Ejercicio de Derechos ARCO
            </h2>
            <p className="text-gray-700 mb-4">
              Para ejercer cualquiera de tus derechos ARCO, puedes contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Correo electrónico:</strong> {SOCIAL_LINKS.email}</li>
              <li><strong>Teléfono:</strong> {SOCIAL_LINKS.phone}</li>
              <li><strong>Formulario de contacto:</strong> En nuestro sitio web</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              Tu solicitud debe incluir:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nombre completo y domicilio</li>
              <li>Descripción clara de los datos sobre los que se busca ejercer el derecho</li>
              <li>Cualquier elemento que facilite la localización de los datos</li>
              <li>Documento que acredite la identidad del titular</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              7. Transferencias de Datos
            </h2>
            <p className="text-gray-700 mb-6">
              No transferimos tus datos personales a terceros, salvo cuando sea necesario para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cumplir con obligaciones legales</li>
              <li>Proporcionar servicios técnicos (proveedores de hosting, email marketing)</li>
              <li>Colaborar con socios comerciales autorizados</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              8. Medidas de Seguridad
            </h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas técnicas, administrativas y físicas para proteger tus datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cifrado de datos en tránsito y en reposo</li>
              <li>Acceso restringido a datos personales</li>
              <li>Monitoreo continuo de sistemas</li>
              <li>Capacitación del personal en protección de datos</li>
              <li>Copias de seguridad regulares</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              9. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Mejorar la funcionalidad del sitio web</li>
              <li>Analizar el uso del sitio web</li>
              <li>Personalizar el contenido</li>
              <li>Recordar tus preferencias</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
              la funcionalidad del sitio web.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              10. Retención de Datos
            </h2>
            <p className="text-gray-700 mb-6">
              Conservamos tus datos personales durante el tiempo necesario para cumplir con las 
              finalidades descritas en esta política, o hasta que solicites su eliminación. 
              Los datos se eliminarán de forma segura cuando ya no sean necesarios.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              11. Menores de Edad
            </h2>
            <p className="text-gray-700 mb-6">
              Nuestros servicios están dirigidos a profesionales y empresas. No recopilamos 
              intencionalmente datos personales de menores de 18 años. Si un menor nos proporciona 
              datos personales, los eliminaremos inmediatamente al enterarnos.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              12. Cambios a esta Política
            </h2>
            <p className="text-gray-700 mb-6">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos 
              sobre cambios significativos a través de nuestro sitio web o por correo electrónico. 
              Te recomendamos revisar esta política periódicamente.
            </p>

            <h2 className="text-2xl font-serif font-bold text-keex-green mb-6">
              13. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de 
              tus datos personales, puedes contactarnos:
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
                <strong>Nota:</strong> Esta Política de Privacidad cumple con la Ley Federal de 
                Protección de Datos Personales en Posesión de los Particulares de México y 
                otras regulaciones aplicables en materia de protección de datos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
