import { Resource } from '@/types';

export const resources: Resource[] = [
  {
    id: 'calculadora-roi-transformacion-cultural',
    title: 'Calculadora de ROI para Transformación Cultural',
    description: 'Herramienta interactiva que te permite calcular el retorno de inversión de tu proyecto de transformación cultural. Incluye métricas específicas por industria y tamaño de empresa.',
    type: 'tool',
    category: 'Herramientas',
    isGated: true,
    downloadUrl: '/downloads/calculadora-roi-transformacion-cultural',
    previewImage: '/images/resources/calculadora-roi-preview.jpg',
    benefits: [
      'Calcula ROI específico para tu industria',
      'Métricas personalizadas por tamaño de empresa',
      'Comparación con benchmarks del mercado',
      'Reporte ejecutivo descargable'
    ],
    targetAudience: 'Directores de RRHH, CEOs, Consultores',
    estimatedTime: '15-20 minutos',
    format: 'Herramienta Interactiva',
    featured: true
  },
  {
    id: 'guia-diagnostico-cultural-2024',
    title: 'Guía Completa de Diagnóstico Cultural 2024',
    description: 'Metodología paso a paso para realizar un diagnóstico cultural profundo en tu organización. Incluye plantillas, cuestionarios y frameworks probados.',
    type: 'guide',
    category: 'Guías',
    isGated: true,
    downloadUrl: '/downloads/guia-diagnostico-cultural-2024.pdf',
    previewImage: '/images/resources/guia-diagnostico-preview.jpg',
    benefits: [
      'Metodología probada en 50+ empresas',
      'Plantillas listas para usar',
      'Cuestionarios validados científicamente',
      'Framework de análisis de resultados'
    ],
    targetAudience: 'Directores de RRHH, Consultores, Líderes de Cambio',
    estimatedTime: '45-60 minutos',
    format: 'PDF (45 páginas)',
    featured: true
  },
  {
    id: 'playbook-comunicacion-interna',
    title: 'Playbook de Comunicación Interna Efectiva',
    description: 'Estrategias y tácticas comprobadas para mejorar la comunicación interna en organizaciones híbridas. Incluye casos de estudio de empresas Fortune 500.',
    type: 'playbook',
    category: 'Playbooks',
    isGated: true,
    downloadUrl: '/downloads/playbook-comunicacion-interna.pdf',
    previewImage: '/images/resources/playbook-comunicacion-preview.jpg',
    benefits: [
      '25 estrategias de comunicación probadas',
      'Casos de estudio de empresas líderes',
      'Plantillas de mensajes y campañas',
      'Métricas de seguimiento y evaluación'
    ],
    targetAudience: 'Directores de Comunicación, RRHH, Líderes de Equipo',
    estimatedTime: '30-40 minutos',
    format: 'PDF (32 páginas)',
    featured: false
  },
  {
    id: 'framework-liderazgo-transformacional',
    title: 'Framework de Liderazgo Transformacional',
    description: 'Modelo integral para desarrollar líderes que impulsen la transformación cultural. Basado en investigación de 10 años y casos de éxito reales.',
    type: 'framework',
    category: 'Frameworks',
    isGated: true,
    downloadUrl: '/downloads/framework-liderazgo-transformacional.pdf',
    previewImage: '/images/resources/framework-liderazgo-preview.jpg',
    benefits: [
      'Modelo de competencias de liderazgo',
      'Herramientas de evaluación y desarrollo',
      'Plan de desarrollo personalizado',
      'Métricas de progreso y seguimiento'
    ],
    targetAudience: 'Directores de RRHH, CEOs, Líderes Senior',
    estimatedTime: '35-45 minutos',
    format: 'PDF (38 páginas)',
    featured: true
  },
  {
    id: 'checklist-trabajo-hibrido',
    title: 'Checklist de Implementación de Trabajo Híbrido',
    description: 'Lista de verificación completa para implementar exitosamente modelos de trabajo híbrido. Incluye políticas, procesos y mejores prácticas.',
    type: 'checklist',
    category: 'Herramientas',
    isGated: false,
    downloadUrl: '/downloads/checklist-trabajo-hibrido.pdf',
    previewImage: '/images/resources/checklist-hibrido-preview.jpg',
    benefits: [
      'Lista de verificación de 50+ puntos',
      'Políticas modelo para diferentes industrias',
      'Mejores prácticas de empresas líderes',
      'Timeline de implementación sugerido'
    ],
    targetAudience: 'Directores de RRHH, Gerentes de Operaciones',
    estimatedTime: '20-25 minutos',
    format: 'PDF (15 páginas)',
    featured: false
  },
  {
    id: 'webinar-transformacion-cultural-post-covid',
    title: 'Webinar: Transformación Cultural Post-COVID',
    description: 'Grabación exclusiva del webinar donde Alicia comparte las lecciones aprendidas y estrategias para la transformación cultural en la nueva normalidad.',
    type: 'webinar',
    category: 'Webinars',
    isGated: true,
    downloadUrl: '/downloads/webinar-transformacion-post-covid.mp4',
    previewImage: '/images/resources/webinar-post-covid-preview.jpg',
    benefits: [
      '60 minutos de contenido exclusivo',
      'Casos de estudio de empresas latinoamericanas',
      'Q&A con preguntas frecuentes',
      'Slides descargables incluidos'
    ],
    targetAudience: 'Directores de RRHH, Consultores, Líderes de Cambio',
    estimatedTime: '60 minutos',
    format: 'Video MP4 + Slides PDF',
    featured: true
  },
  {
    id: 'plantilla-evaluacion-engagement',
    title: 'Plantilla de Evaluación de Engagement',
    description: 'Herramienta completa para medir y evaluar el engagement de empleados. Incluye cuestionarios, escalas de medición y análisis de resultados.',
    type: 'template',
    category: 'Plantillas',
    isGated: true,
    downloadUrl: '/downloads/plantilla-evaluacion-engagement.xlsx',
    previewImage: '/images/resources/plantilla-engagement-preview.jpg',
    benefits: [
      'Cuestionario validado científicamente',
      'Escalas de medición automáticas',
      'Análisis comparativo con benchmarks',
      'Reportes ejecutivos automáticos'
    ],
    targetAudience: 'Directores de RRHH, Analistas de People Analytics',
    estimatedTime: '25-30 minutos',
    format: 'Excel + Guía PDF',
    featured: false
  },
  {
    id: 'casos-estudio-detallados-2024',
    title: 'Casos de Estudio Detallados 2024',
    description: 'Colección exclusiva de casos de estudio detallados con metodologías, resultados y lecciones aprendidas de proyectos de transformación cultural.',
    type: 'case-study',
    category: 'Casos de Estudio',
    isGated: true,
    downloadUrl: '/downloads/casos-estudio-detallados-2024.pdf',
    previewImage: '/images/resources/casos-estudio-preview.jpg',
    benefits: [
      '10 casos de estudio detallados',
      'Metodologías paso a paso',
      'Métricas y resultados específicos',
      'Lecciones aprendidas y recomendaciones'
    ],
    targetAudience: 'Consultores, Directores de RRHH, CEOs',
    estimatedTime: '90-120 minutos',
    format: 'PDF (85 páginas)',
    featured: true
  }
];

export const resourceCategories = [
  {
    id: 'herramientas',
    name: 'Herramientas',
    description: 'Calculadoras, plantillas y herramientas interactivas',
    icon: '🛠️',
    count: 2
  },
  {
    id: 'guias',
    name: 'Guías',
    description: 'Guías completas y metodologías paso a paso',
    icon: '📚',
    count: 1
  },
  {
    id: 'playbooks',
    name: 'Playbooks',
    description: 'Estrategias y tácticas comprobadas',
    icon: '📋',
    count: 1
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    description: 'Modelos y marcos de trabajo',
    icon: '🏗️',
    count: 1
  },
  {
    id: 'webinars',
    name: 'Webinars',
    description: 'Contenido en video y presentaciones',
    icon: '🎥',
    count: 1
  },
  {
    id: 'plantillas',
    name: 'Plantillas',
    description: 'Documentos y formatos listos para usar',
    icon: '📄',
    count: 1
  },
  {
    id: 'casos-estudio',
    name: 'Casos de Estudio',
    description: 'Análisis detallados de proyectos reales',
    icon: '📊',
    count: 1
  }
];
