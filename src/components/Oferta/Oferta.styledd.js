import styled from "styled-components";
import imgBgOferta from "../../img/bgSection2.jpg"

export const OfertaSectionStyled = styled.section`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(-80deg, #00000021 , black), url(${imgBgOferta});
  background-position: center;
  background-repeat: no-repeat;
  background-size: left;
`;

export const ArticleOfertaGrid = styled.article`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  .textOfertaContainer{
    padding: 1rem;
    grid-column-start: 2;

    @media (max-width: 963px) {
      grid-column-start: 1;
      grid-column: span 2;

      text-align: center;
    }

    .espanOferta {
      margin-bottom: 2rem;
      margin-top: 2rem;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2acc27a2;

      @media (max-width: 963px) {
        margin: 3rem auto;
      } 
      
      @media (max-width: 531px) {
        margin: 1rem auto;
      }

      span {
        font-size: 6rem;
        color: #fffe;
      }

      h4 {
        font-size: 3rem;
        color: #ffffffb9;
      }
    }
    
    span {
      font-size: 1.3rem;
      color: #ffffffb9;
    }

    h3 {
      text-transform: uppercase;
      font-size: 4rem;
      color: #fffffff0;
      margin-bottom: 2rem;

      @media (max-width: 531px) {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      @media (max-width: 359px) {
        font-size: 2.5rem;
      }
      
    }
    
    p {
      font-size: 1.6rem;
      color: #ffffffd4;
      margin-bottom: 2rem;

      @media (max-width: 531px) {
        font-size: 1.4rem;
        margin-bottom: 1rem;

      }
    }

    button {
      font-weight: 700;
    }
  }
`;