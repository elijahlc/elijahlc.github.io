import { Section, Heading, Content, Button } from "react-bulma-components";
import { HashLink } from "react-router-hash-link";

const About = () => {
	return (
		<Section id="about">
			<Heading
				renderAs="h2"
				textFamily="secondary"
				textTransform="uppercase"
				textSize={1}
				textColor="primary"
			>
				Hi, I'm Eli.
			</Heading>

			<Heading
				subtitle
				renderAs="h3"
				textSize={4}
				weight="semibold"
				textColor="warning"
			>
				Former ad tech customer success & client services leader turned software engineer.
			</Heading>
			<Content
				renderAs="p"
				textSize={5}
			>
				What started in 2019 as a knack for debugging basic bugs in my clients' Facebook pixels grew into a deep
				excitement for creating products that solve problems for others. As an engineer, I have harnessed my 5 years of
				customer-facing leadership experience to collaborate cross-functionally to deliver intuitive solutions to
				customer problems and built tools that simplify & automate repetitive tasks and processes. I thrive on building
				products that just{" "}
				<Content
					renderAs="span"
					textColor="info"
					textWeight="semibold"
				>
					work
				</Content>{" "}
				for people!
			</Content>

			<Content
				renderAs="p"
				textSize={5}
			>
				In my current role, I:
				<ul>
					<li>
						Scoped, architected, and maintain a custom Intercom integration that has reduced engineering time required
						to review and recommend performance optimizations on new customers' Javascript pixel installations by ~25%
					</li>
					<li>
						Maintain MNTN's public Shopify app, and spearheaded migrating to use theme app extensions and support
						Shopify's Checkout Extensibility
					</li>
					<li>
						Contribute to a suite of internal tooling designed to support customer-facing teams in guiding customers
						toward better ad performance & increased revenue generation
					</li>
				</ul>
			</Content>

			<Content
				renderAs="p"
				textSize={5}
			>
				To learn more about my background, check out my <a href="https://www.linkedin.com/in/elijahcohen/">LinkedIn</a>{" "}
				and to see code I've contributed to, check out my <a href="https://github.com/elijahlc">Github</a>!
			</Content>

			<Button
				renderAs={HashLink}
				to="/#contact"
				smooth
				color="link"
				size="medium"
				textColor="white"
			>
				Get in touch
			</Button>
		</Section>
	);
};

export default About;
