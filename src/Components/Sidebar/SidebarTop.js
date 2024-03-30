import { Heading, Block, Content } from "react-bulma-components";
import { HashLink } from "react-router-hash-link";

import Avatar from "./Avatar";

import "./Sidebar.css";

const SidebarTop = () => {
	return (
		<div className="SidebarTop">
			<Avatar />
			<Heading
				renderAs="h2"
				textFamily="primary"
				textSize={2}
				textColor="white"
				textAlign="right"
				mobile={{ textAlign: "center" }}
			>
				Software Engineer
			</Heading>
			<Heading
				renderAs="p"
				subtitle
				textColor="white"
				textSize={4}
				textAlign="right"
				textWeight="light"
				mobile={{ textAlign: "center" }}
			>
				Problem-Solver | Life-long Learner
			</Heading>

			<Block
				display="flex"
				flexDirection={window.innerWidth < 769 ? "row" : "column"}
				textAlign="right"
				textSize={5}
			>
				<Content
					renderAs={HashLink}
					smooth
					to="/#about"
					textColor="warning"
					mb={1}
				>
					About me
				</Content>
				<Content
					renderAs={HashLink}
					smooth
					to="/#portfolio"
					textColor="warning"
					mb={1}
				>
					Portfolio
				</Content>
				<Content
					renderAs={HashLink}
					smooth
					to="/#contact"
					textColor="warning"
				>
					Contact
				</Content>
			</Block>
		</div>
	);
};

export default SidebarTop;
