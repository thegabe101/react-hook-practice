import React from "react";
import "./App.css";
import { StatePractice } from "./components/StatePractice";
import { StatePracticeTwo } from "./components/StatePracticeTwo";
import { Reducer } from "./components/UseReducer";
import { EffectPractice } from "./components/EffectPractice";
import { UseRef, useRef } from "./components/UseRef";

function App() {
	return (
		<p>
			<StatePractice></StatePractice>
			<StatePracticeTwo></StatePracticeTwo>
			<Reducer></Reducer>
			<EffectPractice></EffectPractice>
			<UseRef></UseRef>
		</p>
	);
}

export default App;
