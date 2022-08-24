import styled from "styled-components";

export const PromoSectionStyled = styled.section`
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 5rem;
`;

export const ArticlePromoGrid = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  
  @media (max-width: 768px) {
    
    grid-template-columns: 1fr;
  }


  .textPromoContainer {

    @media (max-width: 768px) {
      text-align: center;
    }

    h2 {
      font-size: 4rem;

      @media (max-width: 985px) {
        font-size: 3.7rem;
      }

      @media (max-width: 845px) {
        font-size: 3rem;
      }

      @media (max-width: 494px) {
        font-size: 2.8rem;
      }

      @media (max-width: 390px) {
        font-size: 2.4rem;
      }

      @media (max-width: 289px) {
        font-size: 2rem;
      }
    }

    p{
      font-size: 1.4rem;
      margin: 3rem 0rem;

      @media (max-width: 289px) {
        font-size: 1.2rem;

      }
    }

  }
`;