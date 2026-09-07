import { CaseStudy, PersonalProject, TestimonialItem, SupportingDoc } from '../types';

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
  logoType: 'kahf' | 'hago' | 'bluebird' | 'lazada' | 'kompas';
}

export interface EducationEntry {
  id: string;
  institution: string;
  degreeOrProgram: string;
  date: string;
  badge?: string;
  details: string;
  logoType: 'pelita' | 'rakamin';
}

export interface AccoladeEntry {
  id: string;
  title: string;
  year: string;
}

export interface ToolCategoryItem {
  id: string;
  category: string;
  icons: { name: string; type: string }[];
  bullets: string[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  date: string;
  logoType: 'rakamin' | 'coursera' | 'dataquest';
}

export interface NotableProjectItem {
  id: string;
  title: string;
  clientBadge?: string;
  clientLogos?: ('kompas' | 'lazada')[];
  tags: string[];
  subFeatures: {
    iconName: string;
    text: string;
    stat?: string;
  }[];
  details: {
    context: string;
    metrics: { value: string; label: string }[];
    strategy: string[];
  };
}

export const HELMI_HERO = {
  greetings: [
    "Hello!",
    "Hola",
    "नमस्ते",
    "নমস্কার",
    "Ciao",
    "Bonjour",
    "你好"
  ],
  name: "Sauradip",
  role: "A Performance Marketer & Automation Builder",
  quote: "working under Sauradip, and I can confidently say he is an exceptional marketer and brand strategist",
  experienceYears: "2 Years",
  experienceSubtext: "in Brand & Marketing Experince",
  pills: [
    { label: "Marketing", emoji: "📣", pos: "top-12 -left-4 sm:left-2" },
    { label: "Brand", emoji: "⭐", pos: "bottom-28 -left-6 sm:-left-4" },
    { label: "Ads", emoji: "🚀", pos: "top-16 -right-4 sm:right-2" },
    { label: "Social Media", emoji: "🖋️", pos: "bottom-20 -right-6 sm:right-0" },
  ],
  heroPhoto: "/sauradip-hero.webp",
  aboutPhoto: "/Sauradip About Us Photo.webp"
};

export const HELMI_STATS = [
  { id: '1', value: "50M+", label: "achieving in sales" },
  { id: '2', value: "2+", label: "Years Experience" },
  { id: '3', value: "11+", label: "Projects Done" },
  { id: '4', value: "6+", label: "Helped brands" },
  { id: '5', value: "3+", label: "People Recommend Me" },
];

export const HELMI_SKILLS_RIBBON = [
  "Performance Ads",
  "Content Strategy",
  "Media Plan",
  "Automation",
  "Social Media",
  "Strategy",
  "Analytics",
  "Email Marketing",
  "Growth Marketing"
];

export const HELMI_ABOUT = {
  heading: "about.",
  paragraphs: [
    "Call me Sauradip, I am a fresh graduate with a passion for creating business strategies, marketing strategies, growth marketing, and other business or brand activities. With 2 years of professional experience, I honed my skills in business development and strategy, B2B and B2C strategy, brand strategy, data analyst, and relationship.",
    "I am experienced in social media strategy, brand strategy, marketing, campaign strategic, Ads Performance and relationship holds in various industries and companies such as FMCG., E-commerce, and Financial Technology (Fintech) company.",
    "I am deeply committed to transforming ideas into results, whether it's crafting marketing and business strategies, brand campaigns, and optimizing sales performance."
  ]
};

export const HELMI_EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-1',
    company: "PT. Paragon Technology And Innovation",
    role: "Digital Transformation Specialist (Kahf)",
    date: "July 2024 - Jan 2025",
    description: "Managed and analyzed TikTok strategy & several brand activations and optimized social media campaigns, driving sales growth and engagement across platforms.",
    logoType: 'kahf'
  },
  {
    id: 'exp-2',
    company: "Joyy.Inc (Hago App)",
    role: "Operations - Social Media & KOL",
    date: "Dec 2023 - Jan 2024",
    description: "Developed and executed social media campaigns (TikTok, Instagram), collaborated with KOLs, and increased brand visibility and user engagement.",
    logoType: 'hago'
  },
  {
    id: 'exp-3',
    company: "Bluebird Group",
    role: "Product Manager",
    date: "Sep 2023 - Oct 2023",
    description: "Streamlined product development processes, coordinated cross-functional teams, and successfully launched new products to improve operational efficiency.",
    logoType: 'bluebird'
  },
  {
    id: 'exp-4',
    company: "Lazada (Alibaba Group)",
    role: "User Growth Affiliate",
    date: "Nov 2022 - May 2024",
    description: "Supported affiliate campaigns, analyzed performance, and implemented strategies to boost user acquisition and partner engagement.",
    logoType: 'lazada'
  },
  {
    id: 'exp-5',
    company: "Harian Kompas",
    role: "Growth Marketing",
    date: "May 2022 - Aug 2022",
    description: "Executed email marketing and Facebook ad campaigns, implemented A/B testing, and enhanced user retention and revenue growth.",
    logoType: 'kompas'
  }
];

export const HELMI_EDUCATION: EducationEntry[] = [
  {
    id: 'edu-1',
    institution: "Universitas Pelita Bangsa",
    degreeOrProgram: "Bachelor's of Management",
    date: "July 2020 - Oct 2024",
    badge: "Bachelor's of Management",
    details: "IPK/CGPA: 3.84/4.00 - Fast Track • Head of Marketing - Kelompok Studi Pasar Modal",
    logoType: 'pelita'
  },
  {
    id: 'edu-2',
    institution: "Rakamin Academy",
    degreeOrProgram: "Scholarship Digital Marketing Bootcamp",
    date: "Sep 2023 - Oct 2023",
    details: "Received full 100% scholarship to learn topic: IoT, Digital Marketing for 12 months worth up to IDR 7+ million. Lead Project & Won the Final Project: @bernapediaid learning reached 252.7k+ growth, 18.6%+ engagement, 74.6k+ organic reach.",
    logoType: 'rakamin'
  }
];

export const HELMI_ACCOLADES: AccoladeEntry[] = [
  {
    id: 'acc-1',
    title: 'Speaker "Peran Social Media dan Personal Branding" with participant 25+ including CEO\'s',
    year: "2023"
  }
];

export const HELMI_SKILLS_PILLS = {
  row1: [
    "Performance Marketing",
    "Social Media Marketing",
    "Email Marketing"
  ],
  row2: [
    "Automation",
    "Analytics",
    "Campaign Strategy"
  ]
};

export const HELMI_TOOLS: ToolCategoryItem[] = [
  {
    id: 'tool-1',
    category: "Paid Ads & Analytics",
    icons: [
      { name: "Meta Ads", type: "meta" },
      { name: "Google Ads", type: "google-ads" },
      { name: "Google Analytics", type: "analytics" }
    ],
    bullets: [
      "• Meta Ads Manager",
      "• Google Ads",
      "• Google Analytics",
      "• Google Search Console",
      "• Google Tag Manager",
      "• Funnelytics"
    ]
  },
  {
    id: 'tool-2',
    category: "CRM & Marketing Automation",
    icons: [
      { name: "HubSpot", type: "hubspot" },
      { name: "Pabbly", type: "pabbly" },
      { name: "Brevo", type: "brevo" }
    ],
    bullets: [
      "• HubSpot CRM",
      "• Pabbly Connect",
      "• AiSensy",
      "• ConvertKit",
      "• Encharge",
      "• Brevo"
    ]
  },
  {
    id: 'tool-3',
    category: "AI, No-Code & E-commerce",
    icons: [
      { name: "Lovable", type: "lovable" },
      { name: "Antigravity", type: "antigravity" },
      { name: "Shopify", type: "shopify" }
    ],
    bullets: [
      "• Lovable",
      "• Google Antigravity",
      "• sbl.so",
      "• Shopify"
    ]
  },
  {
    id: 'tool-4',
    category: "Creative & Content Production",
    icons: [
      { name: "Photoshop", type: "photoshop" },
      { name: "Premiere", type: "premiere" },
      { name: "Canva", type: "canva" }
    ],
    bullets: [
      "• Adobe Photoshop",
      "• Adobe Premiere Pro",
      "• CapCut",
      "• Canva"
    ]
  }
];

export const HELMI_CERTIFICATIONS: CertificationEntry[] = [
  {
    id: 'cert-1',
    title: "Rakamin Academy - Scholarship Digital Marketing Bootcamp",
    date: "Jan 2024 - Jul 2024",
    logoType: 'rakamin'
  },
  {
    id: 'cert-2',
    title: "Rakamin Academy - Advanced Social Media Marketing",
    date: "Aug 2024 - Aug 2024",
    logoType: 'rakamin'
  },
  {
    id: 'cert-3',
    title: "Coursera - Google Project Management: Professional Certificate",
    date: "Dec 2023 - Oct 2023",
    logoType: 'coursera'
  },
  {
    id: 'cert-4',
    title: "Coursera - Google Data Analytics Professional Certificate",
    date: "May 2022 - Apr 2022",
    logoType: 'coursera'
  },
  {
    id: 'cert-5',
    title: "Dataquest.io - Business Analyst Certification",
    date: "Jan 2022 - Apr 2022",
    logoType: 'dataquest'
  }
];

export const HELMI_NOTABLE_PROJECTS: NotableProjectItem[] = [
  {
    id: 'proj-1',
    title: "Social Media And Brand Strategy",
    clientBadge: "Kahf",
    tags: ["Social Media & Strategy", "Growth Marketing"],
    subFeatures: [
      { iconName: "share-2", text: "Social Media Strategy", stat: "+240% Growth" },
      { iconName: "video", text: "TikTok Content Production & Livestream", stat: "1.2M Views" },
      { iconName: "trending-up", text: "Brand Recall & Influencer KOL Activation", stat: "94% Reach" }
    ],
    details: {
      context: "Managed and scaled Kahf's TikTok presence and multichannel digital campaigns across Southeast Asia, driving exponential organic reach and sales conversion during key seasonal shopping festivals.",
      metrics: [
        { value: "+320%", label: "TikTok Shop GMV Lift" },
        { value: "4.8M", label: "Organic Impressions" },
        { value: "28K", label: "New Followers Acquired" },
        { value: "18.4%", label: "Average Engagement Rate" }
      ],
      strategy: [
        "Crafted high-velocity video hooks targeting men's grooming routines and confidence narratives.",
        "Collaborated with 40+ micro and macro Indonesian creators for synchronized product drops.",
        "A/B tested TikTok Spark Ads against organic video creatives to optimize cost per acquisition."
      ]
    }
  },
  {
    id: 'proj-2',
    title: "Business And Growth Strategy",
    clientLogos: ['kompas', 'lazada'],
    tags: ["Marketing Strategy", "Creative Campaign", "CRM Management"],
    subFeatures: [
      { iconName: "target", text: "Growth Marketing Strategy", stat: "+180% Orders" },
      { iconName: "users", text: "Affiliate Community Activation", stat: "15K Members" },
      { iconName: "mail", text: "Lifecycle & Email Retention CRM", stat: "42% Open Rate" }
    ],
    details: {
      context: "Formulated data-backed customer acquisition and retention funnels across Lazada's Affiliate Program and Kompas's digital subscription models.",
      metrics: [
        { value: "IDR 50M+", label: "Attributed Revenue Driven" },
        { value: "3.2x", label: "Campaign ROAS Multiplier" },
        { value: "15,000+", label: "Affiliate Partners Onboarded" },
        { value: "-35%", label: "Customer Churn Rate" }
      ],
      strategy: [
        "Architected multi-tier incentive schemes for high-performing affiliate partners.",
        "Deployed automated lifecycle emails based on subscriber engagement milestones.",
        "Integrated cross-platform UTM tracking with Google Analytics and internal databases."
      ]
    }
  }
];

export const DEEP_DIVE_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    number: '01',
    category: 'Social Media & Brand Activation',
    client: 'PT. Paragon Technology (Kahf)',
    tagline: 'Driving Exponential TikTok Shop GMV & Brand Resonance Across Southeast Asia',
    context: 'Scaled Kahf\'s digital transformation and viral short-form video commerce during national seasonal shopping festivals. Engineered high-cadence creator seeding, live shopping rooms, and performance Spark Ads.',
    mockupType: 'phone-cluster',
    heroMetrics: [
      { value: '+320%', label: 'TikTok Shop GMV Lift', trend: '+320%' },
      { value: '4.8M', label: 'Organic Impressions', trend: 'viral' },
      { value: '18.4%', label: 'Average Engagement', trend: 'top 5%' },
      { value: '28K+', label: 'New Buyers Acquired', trend: '+42%' }
    ],
    strategyTitle: 'Agile Content Hooks & Livestream Commerce Engine',
    strategyBullets: [
      'Engineered a 3-second hook testing framework running 15 variant creatives weekly across skin routines and lifestyle.',
      'Constructed a creator tier matrix coordinating 40+ Indonesian micro and macro creators for synchronized drops.',
      'Synchronized daily TikTok LIVE flash sales with mega double-digit shopping dates (11.11 & 12.12).'
    ],
    secondaryMetrics: [
      { value: '3.4x', label: 'ROAS Performance Multiplier' },
      { value: '92%', label: 'Brand Awareness Index Score' },
      { value: '#1', label: 'Men\'s Grooming on TikTok Shop' }
    ],
    bannerTint: 'bg-[#F0FDF4]',
    tags: ['TikTok Commerce', 'Creator Seeding', 'Performance Marketing', 'FMCG']
  },
  {
    id: 'case-2',
    number: '02',
    category: 'Affiliate Growth & Lifecycle Funnels',
    client: 'Lazada (Alibaba Group)',
    tagline: 'Building High-Velocity Affiliate Acquisition & Retention Architecture',
    context: 'Formulated data-backed customer acquisition and retention funnels across Lazada\'s Southeast Asian affiliate ecosystem. Re-architected commission tiers and partner automation pipelines.',
    mockupType: 'laptop-phone',
    heroMetrics: [
      { value: '15,000+', label: 'Active Affiliates', trend: '+180%' },
      { value: 'IDR 50M+', label: 'Attributed Sales', trend: 'direct GMV' },
      { value: '252.7K', label: 'Community Impressions', trend: 'organic' },
      { value: '-35%', label: 'Affiliate Churn Rate', trend: '-35%' }
    ],
    strategyTitle: 'Incentive Tiering & Lifecycle Automation',
    strategyBullets: [
      'Segmented affiliates into high-velocity clusters with dedicated VIP creator incentives and rapid onboarding.',
      'Deployed automated email and WhatsApp alerts triggered by sales velocity milestones.',
      'Integrated cross-platform UTM tracking with Google Analytics 4 and internal real-time attribution models.'
    ],
    secondaryMetrics: [
      { value: '4.1x', label: 'Affiliate 90-Day Retention' },
      { value: '48hr', label: 'Average Payout Turnaround' },
      { value: '98%', label: 'Partner Satisfaction Score' }
    ],
    bannerTint: 'bg-[#EFF6FF]',
    tags: ['Affiliate Growth', 'E-Commerce', 'CRM Automation', 'B2B/B2C']
  }
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: 'pers-1',
    number: '04',
    title: '@bernapediaid Learning & Creator Hub',
    category: 'Digital Media & Creator Economy',
    description: 'An educational media brand founded by Sauradip breaking down modern digital marketing, brand strategy, and growth case studies for Indonesian university students and emerging marketers.',
    mockupDetails: {
      screenTitle: '@bernapediaid Creator Feed',
      badge: '#1 Capstone Project',
      statNumber: '252.7K',
      statLabel: 'Content Impressions'
    },
    metrics: [
      { value: '252.7K+', label: 'Organic Impressions', trend: 'viral' },
      { value: '18.6%', label: 'Engagement Rate', trend: 'community' },
      { value: '74.6K', label: 'Search & Explore Reach', trend: 'reach' }
    ],
    link: 'https://instagram.com'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'working under Sauradip, and I can confidently say he is an exceptional marketer and brand strategist. His grasp of short-form video dynamics and data-driven growth strategies helped us crush our TikTok campaign targets.',
    author: 'Rian Pratama',
    role: 'Growth Marketing Associate',
    company: 'PT. Paragon Technology & Innovation',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-2',
    quote: 'Sauradip demonstrates remarkable maturity in business development and relationship management. He spearheaded our affiliate campaigns with structured analytical thinking and flawless execution.',
    author: 'Dita Anggraini',
    role: 'Senior Brand Lead',
    company: 'Joyy.Inc / Hago',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

export const SUPPORTING_DOCS: SupportingDoc[] = [
  {
    id: 'doc-1',
    title: 'Scholarship Digital Marketing Bootcamp',
    issuer: 'Rakamin Academy',
    type: 'certificate',
    date: '2024',
    badge: '100% Scholarship',
    colorScheme: 'orange'
  },
  {
    id: 'doc-2',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Coursera & Google',
    type: 'certificate',
    date: '2023',
    badge: 'Google Certified',
    colorScheme: 'teal'
  },
  {
    id: 'doc-3',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera & Google',
    type: 'certificate',
    date: '2022',
    badge: 'Google Certified',
    colorScheme: 'purple'
  },
  {
    id: 'doc-4',
    title: 'Keynote Speaker: Peran Social Media & Personal Branding',
    issuer: 'National Youth & Executive Forum',
    type: 'award',
    date: '2023',
    badge: '25+ CEOs Attended',
    colorScheme: 'teal'
  },
  {
    id: 'doc-5',
    title: '1st Place Final Project Award: @bernapediaid',
    issuer: 'Rakamin Academy Bootcamp',
    type: 'award',
    date: '2024',
    badge: '#1 Capstone Winner',
    colorScheme: 'orange'
  }
];
