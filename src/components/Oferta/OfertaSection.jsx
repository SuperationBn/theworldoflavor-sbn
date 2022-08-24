import React from "react";
import { ArticleOfertaGrid, OfertaSectionStyled } from "./Oferta.styledd";

const OfertaSection = () => {
	return (
		<OfertaSectionStyled>
			<ArticleOfertaGrid>
				<div className="textOfertaContainer">
					<span>Lorem ipsum dolor sit amet.</span>
					<div className="espanOferta">
						<h4>
							<span>30%</span> off
						</h4>
					</div>
					<h3>take advantage of our discounts on every purchase</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						consectetur quaerat, expedita minima reprehenderit voluptates eos
						maiores saepe et eaque!
					</p>
					<button>see more</button>
				</div>
			</ArticleOfertaGrid>
		</OfertaSectionStyled>
	);
};

export default OfertaSection;
