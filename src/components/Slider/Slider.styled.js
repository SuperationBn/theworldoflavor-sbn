import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SectionSliderStyled = styled.section`
  margin-top: 2rem;
  width: 100%;
  /* height: ; */
  position: relative;

  .subtitle {
    padding: 1rem;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    
    h2 {
      font-size: 5rem;

      @media (max-width: 749px) {
        font-size: 3.8rem;
      }

      @media (max-width: 505px) {
        font-size: 2.8rem;
      }

      @media (max-width: 371px) {
        font-size: 2.4rem;
      }

      @media (max-width: 295px) {
        font-size: 2.2rem;
      }
    }
  }
`;

export const ArticleSlider = styled.article`
  position: relative;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;

  .swiper {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .swiper-button-prev,
    .swiper-button-next {
      padding: 2rem;
      background-color: #00000071;
      color: white;
    }

    .slidGlobal {
      /* padding: 1rem; */
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;

      &:hover .textSliderContainerBlobal{
        bottom: 10px;
      }

      .textSliderContainerBlobal {
        position: absolute;
        bottom: -200px;
        left: 10px;
        right: 10px;
        padding: 0.7rem;
        background-color: #00000081;
        border-radius: 10px;

        h4 {
          font-size: 2.3rem;
          color: #f7f7f7e8;
        }

        p {
          font-size: 1.3rem;
          margin: 2rem 0rem;
          color: #f7f7f7a9;
        }

        span {
          font-size: 1.5rem;
          font-weight: 600;
          color: #29de26e9;
        }
      }
    }

    .slidUno {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600');
      
    }

    .slidDos {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600');
      
    }

    .slidTres {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600');
      
    }

    .slidCuatro {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/2067437/pexels-photo-2067437.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
      
    }

    .slidCinco {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/8765345/pexels-photo-8765345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
      
    }

    .slidSeix {
      background-image: linear-gradient(#00000041, #00000091), url('https://images.pexels.com/photos/2821743/pexels-photo-2821743.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
      
    }

  }

  .mySwiper {
    @media (max-width: 866px) {
      display: grid;
      grid-template-columns: 1fr !important;
    }
  }
  
  .swiper-slide {
    padding: 1rem;
    text-align: left;
    background: red;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: flex-end;
    border-radius: 10px;

  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;