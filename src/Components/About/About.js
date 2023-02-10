import { Section, Heading, Content, Button } from 'react-bulma-components';

const About = () => {
	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Hi, I'm Eli.
			</Heading>
			<Content renderAs="p" textSize={4}>
				In 2019, while working at an advertising agency, I solved a basic Javascript bug related to pixel tracking for a
				client's Facebook marketing. My excitement was sparked, and I started learning Javascript on my own for 2 years
				before enrolling in an immersive engineering program with Fullstack Academy to continue my learning in a
				collaborative environment. As my engineering skills have deepened and my focus has expanded, solving problems
				for others (end users, internal colleagues and teammates, or company clients) remains the central tenet of what
				drives me as a software engineer.
			</Content>

			<Content renderAs="p" textSize={4}>
				For the past 5 years, I held leadership roles in Customer Success and Client Services at multiple early-stage
				advertising technology startups. In these roles, I worked cross-functionally with product and engineering teams
				to convey user requirements, test and roll out new features of our products, and iterate based on user feedback
				to ensure positive customer platform experiences. Above all, my experiences as a Customer Success leader have
				led me to be an empathetic and user-focused software engineer.
			</Content>

			<Content renderAs="p" textSize={4}>
				To learn more about my background, check out my <a href="https://www.linkedin.com/in/elijahcohen/">LinkedIn</a>{' '}
				and to see code I've contributed to, check out my <a href="https://github.com/elijahlc">Github</a>!
			</Content>

			<Button color="link" size="medium" textColor="white">
				Get in touch
			</Button>
			<hr />
		</Section>
	);
};

export default About;
