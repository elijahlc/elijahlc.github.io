import { Heading, Content, Icon } from 'react-bulma-components';

import Avatar from './Avatar';

import './Sidebar.css';

const SidebarTop = () => {
	return (
		<div className="SidebarTop">
			<Avatar />
			<Heading renderAs="h2" textFamily="primary" textSize={3} textColor="white" textAlign="right">
				Fullstack Software Engineer
			</Heading>
			<Heading subtitle textColor="white" textSize={5}>
				Problem-Solver | Life-long Learner
			</Heading>
		</div>
	);
};

export default SidebarTop;
