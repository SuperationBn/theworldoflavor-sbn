import React from "react";
import { ArticlePromoGrid, PromoSectionStyled } from "./Promo.styled";
import imgIlustratuin from "../../img/ilustration2.png";

const PromoFood = () => {
	return (
		<PromoSectionStyled>
			<ArticlePromoGrid>
				<div className="textPromoContainer">
					<h2>
						we will give you the best of the best in terms of{" "}
						<span className="spanGlobal">food</span>, enjoy a{" "}
						<span className="spanGlobal">family</span> atmosphere and have the
						time of your life.
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						impedit ex iusto a architecto, vitae sapiente distinctio temporibus
						officiis nam.
					</p>
					<button>I'm interested</button>
				</div>
				<div className="imgPromo">
					<img src={imgIlustratuin} alt="" />
				</div>
			</ArticlePromoGrid>
		</PromoSectionStyled>
	);
};

export default PromoFood;
