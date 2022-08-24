import React from "react";
import { ArticlePlanesGrid, PlanesSectionStyled } from "./Planes-styled";

const PLanesSection = () => {
	return (
		<PlanesSectionStyled>
			<ArticlePlanesGrid>
				<div className="textPlanesContainer">
					<div className="textBoxPlanes">
						<h3>view sample menu and choose your destination</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
							assumenda perspiciatis delectus soluta! Similique soluta earum
							vitae expedita ut veniam fuga voluptatem laboriosam rem culpa
							placeat, modi corporis quidem?
						</p>
						<button>see more</button>
					</div>
				</div>
				<div className="imgContentPlanes"></div>
			</ArticlePlanesGrid>
		</PlanesSectionStyled>
	);
};

export default PLanesSection;
