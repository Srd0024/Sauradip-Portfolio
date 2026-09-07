export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  bullets?: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpaOrHonors?: string;
  description?: string;
}

export interface AccoladeItem {
  id: string;
  title: string;
  eventOrOrg: string;
  year: string;
  badgeText?: string;
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verified?: boolean;
}

export interface NotableProject {
  id: string;
  title: string;
  client: string;
  category: string;
  bgVariant: 'lavender' | 'mint' | 'lightBlue' | 'darkNavy';
  tags: string[];
  achievements: {
    icon: string;
    text: string;
    stat: string;
  }[];
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  trend?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  client: string;
  tagline: string;
  context: string;
  mockupType: 'phone-cluster' | 'laptop-phone' | 'dual-phone';
  heroMetrics: CaseStudyMetric[];
  strategyTitle: string;
  strategyBullets: string[];
  secondaryMetrics: CaseStudyMetric[];
  bannerTint: string;
  tags: string[];
}

export interface PersonalProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  mockupDetails: {
    screenTitle: string;
    badge: string;
    statNumber: string;
    statLabel: string;
  };
  metrics: CaseStudyMetric[];
  link?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface SupportingDoc {
  id: string;
  title: string;
  issuer: string;
  type: 'certificate' | 'award';
  date: string;
  badge?: string;
  colorScheme: 'teal' | 'orange' | 'purple';
}
