import React,{useState} from "react";


const Article = (props) => {
	const [id, setId] = useState(1);

    

	return (
		<div className="article-container">
			<div className="article-content-container"> 	
				<p>{props.content[0][`${props.id}`].para1}</p>
				<p>{props.content[0][`${props.id}`].para2}</p>
			</div>
			<img
				src={props.content[0][`${props.id}`].image}
				alt="forest-photo"
				style={{ margin: "25px 0px 0px 0px" }}
			/>
		</div>
	);
};

export default Article;
