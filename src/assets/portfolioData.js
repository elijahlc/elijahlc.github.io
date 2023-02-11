const portfolio = [
	{
		project: 'GiGi Marie Healing',
		description:
			'Created a brand new website to enable GiGi Marie to market holestic health services to potential customers through a user-friendly digital platform.',
		workType: 'Solo freelance work',
		contributions: [
			'Architected server and all frontend components',
			'Designed a user-friendly layout targeted to support new customers to learn about the business and book services',
			'Used and customized Bulma CSS framework for responsive styling',
			"Embedded Calendly using Calendly's React library",
			'Configured domain and DNS settings for deployed website',
		],
		techStack: ['Node.js', 'Express.js', 'React', 'Sass / SCSS'],
		photos: ['gm1', 'gm2', 'gm3', 'gm4', 'gm5'],
		links: {
			site: '',
		},
	},
	{
		project: 'DrinkRecommender',
		description:
			'Developed a fully responsive web platform to recommend custom cocktails based on a custom list of ingredients inputted by the user.',
		workType: 'Solo personal project',
		contributions: [
			'Built integration with 3rd party API, theCocktailDB, to ingest, sort, and filter both ingredient and drink data',
			'Incorporated and customized MaterialUI components for responsive styling',
		],
		techStack: ['Node.js', 'Express.js', 'Axios', 'React', 'Redux', 'MaterialUI'],
		photos: ['dr1', 'dr2', 'dr3', 'dr4', 'dr5', 'dr6'],
		links: {
			site: 'https://drink-recommender.herokuapp.com/',
			github: 'https://github.com/elijahlc/drink-recommender',
		},
	},
	{
		project: 'Locker.ai',
		description:
			"Launched a web app for designing sneakers with AI-generated images, a custom color palette, and rendering a user's designs in 3D.",
		workType: 'Worked on a team of 4 engineers to build and design app',
		contributions: [
			'Designed and built PostgreSQL database',
			'Implemented consistent UI styling and mobile responsiveness',
			'Built Dall-E API integration',
			'Executed debugging and QA',
			'Mentored teammates on best practices and usage of tools in our stack',
		],
		techStack: [
			'PostgreSQL',
			'Node.js',
			'Express.js',
			'React',
			'Redux',
			'Three.js',
			'Bcrypt',
			'Mocha',
			'Chai',
			'Supertest',
		],
		photos: ['lai1', 'lai2', 'lai3', 'lai4', 'lai5'],
		links: {
			site: 'https://lockerai.herokuapp.com/',
			github: 'https://github.com/elijahlc/locker.ai',
		},
	},
];

export default portfolio;
