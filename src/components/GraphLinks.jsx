import React from "react";
import BlueRect from "../assets/blue-rectangle.png";
import GreenRect from "../assets/green-rectangle.png";
import SeaGreenRect from "../assets/seagreen-reactangle.png";
import PinkRect from "../assets/pink-rectangle.png";

const GraphLinks = () => {
	return (
		<div className="graph-link-container">
			<div className="graph-link-block">
				<div className="graph-link-item">
					<img src={PinkRect} alt="pink-rectangle" height="35px" />
					<p>Carbon captured through the air or industrial emissions</p>
				</div>
				<div className="graph-link-item">
					<img src={BlueRect} alt="blue-rectangle" height="35px" />
					<p>Carbon stored in ocean plants and sediments</p>
				</div>
			</div>
			<div className="graph-link-block">
				<div className="graph-link-item">
					<img src={SeaGreenRect} alt="seagreen-rectangle" height="35px" />
					<p>Carbon stored in freshwater and wet land environments</p>
				</div>
				<div className="graph-link-item">
					<img src={GreenRect} alt="green-rectangle" height="35px" style={{"margin-left": "-72px"}}  />
					<p>Carbon stored in terrestrial plants</p>
				</div>
			</div>
		</div>
	);
};

export default GraphLinks;
