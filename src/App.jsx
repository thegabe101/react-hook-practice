import React from "react";
import "./App.css";
import { StatePractice } from "./components/StatePractice";
import { StatePracticeTwo } from "./components/StatePracticeTwo";
import { Reducer } from "./components/UseReducer";
import { EffectPractice } from "./components/EffectPractice";
import { UseRef } from "./components/UseRef";
import { UseLayout } from "./components/UseLayout";
import { ImperativeHandle } from "./components/ImperativeHandle";
import ContextPractice from "./components/ContextPractice";

function App() {
	return (
		<p>
			<StatePractice></StatePractice>
			<StatePracticeTwo></StatePracticeTwo>
			<Reducer></Reducer>
			<EffectPractice></EffectPractice>
			<UseRef></UseRef>
			<UseLayout></UseLayout>
			<ImperativeHandle></ImperativeHandle>
			<ContextPractice></ContextPractice>
		</p>
	);
}

export default App;
