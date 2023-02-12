import { Section, Heading, Content, Button } from 'react-bulma-components';
import { HashLink } from 'react-router-hash-link';

const About = () => {
	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Hi, I'm Eli.
			</Heading>
			<Content renderAs="p" textSize={5}>
				In 2019, while working at an advertising agency, I solved a basic bug related to a client's Facebook pixel. My
				excitement for using my analytical skills to write and debug code was sparked, and I started learning Javascript
				on my own for 2 years before enrolling in an immersive engineering program with Fullstack Academy to continue my
				learning in a collaborative environment. As my engineering skills have deepened and my focus has expanded,
				solving problems for others (both my teammates and the end users of a product) remains the central tenet of what
				drives me as a software engineer.
			</Content>

			<Content renderAs="p" textSize={5}>
				I have brought my 5 years of Customer Success and Client Services leadership experience to my pivot into
				software engineering, which has led me to be empathetic and user-focused, enthusiastic about collaborating to
				provide scalable solutions to user problems.
			</Content>

			<Content renderAs="p" textSize={5}>
				To learn more about my background, check out my <a href="https://www.linkedin.com/in/elijahcohen/">LinkedIn</a>{' '}
				and to see code I've contributed to, check out my <a href="https://github.com/elijahlc">Github</a>!
			</Content>

			<Button renderAs={HashLink} to="/#contact" smooth color="link" size="medium" textColor="white">
				Get in touch
			</Button>
		</Section>
	);
};

export default About;
