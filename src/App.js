import "./App.css";
import { useState } from "react";

const App = () => {
	const [elementToDisplay, setElementToDisplay] = useState("");

	return (
		<div className="App">
			<h1> Hello World!</h1>
			<button
				onClick={() => {
					setElementToDisplay(<div>Home Page</div>);
				}}
			>
				Home Page
			</button>
			<button
				onClick={() => {
					setElementToDisplay(<div>Landing Page</div>);
				}}
			>
				Landing Page
			</button>
			<button
				onClick={() => {
					setElementToDisplay(<div>About Page</div>);
				}}
			>
				About Page
			</button>

			<div>{elementToDisplay}</div>
		</div>
	);
};

/* function App() {
	let [isHomePage, setterF] = useState(true);
	const pageName = "Home";
	let [pageName, setPageName] = useState("Home");

	return (
		<div className="App">
			<h1>Hello World!</h1>
			<div>
				{isHomePage ? <div>Home Page</div> : <div>Landing Page</div>}
				<button onClick={() => setterF(!isHomePage)}>click</button>
			</div>
			<hr />
			<button onClick={() => setPageName("Home")}>Home</button>
			<button onClick={() => setPageName("About")}>About</button>
			<button onClick={() => setPageName("Home")}>Landing</button>

			{pageName === "Home" && <div>text is here</div>}
			{pageName === "About" && <div>text is here</div>}
			{pageName === "Landing" && (
				<div>
					<input type="text" placeholder="write here"></input>
				</div>
			)}
		</div>
	);
}
*/

export default App;
