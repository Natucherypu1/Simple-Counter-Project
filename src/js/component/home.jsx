import React from "react";
import { SecondsCounter } from "./secondsCounter.jsx";
//create your first component
const Home = (props) => {
	const first = props.counter %10
	const second = Math.floor(props.counter /10) %10 
	const third = Math.floor(props.counter /100) %10
	const fourth = Math.floor(props.counter /1000) %10
	const fifth = Math.floor(props.counter /10000) %10
	const sixth = Math.floor(props.counter /100000) %10
	
	return (
		<div className="text-center">
		<SecondsCounter first = {first} second = {second} third = {third} fourth = {fourth} fifth = {fifth} sixth = {sixth} />
		</div>
	);
};

export default Home;
