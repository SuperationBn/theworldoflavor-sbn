import React from "react";
import { FooterStyled } from "./Footer.styled";

const FooterSeection = () => {
	return (
		<FooterStyled>
			<div className="footerSubcribete">
				<div className="textFooterContainer">
					<h2>Subscribe And Follow Us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
						nostrum animi quia accusantium ipsam esse.
					</p>
					<form>
						<input type="email" name="email" id="emailId" />
						<button type="submit">subscribe</button>
					</form>
				</div>
			</div>
			<div className="derechos">
				<span>Copyright © SuperationBn</span>
			</div>
		</FooterStyled>
	);
};

export default FooterSeection;
