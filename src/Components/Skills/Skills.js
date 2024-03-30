import { Section, Heading, Content, Columns, Button } from "react-bulma-components";

const Skills = () => {
	return (
		<Section id="skills">
			<Heading
				renderAs="h2"
				textFamily="secondary"
				textTransform="uppercase"
				textSize={1}
				textColor="primary"
			>
				Tech Stack
			</Heading>

			<Content textSize={5}>On a day-to-day basis, I work with →</Content>
			<Columns
				multiline
				vCentered
				centered
				className="is-mobile"
			>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-javascript-plain colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-typescript-plain colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-nodejs-plain-wordmark colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-express-original colored"></i>
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-react-original colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-redux-original colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-jquery-plain-wordmark colored" />
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-postgresql-plain-wordmark colored"></i>
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-mysql-original colored"></i>
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-git-plain colored"></i>
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-github-original colored"></i>
				</Columns.Column>
				<Columns.Column
					textSize={1}
					justifyContent="center"
					display="flex"
					mobile={{ size: "one-third" }}
				>
					<i class="devicon-graphql-plain-wordmark colored"></i>
				</Columns.Column>
			</Columns>
			<Content
				textSize={5}
				marginless
			>
				I'm also experienced with the following tools / platforms / frameworks →
			</Content>
			<Content textSize={6}>
				<ul>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							Deployment & CI / CI:
						</Content>{" "}
						Heroku, Codefresh, Travis CI
					</li>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							Project management:
						</Content>{" "}
						Agile methodologies, Kanban, Jira, Trello, Asana, Zendesk
					</li>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							Container management:
						</Content>{" "}
						Docker
					</li>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							CSS frameworks:
						</Content>{" "}
						Sass / SCSS, Bootstrap, Bulma, MaterialUI
					</li>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							Automation:
						</Content>{" "}
						Zapier
					</li>
					<li>
						<Content
							renderAs="span"
							textWeight="semibold"
						>
							Miscellaneous:
						</Content>{" "}
						Postman, Shopify
					</li>
				</ul>
			</Content>
		</Section>
	);
};

export default Skills;
