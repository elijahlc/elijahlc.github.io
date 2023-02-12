import { useState } from 'react';
import { Section, Heading, Card, Container, Content, Button, Modal } from 'react-bulma-components';

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
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState({});

	const toggleModal = (e) => {
		if (!modalOpen) setActiveProject(portfolio[e.target.name]);
		setModalOpen(!modalOpen);
	};

	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Portfolio
			</Heading>
			<Container fullwidth display="flex" flexDirection="row" flexWrap="wrap">
				{portfolio.map((project, idx) => {
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
						<Content>{activeProject.workType}</Content>
						<Content>{activeProject.description}</Content>
					</Modal.Card.Body>

					<Modal.Card.Footer>
						<Button color="link" onClick={toggleModal}>
							Cool!
						</Button>
					</Modal.Card.Footer>
				</Modal.Card>
			</Modal>
		</Section>
	);
};

export default Portfolio;
