import React from "react";

const CardPlatos = ({ img, title, precio, parafo }) => {
	return (
		<div className="muestra">
			<div className="imgPlato">
				<img src={img} alt="" />
			</div>
			<div className="textPlatos">
				<h3>{title}</h3>
				<span>${precio}</span>
				<p>{parafo}</p>
			</div>
		</div>
	);
};

export default CardPlatos;
