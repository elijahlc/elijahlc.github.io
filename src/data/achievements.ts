type SkillCategory = {
  name:
    | 'Languages'
    | 'Frontend development'
    | 'Backend development'
    | 'Databases & ORMs'
    | 'DevOps / deployment'
    | 'Version control'
    | 'Testing'
    | 'Other';
  skills: Skill[];
};

type Skill = {
  name: string;
};

type AchievementCategory = 'accomplishment' | 'recommendation';

type Achievement = {
  description: string;
  category: AchievementCategory;
};

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [{ name: 'Javascript' }, { name: 'Typescript' }],
  },
  {
    name: 'Frontend development',
    skills: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'React Query' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'jQuery' },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'GraphQL' },
      { name: 'REST APIs' },
    ],
  },
  {
    name: 'Databases & ORMs',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Prisma' },
      { name: 'Sequelize' },
    ],
  },
  {
    name: 'DevOps / deployment',
    skills: [{ name: 'Docker' }, { name: 'Heroku' }],
  },
  {
    name: 'Version control',
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Codefresh' }],
  },
  {
    name: 'Testing',
    skills: [{ name: 'Jest' }, { name: 'Mocha' }, { name: 'Chai' }],
  },

  {
    name: 'Other',
    skills: [{ name: 'Shopify' }, { name: 'Postman' }, { name: 'Zapier' }],
  },
];

export const recentAchievements: Achievement[] = [
  {
    description:
      "Continuously upgraded MNTN's public Shopify app to meet evolving Shopify technical standards, integrating app extensions to improve performance and achieve Built for Shopify certification",
    category: 'accomplishment',
  },
  {
    description:
      "Drove migration of the app's session storage database to a production-level solution, enhancing scalability and performance of the Shopify integration",
    category: 'accomplishment',
  },
  {
    description:
      "Designed and deployed lightweight React app to streamline workflow of reviewing new customers' Javascript pixel installations, reducing team error rates and improving speed",
    category: 'accomplishment',
  },
  {
    description:
      "Developed custom CLI tool to export and analyze ticket completion data from Intercom's API, revealing previously-unavailable insights into customer support efficiency",
    category: 'accomplishment',
  },
  {
    description:
      "Eli is an exceptional software engineer. He's very technically proficient across the stack, and he learns and applies new technologies with impressive speed and effectiveness. He's also very, very good with integrations and 3rd party systems. Beyond his technical expertise, Eli is an outstanding communicator—one of the best I’ve ever worked with—able to articulate complex ideas clearly and collaborate seamlessly across teams and functional groups. His organization and time management skills are top-tier, allowing him to consistently deliver high-quality work quickly while supporting and mentoring his teammates. Above all, Eli is a genuinely good person.",
    category: 'recommendation',
  },
];
