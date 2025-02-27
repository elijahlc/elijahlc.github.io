export interface Project {
  title: string;
  description: string;
  images: Array<unknown>;
  techStack: Array<string>;
  links?: {
    github?: string;
    live?: string;
  };
  contributions: Array<string>;
}

export const projects: Array<Project> = [
  {
    title: 'Locker.ai (personal project)',
    description:
      "Launched a web app for designing sneakers with AI-generated images, a custom color palette, and rendering a user's designs in 3D.",
    images: [],
    techStack: [
      'React',
      'Redux',
      'Three.js',
      'Node',
      'Express',
      'PostgreSQL',
      'Mocha',
      'Chai',
      'Supertest',
    ],
    links: {
      github: 'https://github.com/elijahlc/locker.ai',
    },
    contributions: [
      'Designed and architected PostgreSQL database',
      'Implemented consistent UI styling and mobile responsiveness',
      'Built Dall-E API integration',
      'Primary debugger for production issues',
      'Mentored team of 4 developers on best practices',
    ],
  },
  {
    title: 'GiGi Marie Healing (freelance work)',
    description:
      'Created and launched website to enable GiGi Marie to market holistic health services to potential customers through a user-friendly digital platform.',
    images: [],
    techStack: ['React', 'Node', 'Express', 'Sass / SCSS'],
    contributions: [
      'Architected server and all frontend components',
      'Designed a user-friendly layout targeted to support new customers to learn about the business and book services',
      'Used and customized Bulma CSS framework / component library for responsive styling',
      'Configured domain and DNS settings on Cloudflare for deployed website',
    ],
  },
];
