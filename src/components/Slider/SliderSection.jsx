import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// let SwiperNew = new Swiper(".team.slider", {
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 		},
// 	},
// });

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { ArticleSlider, SectionSliderStyled } from "./Slider.styled";

export default function Slider() {
	return (
		<SectionSliderStyled>
			<div className="subtitle">
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
					reprehenderit.
				</h2>
			</div>
			<ArticleSlider>
				<Swiper
					breakpoints={{
						0: {
							// width: 0,
							slidesPerView: 1,
							slidesPerGroup: 1,
						},
						768: {
							// width: 768,
							slidesPerView: 2,
							slidesPerGroup: 2,
						},
						992: {
							// width: 992,
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
					}}
					slidesPerView={3}
					spaceBetween={10}
					slidesPerGroup={3}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide className="slidGlobal slidUno">
						<div className="textSliderContainerBlobal">
							<h4>French toast</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$20.55</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="slidGlobal slidDos">
						<div className="textSliderContainerBlobal">
							<h4>large burger</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$19.99</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="slidGlobal slidTres">
						<div className="textSliderContainerBlobal">
							<h4>Italian sandwich</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$15.95</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="slidGlobal slidCuatro">
						<div className="textSliderContainerBlobal">
							<h4>Norwegian cake</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$11.87</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="slidGlobal slidCinco">
						<div className="textSliderContainerBlobal">
							<h4>shrimp bread</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$21.99</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="slidGlobal slidSeix">
						<div className="textSliderContainerBlobal">
							<h4>Spanish salad</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
								voluptatum itaque neque officiis nihil consequatur porro iusto
								officia quas recusandae?
							</p>
							<span>$17.99</span>
						</div>
					</SwiperSlide>
				</Swiper>
			</ArticleSlider>
		</SectionSliderStyled>
	);
}
