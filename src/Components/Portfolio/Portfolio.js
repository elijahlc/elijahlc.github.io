import { Section, Heading, Card, Container, Content, Button } from 'react-bulma-components';

import dr1 from '../../assets/dr1.png';
import dr2 from '../../assets/dr2.png';
import dr3 from '../../assets/dr3.png';
import dr4 from '../../assets/dr4.png';
import dr5 from '../../assets/dr5.png';
import dr6 from '../../assets/dr6.png';

import gm1 from '../../assets/gm1.png';

import lai1 from '../../assets/lai1.png';

import portfolio from '../../assets/portfolioData';

const Portfolio = () => {
	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Portfolio
			</Heading>
			<Container fullwidth display="flex" flexDirection="row" flexWrap="wrap">
				{portfolio.map((project) => {
					return (
						<Card
							style={window.innerWidth < 769 ? { width: 'calc(100% - 1rem)' } : { width: 'calc(50% - 1rem)' }}
							m={2}
						>
							<Card.Image
								size="4by3"
								src={project.photos[0] === 'dr1' ? dr1 : project.photos[0] === 'gm1' ? gm1 : lai1}
							/>

							<Card.Content textAlign="center">
								<Heading textFamily="secondary" textTransform="uppercase" textSize={4} textColor="link">
									{project.project}
								</Heading>
								<Content textSize={6} renderAs="p">
									{project.techStack.join(' | ')}
								</Content>

								<Button color="success">View</Button>
							</Card.Content>
						</Card>
					);
				})}
			</Container>
		</Section>
	);
};

export default Portfolio;
