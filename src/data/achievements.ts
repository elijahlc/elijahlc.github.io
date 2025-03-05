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
  attribution?: string;
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
      "Maintain MNTN's public Shopify app, and spearheaded the adoption of new Shopify features including theme app extensions and app pixels to earn the app Built for Shopify certification",
    category: 'accomplishment',
  },
  {
    description:
      "Designed and deployed a lightweight React app used by my team to review new customers' Javascript tracking pixel installations for optimal measurement, improving the speed of providing feedback to the customer-facing team",
    category: 'accomplishment',
  },
  {
    description:
      'Contribute to a suite of internal tooling designed to support customer-facing teams in guiding customers toward better ad performance & increased revenue generation',
    category: 'accomplishment',
  },
  {
    description:
      "Eli is an exceptional software engineer. He's very technically proficient across the stack, and he learns and applies new technologies with impressive speed and effectiveness. He's also very, very good with integrations and 3rd party systems. Beyond his technical expertise, Eli is an outstanding communicator—one of the best I’ve ever worked with—able to articulate complex ideas clearly and collaborate seamlessly across teams and functional groups. His organization and time management skills are top-tier, allowing him to consistently deliver high-quality work quickly while supporting and mentoring his teammates. Above all, Eli is a genuinely good person.",
    attribution: 'recent manager, Chris Warren',
    category: 'recommendation',
  },
];
