import React from "react";
import { ArticleGridMuestras, PlatosSectionStyled } from "./Platos.styled";
import imgPlatoUno from "../../img/muestraIcon1.png";
import imgPlatoDos from "../../img/muestraIcon2.png";
import imgPlatoTres from "../../img/muestraIcon3.png";
import imgPlatoCuatro from "../../img/muestraIcon4.png";
import CardPlatos from "./CardPlatos";

const Platos = () => {
	return (
		<PlatosSectionStyled>
			<div className="subTithle">
				<h2>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
					inventore!
				</h2>
			</div>
			<ArticleGridMuestras>
				<CardPlatos
					img={imgPlatoUno}
					title={"mushroom salad"}
					precio={"17.59"}
					parafo={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, inventore!"
					}
				/>
				<CardPlatos
					img={imgPlatoDos}
					title={"spaghetti"}
					precio={"23.99"}
					parafo={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, inventore!"
					}
				/>
				<CardPlatos
					img={imgPlatoTres}
					title={"beef with salad"}
					precio={"20.99"}
					parafo={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, inventore!"
					}
				/>
				<CardPlatos
					img={imgPlatoCuatro}
					title={"soupy duck"}
					precio={"12.99"}
					parafo={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, inventore!"
					}
				/>
			</ArticleGridMuestras>
		</PlatosSectionStyled>
	);
};

export default Platos;
