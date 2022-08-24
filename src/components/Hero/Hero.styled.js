import styled from "styled-components";
import imgBgHero from "../../img/bgHero.jpg"

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  background-image:linear-gradient(20deg, #00000051, black), url(${imgBgHero});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 864px) {
    padding: 6rem 2rem 6rem 2rem;
    height: auto;
  }

  .theme {
    text-transform: uppercase;
    position: absolute;
    top: 20px;
    left: 20px;
    
    color: white;
    cursor: pointer;

    font-size: 1.2rem;

    .iconTheme {
      margin-left: 0.5rem;
      position: relative;
      top: 2px;
      color: var(--p-color);
    }
  }
  
  .heroContainer {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    padding-left: 4rem;

    @media (max-width: 864px) {
      padding-left: 0rem;

    }

    .textHeroContent {
      max-width: 800px;

      @media (max-width: 768px) {
        text-align: center;
      }

      h1 {
        font-size: 6em;
        color: white;
        text-transform: capitalize;

        @media (max-width: 654px) {
          font-size: 4rem;
        }

        @media (max-width: 366px) {
          font-size: 3.5rem;
        }
      }

      p {
        margin: 4rem 0rem;
        font-size: 1.4em;
        font-weight: 400;
        color: #f7f7f7bc;
      }

      .muestras {
        display: flex;
        gap: 4rem;

        @media (max-width: 768px) {
          justify-content: center;
        }

        @media (max-width: 478px) {
          gap: 1rem;
          flex-direction: column;
          align-items: center;
        }

        .comidaMustra {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 654px) {
            width: 80px;
            height: 80px;
          }

          @media (max-width: 478px) {
            width: 80%;
            height: 200px;
            border-radius: 10px;
          }

          h3 {
            font-size: 1.5rem;
            color: #f7f7f7ec;

          }
        }

        .muestraUno {
          background-image: linear-gradient(90deg, #00000091, #00000099), url('https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600');
          transition: 0.4s;
          
          &:hover {
            background-image: linear-gradient(#00000091, #00000019), url('https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600');
          }
        }

        .muestraDos {
          background-image: linear-gradient(#00000091, #00000099), url('https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600');

          &:hover {
            background-image: linear-gradient(#00000091, #00000019), url('https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600');
          }
        }

        .muestraTres {
          background-image: linear-gradient(#00000091, #00000099), url('https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=600');

          &:hover {
            background-image: linear-gradient(#00000091, #00000019), url('https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=600');
          }
        }

        .muestraCuatro {
          background-image: linear-gradient(#00000091, #00000099), url('https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600');

           &:hover {
            background-image: linear-gradient(#00000091, #00000019), url('https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600');
          }
        }
      }
    }
  }
`;