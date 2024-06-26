import dr1 from "./dr1.png";
import dr2 from "./dr2.png";
import dr3 from "./dr3.png";
import dr4 from "./dr4.png";
import dr5 from "./dr5.png";
import dr6 from "./dr6.png";

import gm1 from "./gm1.png";
import gm2 from "./gm2.png";
import gm3 from "./gm3.png";
import gm4 from "./gm4.png";
import gm5 from "./gm5.png";

import lai1 from "./lai1.png";
import lai2 from "./lai2.png";
import lai3 from "./lai3.png";
import lai4 from "./lai4.png";
import lai5 from "./lai5.png";

import ce1 from "./ce1.png";

const portfolio = [
	{
		project: "Locker.ai",
		description:
			"Launched a web app for designing sneakers with AI-generated images, a custom color palette, and rendering a user's designs in 3D.",
		workType: "Worked on a team of 4 engineers to build and design app",
		contributions: [
			"Designed and architected PostgreSQL database",
			"Implemented consistent UI styling and mobile responsiveness",
			"Built Dall-E API integration",
			"Executed debugging and QA",
			"Mentored teammates on best practices and usage of tools in our stack",
		],
		techStack: [
			"PostgreSQL",
			"Node.js",
			"Express.js",
			"React",
			"Redux",
			"Three.js",
			"Bcrypt",
			"Mocha",
			"Chai",
			"Supertest",
		],
		photos: [lai1, lai2, lai3, lai4, lai5],
		links: {
			github: "https://github.com/elijahlc/locker.ai",
		},
	},
	{
		project: "DrinkRecommender",
		description:
			"Developed a fully responsive web platform to recommend custom cocktails based on a custom list of ingredients inputted by the user.",
		workType: "Solo personal project",
		contributions: [
			"Built integration with 3rd party API (theCocktailDB) to ingest, sort, and filter both ingredient and drink data",
			"Incorporated and customized MaterialUI components for responsive styling",
		],
		techStack: ["Node.js", "Express.js", "Axios", "React", "Redux", "MaterialUI"],
		photos: [dr1, dr2, dr3, dr4, dr5, dr6],
		links: {
			github: "https://github.com/elijahlc/drink-recommender",
		},
	},
	{
		project: "GiGi Marie Healing",
		description:
			"Created a brand new website to enable GiGi Marie to market holistic health services to potential customers through a user-friendly digital platform.",
		workType: "Solo freelance work",
		contributions: [
			"Architected server and all frontend components",
			"Designed a user-friendly layout targeted to support new customers to learn about the business and book services",
			"Used and customized Bulma CSS framework for responsive styling",
			"Embedded Calendly using Calendly's React library",
			"Configured domain and DNS settings on Cloudflare for deployed website",
		],
		techStack: ["Node.js", "Express.js", "React", "Sass / SCSS"],
		photos: [gm1, gm2, gm3, gm4, gm5],
		links: {
			site: "https://www.gigimarie.me/",
		},
	},
	{
		project: "Cosmic Explorer",
		description: "Built interactive app to display data and images from NASA",
		workType: "Solo personal project",
		contributions: [
			"Used Create-React-App to speedily bootstrap app",
			"Integrated with multiple NASA API endpoints using Fetch API to source data based on user-selected date",
		],
		techStack: ["React"],
		photos: [ce1],
		links: {
			site: "https://cosmic-explorer.herokuapp.com/",
			github: "https://github.com/elijahlc/cosmic-explorer",
		},
	},
];

export default portfolio;
