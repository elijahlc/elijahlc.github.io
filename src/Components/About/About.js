import { Section, Heading, Content } from 'react-bulma-components';

const About = () => {
	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Hi, I'm Eli.
			</Heading>
			<Content renderAs="p">
				I'm a fullstack engineer. Bringing 5 years of Customer Success and Client Services leadership experience to my
				process as a software engineer, I am passionate about collaborating to provide scalable solutions to user
				problems.
			</Content>
		</Section>
	);
};

export default About;
