import React from "react";
import Logo from "../assets/logo.png";
import FAQs from "./FAQs";
import { Link } from "react-router-dom";
import Article from "./Article";
import {
	easeIn,
	easeInOut,
	easeOut,
	motion,
	reverseEasing,
} from "framer-motion";
import {data} from "../components/staticData";
import {useParams} from "react-router-dom";

const ArticlePage = () => {
	const {id} = useParams();
	console.log(id)
	return (
		<div className="homepage-container">
			<Link to="/home">
				<img className="homepage-logo" src={Logo} alt="logo" />
			</Link>

			<div style={{ "margin-left": "100px" }}>
				<FAQs />
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: easeIn }}
			>
				
			<Article content={data} id={id}/>
			</motion.div>
		</div>
	);
};

export default ArticlePage;
