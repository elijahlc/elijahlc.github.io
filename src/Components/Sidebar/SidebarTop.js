import { Heading } from 'react-bulma-components';

import Avatar from './Avatar';

import './Sidebar.css';

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
				mobile={{ textAlign: 'center' }}
			>
				Software Engineer
			</Heading>
			<Heading subtitle textColor="white" textSize={3} textAlign="right" mobile={{ textAlign: 'center' }}>
				Problem-Solver | Life-long Learner
			</Heading>
		</div>
	);
};

export default SidebarTop;
