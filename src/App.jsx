import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EntryPage from "./components/entryPage";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import Signup from "./components/Signup";
import Test from "./components/Test";
import Login from "./components/Login";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={EntryPage} />
					<Route path="/home" Component={HomePage} />
					<Route path="/articles/:id" Component={ArticlePage} />
					<Route path="/signup" Component={Signup} />
					<Route path="/login" Component={Login} />
				</Routes>
			</BrowserRouter>
		
		</div>
	);
}

export default App;
