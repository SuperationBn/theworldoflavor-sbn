import React from "react";
import { ArticleGridInfo, SectionInfoStyled } from "./Info.styled";

const InfoSection = () => {
	return (
		<SectionInfoStyled>
			<ArticleGridInfo>
				<div className="textContainer">
					<dir className="border"></dir>
					<h2>There is no more sincere love than the love we feel for food.</h2>
					<span>Lorem ipsum dolor sit amet.</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at a
						consequatur eligendi nulla officia tempora temporibus possimus animi
						ea?
					</p>
					<button>Learn more</button>
				</div>
				<div className="imgGrandeModelo"></div>
				<div className="imgminiModelo"></div>
			</ArticleGridInfo>
		</SectionInfoStyled>
	);
};

export default InfoSection;
