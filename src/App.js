import { useState, useEffect } from "react";

import Sidebar from "./Components/Sidebar/Sidebar";
import SidebarTop from "./Components/Sidebar/SidebarTop";
import SidebarBottom from "./Components/Sidebar/SidebarBottom";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

import "./custom-styles.scss";
import "./App.css";

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

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};

const App = () => {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}, []);

	const size = useWindowSize();

	return (
		<div className="App">
			{size.width < 769 ? (
				<>
					<SidebarTop />
					<main>
						<About />
						<hr style={{ margin: "0 1.5rem" }} />
						<Skills />
						<hr style={{ margin: "0 1.5rem" }} />
						<Portfolio />
						<hr style={{ margin: "0 1.5rem" }} />
						<Contact />
					</main>
					<SidebarBottom />
				</>
			) : (
				<>
					<Sidebar />
					<main>
						<About />
						<hr style={{ margin: "0 3rem" }} />
						<Skills />
						<hr style={{ margin: "0 1.5rem" }} />
						<Portfolio />
						<hr style={{ margin: "0 3rem" }} />
						<Contact />
					</main>
				</>
			)}
		</div>
	);
};

export default App;
