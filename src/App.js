import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SidebarTop from './Components/Sidebar/SidebarTop';
import SidebarBottom from './Components/Sidebar/SidebarBottom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};

const App = () => {
	const size = useWindowSize();

	const styles = { paddingLeft: 0, paddingRight: 0 };

	if (size.width < 768) {
		return (
			<Container fluid style={styles}>
				<SidebarTop />
				content
				<SidebarBottom />
			</Container>
		);
	}

	return (
		<Container fluid style={styles}>
			<Row>
				<Col md={4}>
					<SidebarTop />
					<SidebarBottom />
				</Col>
				<Col>content</Col>
			</Row>
		</Container>
	);
};

export default App;
