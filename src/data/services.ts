import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'consultoria-cultural',
    title: 'Consultoría en Transformación Cultural',
    description: 'Diagnóstico y estrategia personalizada para transformar la cultura organizacional de tu empresa.',
    features: [
      'Diagnóstico cultural completo',
      'Estrategia de transformación personalizada',
      'Plan de implementación por fases',
      'Seguimiento y medición de resultados',
      'Capacitación a líderes y equipos'
    ],
    duration: '3-6 meses',
    icon: '🏢'
  },
  {
    id: 'talleres-comunicacion',
    title: 'Talleres de Comunicación Interna',
    description: 'Mejora la comunicación entre equipos y niveles jerárquicos con metodologías probadas.',
    features: [
      'Talleres de comunicación asertiva',
      'Herramientas de feedback efectivo',
      'Técnicas de escucha activa',
      'Resolución de conflictos',
      'Comunicación en entornos híbridos'
    ],
    duration: '1-2 días',
    icon: '💬'
  },
  {
    id: 'adaptacion-hibrida',
    title: 'Adaptación a Entornos Híbridos',
    description: 'Transición suave hacia modelos de trabajo híbridos manteniendo la productividad y engagement.',
    features: [
      'Diseño de políticas híbridas',
      'Herramientas de colaboración digital',
      'Gestión de equipos remotos',
      'Cultura de confianza y autonomía',
      'Métricas de productividad híbrida'
    ],
    duration: '2-4 meses',
    icon: '🏠'
  },
  {
    id: 'liderazgo-transformacional',
    title: 'Desarrollo de Liderazgo Transformacional',
    description: 'Formación de líderes capaces de guiar procesos de cambio cultural exitosos.',
    features: [
      'Coaching ejecutivo personalizado',
      'Habilidades de liderazgo adaptativo',
      'Gestión del cambio',
      'Comunicación estratégica',
      'Desarrollo de equipos de alto rendimiento'
    ],
    duration: '6-12 meses',
    icon: '👥'
  }
];
