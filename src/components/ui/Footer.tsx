import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-keex-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">K'eex Bey</h3>
            <p className="text-keex-beige mb-4 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <p className="text-keex-beige text-sm">
              Fundada por {SITE_CONFIG.author}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-keex-beige hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/sobre-alicia" className="text-keex-beige hover:text-white transition-colors">
                  Sobre Alicia
                </Link>
              </li>
              <li>
                <Link href="/casos-estudio" className="text-keex-beige hover:text-white transition-colors">
                  Casos de Estudio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-keex-beige hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-keex-beige">
              <p>
                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SOCIAL_LINKS.phone}
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-keex-beige hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-keex-terracotta mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-keex-beige text-sm">
              © {new Date().getFullYear()} K'eex Bey. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-privacidad" className="text-keex-beige hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-servicio" className="text-keex-beige hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
