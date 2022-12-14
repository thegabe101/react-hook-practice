import React from "react";
import "./App.css";
import { StatePractice } from "./components/StatePractice";
import { StatePracticeTwo } from "./components/StatePracticeTwo";
import { Reducer } from "./components/UseReducer";
import { EffectPractice } from "./components/EffectPractice";

function App() {
	return (
		<p>
			<StatePractice></StatePractice>
			<StatePracticeTwo></StatePracticeTwo>
			<Reducer></Reducer>
			<EffectPractice></EffectPractice>
		</p>
	);
}

export default App;
