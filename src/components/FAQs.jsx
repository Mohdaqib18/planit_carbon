import React from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
	return (
		<div>
			<ul className="faqs-container">
				<li>
					<Link
						to="/articles/1"
						style={{ textDecoration: "none", color: "white" }}
					>
						What are carbon markets ?
					</Link>
				</li>
				<li>
					<Link
						to="/articles/2"
						style={{ textDecoration: "none", color: "white" }}
					>
						How many types of carbon markets are there ?
					</Link>
				</li>
				<li>
					<Link
						to="/articles/3"
						style={{ textDecoration: "none", color: "white" }}
					>
						Why are we hearing more about carbon markets ?
					</Link>
				</li>
				<li>
					<Link
						to="/articles/4"
						style={{ textDecoration: "none", color: "white" }}
					>
						What are the challenges ?
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FAQs;
