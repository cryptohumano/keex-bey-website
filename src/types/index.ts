// Tipos principales para K'eex Bey

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  duration?: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  testimonial?: Testimonial;
}

export interface LeadForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  source: 'contact' | 'newsletter' | 'download' | 'roi-calculator';
  interests?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featuredImage?: string;
  slug: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'tool' | 'guide' | 'playbook' | 'framework' | 'webinar' | 'template' | 'case-study' | 'checklist';
  category: string;
  isGated: boolean;
  downloadUrl: string;
  previewImage: string;
  benefits: string[];
  targetAudience: string;
  estimatedTime: string;
  format: string;
  featured: boolean;
}

export interface ROICalculation {
  companySize: number;
  currentEngagement: number;
  currentProductivity: number;
  currentRetention: number;
  estimatedImprovement: number;
  annualRevenue: number;
}
