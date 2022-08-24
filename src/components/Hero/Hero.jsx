import React, { useEffect, useState } from "react";
import { HeroSection } from "./Hero.styled";
import { FaAdjust } from "react-icons/fa";

const Hero = () => {
	const [theme, setTheme] = useState(false);

	useEffect(() => {
		if (theme) {
			document.querySelector("body").classList.remove("themeLigth");
			document.querySelector("body").classList.add("themeDark");
		} else {
			document.querySelector("body").classList.add("themeLight");
			document.querySelector("body").classList.remove("themeDark");
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(!theme);
	};

	return (
		<HeroSection>
			<div onClick={toggleTheme} className="theme">
				theme
				<FaAdjust className="iconTheme" />
			</div>
			<div className="heroContainer">
				<div className="textHeroContent">
					<h1>
						A recipe has no <span className="spanGlobal">soul</span>, It is up
						to the cook to give the recipe a{" "}
						<span className="spanGlobal">soul</span>.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
						deleniti natus porro minima aliquam possimus officia suscipit
						voluptates corporis corrupti!
					</p>
					<div className="muestras">
						<div className="comidaMustra muestraUno">
							<h3>pizza</h3>
						</div>
						<div className="comidaMustra muestraDos">
							<h3>noodles</h3>
						</div>
						<div className="comidaMustra muestraTres">
							<h3>soup</h3>
						</div>
						<div className="comidaMustra muestraCuatro">
							<h3>cake</h3>
						</div>
					</div>
				</div>
			</div>
		</HeroSection>
	);
};

export default Hero;
