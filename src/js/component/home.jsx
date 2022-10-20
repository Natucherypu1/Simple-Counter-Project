import React from "react";
import { SecondsCounter } from "./secondsCounter.jsx";
//create your first component
const Home = () => {
	const first = 0
	const second = 0
	const third = 0
	const fourth = 0
	const fifth = 0
	const sixth = 0
	
	return (
		<div className="text-center">
		<SecondsCounter first = {first} second = {second} third = {third} fourth = {fourth} fifth = {fifth} sixth = {sixth} />
		</div>
	);
};

export default Home;
