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
  provider: string;
  date: string;
  credentialId: string;
  logoType: string;
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
    "I’m Sauradip, a Performance Marketer and Marketing Automation Specialist focused on building acquisition systems that turn traffic into qualified leads.",
    "I work across Meta Ads, Google Ads, LinkedIn outreach, lead generation, media planning, landing pages, and marketing automation, with experience across real estate, education, and B2B businesses.",
    "What sets me apart is that I look beyond the ad account. I connect paid traffic, landing pages, lead capture, WhatsApp/CRM automation, and follow-ups to build a complete customer acquisition journey.",
    "My approach is simple: find the right audience, build the right funnel, measure what matters, and optimize for better results."
  ]
};

export const HELMI_EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-1',
    company: "Brandveda",
    role: "Performance Marketing Specialist",
    date: "Apr 2026 - Present",
    description: "Manage and optimize Meta Ads and Google Ads campaigns across education and real estate projects. Generated 26 qualified leads through a ₹50K Meta Ads campaign for a Dubai real estate client and 40+ qualified leads for Brandveda’s Performance Marketing Course. Also work on audience targeting, creative testing, budget optimization, and media planning.",
    logoType: 'brandveda'
  },
  {
    id: 'exp-2',
    company: "Project Made Easy",
    role: "Digital Marketing Executive",
    date: "Jan 2024 - Mar 2026",
    description: "Generated approximately $700K+ in B2B revenue through LinkedIn Sales Navigator, Apollo, and email marketing. Managed webinars, social media campaigns, LinkedIn outreach, and email campaigns to generate B2B leads, including lead generation for FluidPPM. Also built landing pages and SEO content and created promotional videos, banners, and event creatives.",
    logoType: 'pme'
  },
  {
    id: 'exp-3',
    company: "Spill Your Thoughts",
    role: "SEO Intern",
    date: "Jul 2023 - Oct 2023",
    description: "Worked on keyword research, SEO analysis, and link-building campaigns to improve search visibility and website performance. Also developed WordPress websites based on client requirements.",
    logoType: 'spill'
  },
  {
    id: 'exp-4',
    company: "Amber Student",
    role: "Global Sales Associate",
    date: "Feb 2022 - Feb 2023",
    description: "Handled outbound sales for UK student accommodation and generated more than £70,000 in commission through student bookings.",
    logoType: 'amber'
  },
  {
    id: 'exp-5',
    company: "Seedwill Consulting",
    role: "Sales Manager",
    date: "Oct 2019 - Mar 2020",
    description: "Provided real estate consultation for Indian and international properties, generated leads, and worked on converting prospects to drive revenue.",
    logoType: 'seedwill'
  }
];

export const HELMI_EDUCATION: EducationEntry[] = [
  {
    id: 'edu-1',
    institution: "IILM Institute",
    degreeOrProgram: "PGDM in Marketing",
    date: "2016 - 2018",
    badge: "PGDM in Marketing",
    details: "",
    logoType: 'iilm'
  },
  {
    id: 'edu-2',
    institution: "KC Das Commerce College",
    degreeOrProgram: "Bachelor of Commerce",
    date: "2013 - 2016",
    badge: "Bachelor of Commerce",
    details: "",
    logoType: 'kcdas'
  }
];

export const HELMI_COURSES: EducationEntry[] = [
  {
    id: 'crs-1',
    institution: "Brandveda",
    degreeOrProgram: "Performance Genius",
    date: "Apr 2026 - Sep 2026",
    badge: "Performance Genius",
    details: "",
    logoType: "brandveda"
  },
  {
    id: 'crs-2',
    institution: "Young Urban Project",
    degreeOrProgram: "Performance Marketing",
    date: "Jul 2025 - Sep 2025",
    badge: "Performance Marketing",
    details: "",
    logoType: "yup"
  },
  {
    id: 'crs-3',
    institution: "Digital Vidya",
    degreeOrProgram: "Certified Digital Marketing Master",
    date: "Mar 2023 - Nov 2023",
    badge: "Certified Digital Marketing Master",
    details: "",
    logoType: "digitalvidya"
  }
];

export const HELMI_ACCOLADES: AccoladeEntry[] = [
  {
    id: 'acc-1',
    title: 'Generated 26 qualified leads through a ₹50K Meta Ads campaign for a Dubai real estate client and 40+ qualified leads for Brandveda’s Performance Marketing Course.',
    year: ''
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
      { name: "AiSensy", type: "aisensy" }
    ],
    bullets: [
      "• HubSpot CRM",
      "• Pabbly Connect",
      "• AiSensy",
      "• Interakt",
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
      { name: "Higgsfield", type: "higgsfield" },
      { name: "Premiere", type: "premiere" },
      { name: "Canva", type: "canva" }
    ],
    bullets: [
      "• Adobe Photoshop",
      "• Adobe Premiere Pro",
      "• Higgsfield",
      "• Canva"
    ]
  }
];

export const HELMI_CERTIFICATIONS: CertificationEntry[] = [
  {
    id: 'cert-1',
    title: "Google Ads Search Certification (2026)",
    provider: "Skillshop",
    date: "Sep 2026 - Sep 2027",
    credentialId: "194367387",
    logoType: 'google-ads'
  },
  {
    id: 'cert-2',
    title: "Keyword Research",
    provider: "Semrush",
    date: "Jul 2023 - Jul 2024",
    credentialId: "ec0cac2fef",
    logoType: 'semrush'
  },
  {
    id: 'cert-3',
    title: "SEO",
    provider: "HubSpot Academy",
    date: "Jul 2023 - Aug 2024",
    credentialId: "2161902d3a4b4108b8ad77394a2221",
    logoType: 'hubspot'
  },
  {
    id: 'cert-4',
    title: "SEO Fundamental",
    provider: "Semrush",
    date: "Sep 2022 - Sep 2023",
    credentialId: "H#fJHhBDhL9K5fP8",
    logoType: 'semrush'
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
    quote: 'I had the opportunity to work with Sauradip previously and he is a great team player. With this deep knowledge of the process, he was always helpful when I needed help with anything.',
    author: 'Tanuj Sharma',
    role: 'Brand Marketing Manager | BRND.ME',
    company: 'Mensa Brands',
    avatarUrl: '/tanuj-sharma.png',
    linkedinUrl: 'https://www.linkedin.com/in/62-tanuj-sharma/'
  },
  {
    id: 't-2',
    quote: 'Sauradip for any graphic design projects! He is a highly skilled and creative graphic designer who excels in website design, graphic design, social media design & management, and SEO. Sauradip is not only talented but also a pleasure to work with. He consistently brings new and innovative ideas to the table and embraces technology to enhance his designs. I highly recommend Sauradip for his exceptional work ethic, attention to detail, and ability to deliver outstanding results.',
    author: 'Rebecca Bormann',
    role: 'Fractional CMO | Business Development Strategist',
    company: '',
    avatarUrl: '/rebecca-bormann.png',
    linkedinUrl: 'https://www.linkedin.com/in/rebeccabormann/'
  },
  {
    id: 't-3',
    quote: 'Sauradip has been an extremely hardworking, helpful and supportive colleague. I learnt a lot of things from him, he goes beyond his KRA to deliver the tasks and achieve his. wherever he works he will always be a key player for the organisation.',
    author: 'Dhruv Bhatt',
    role: 'Business Development & Operations Professional',
    company: '',
    avatarUrl: '/dhruv-bhatt.png',
    linkedinUrl: 'https://www.linkedin.com/in/dhruv911/'
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
