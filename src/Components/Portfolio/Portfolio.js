import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section, Heading, Card, Container, Content, Button, Modal, Block, Image } from 'react-bulma-components';

import portfolio from '../../assets/portfolioData';

const Portfolio = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState({
		project: '',
		description: '',
		workType: '',
		contributions: [],
		techStack: [],
		photos: [],
		links: {
			site: '',
			github: '',
		},
	});

	const toggleModal = (e) => {
		if (!modalOpen) setActiveProject(portfolio[e.target.name]);
		setModalOpen(!modalOpen);
	};

	return (
		<Section id="portfolio">
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Portfolio
			</Heading>
			<Container display="flex" flexDirection="row" flexWrap="wrap">
				{portfolio.map((project, idx) => {
					return (
						<Card
							key={uuidv4()}
							style={window.innerWidth < 769 ? { width: 'calc(100% - 1rem)' } : { width: 'calc(50% - 1rem)' }}
							m={2}
						>
							<Card.Image size="4by3" src={project.photos[0]} />

							<Card.Content textAlign="center">
								<Heading textFamily="secondary" textTransform="uppercase" textSize={4} textColor="link" renderAs="h3">
									{project.project}
								</Heading>
								<Content textSize={6} renderAs="p">
									{project.techStack.join(' | ')}
								</Content>

								<Button color="success" onClick={toggleModal} name={idx}>
									View
								</Button>
							</Card.Content>
						</Card>
					);
				})}
			</Container>

			<Modal show={modalOpen} showClose={false}>
				<Modal.Card>
					<Modal.Card.Header showClose={false}>
						<Modal.Card.Title
							textFamily="secondary"
							textTransform="uppercase"
							textSize={4}
							textColor="link"
							renderAs="h3"
						>
							{activeProject.project}
						</Modal.Card.Title>
						<Button remove onClick={toggleModal}></Button>
					</Modal.Card.Header>

					<Modal.Card.Body>
						<Heading renderAs="h4" textSize={5}>
							About the project:
						</Heading>
						<Content>
							<ul>
								<li>{activeProject.description}</li>
								<li>{activeProject.workType}</li>
							</ul>
						</Content>

						<Heading renderAs="h4" textSize={5}>
							My contributions:
						</Heading>
						<Content>
							<ul>
								{activeProject.contributions.map((contribution) => (
									<li key={uuidv4()}>{contribution}</li>
								))}
							</ul>
						</Content>

						<Heading renderAs="h4" textSize={5}>
							Links:
						</Heading>
						<Content>
							<ul>
								{activeProject.links.site && (
									<li>
										<a href={activeProject.links.site}>Website</a>
									</li>
								)}
								{activeProject.links.github && (
									<li>
										<a href={activeProject.links.github}>Github</a>
									</li>
								)}
							</ul>
						</Content>

						<Heading renderAs="h4" textSize={5}>
							Screenshots:
						</Heading>
						{activeProject.photos.map((image) => (
							<Block key={uuidv4()}>
								<Image src={image} />
							</Block>
						))}
					</Modal.Card.Body>

					<Modal.Card.Footer>
						<Button color="link" onClick={toggleModal}>
							Close
						</Button>
					</Modal.Card.Footer>
				</Modal.Card>
			</Modal>
		</Section>
	);
};

export default Portfolio;
