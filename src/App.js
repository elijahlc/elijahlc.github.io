import { useState, useEffect } from 'react';
import { Section } from 'react-bulma-components';

import Sidebar from './Components/Sidebar/Sidebar';
import SidebarTop from './Components/Sidebar/SidebarTop';
import SidebarBottom from './Components/Sidebar/SidebarBottom';
import About from './Components/About/About';

import './custom-styles.scss';
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
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	const size = useWindowSize();

	return (
		<div className="App">
			{size.width < 768 ? (
				<>
					<SidebarTop />
					<main>
						<About />
					</main>
					<SidebarBottom />
				</>
			) : (
				<>
					<Sidebar />
					<main>
						<About />
					</main>
				</>
			)}
		</div>
	);
};

export default App;
