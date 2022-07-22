import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/UI/MainHeader";
import React from "react";
import Welcome from "./pages/Welcome";
import BasicInfo from "./pages/BasicInfo";
import Skills from "./pages/Skills";

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
				<Routes>
					<Route path='/basic-info' element={<BasicInfo />} exact />
				</Routes>
				<Routes>
					<Route path='/skills' element={<Skills />} exact />
				</Routes>
			</main>
		</div>
	);
}

export default App;
