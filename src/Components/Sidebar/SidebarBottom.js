import { Content, Icon } from 'react-bulma-components';

import './Sidebar.css';

const SidebarBottom = () => {
	return (
		<div className="SidebarBottom">
			<Content renderAs="p" textSize={2}>
				<Icon renderAs="a" href="https://github.com/elijahlc" color="white-bis" pr={6}>
					<i className="fa-brands fa-github"></i>
				</Icon>
				<Icon renderAs="a" href="https://www.linkedin.com/in/elijahcohen/" color="white-bis">
					<i className="fa-brands fa-linkedin"></i>
				</Icon>
			</Content>
		</div>
	);
};

export default SidebarBottom;
