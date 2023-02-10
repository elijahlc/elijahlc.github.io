import { Columns } from 'react-bulma-components';

import SidebarTop from './SidebarTop';
import SidebarBottom from './SidebarBottom';

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<SidebarTop />
			<SidebarBottom />
		</div>
	);
};

export default Sidebar;
