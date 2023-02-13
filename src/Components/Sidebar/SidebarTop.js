import { Heading, Block } from 'react-bulma-components';
import { HashLink } from 'react-router-hash-link';

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
			<Heading renderAs="p" subtitle textColor="white" textSize={4} textAlign="right" mobile={{ textAlign: 'center' }}>
				Problem-Solver | Life-long Learner
			</Heading>

			<Block display="flex" flexDirection={window.innerWidth < 769 ? 'row' : 'column'} textAlign="right" textSize={5}>
				<HashLink smooth to="/#about">
					About me
				</HashLink>
				<HashLink smooth to="/#portfolio">
					Portfolio
				</HashLink>
				<HashLink smooth to="/#contact">
					Contact
				</HashLink>
			</Block>
		</div>
	);
};

export default SidebarTop;
