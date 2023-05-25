import React from "react";
import Logo from "../assets/logo.png";
import {
	easeIn,
	easeInOut,
	easeOut,
	motion,
	reverseEasing,
} from "framer-motion";

import { useNavigate } from "react-router-dom";
const EntryPage = () => {
	const navigate = useNavigate();
	function handleClick() {
		const box = document.querySelector(".box");
		const logo = document.querySelector(".logo");
		const scale = 30;
		logo.style.display = "none";
		box.style.transform = "scale(" + scale + ")";

		setTimeout(() => {
			navigate("/home");
		}, 1000);
	}

	return (
		<div className="container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y:0 }}
				transition={{ ease: easeIn }}
			>
				<div onClick={handleClick}>
					<img className="logo" src={Logo} alt="carbon logo" />
				</div>
			</motion.div>

			<motion.div
				className="box"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: -100 }}
				transition={{ ease: easeIn }}
			/>
		</div>
	);
};

export default EntryPage;
