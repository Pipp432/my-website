import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import React from "react";
import Welcome from "./pages/Welcome";

function App() {
	return (
		<div>
			<header className='App-header'>
				<MainHeader />
			</header>
			<main>
				<Routes>
					<Route path='/welcome' element={<Welcome />} exact />
				</Routes>
			</main>
		</div>
	);
}

export default App;
