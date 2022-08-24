import styled from "styled-components";

export const PlatosSectionStyled = styled.section`
  width: 100%;

  padding-top: 9rem;
  padding-bottom: 9rem;

  .subTithle {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 714px) {
        padding: 1rem;
    }

     @media (max-width: 428px) {
      text-align: left;
      max-width: 100%;
      width: 100%;
      margin: none;
    }

    h2 {
      font-size: 4.6rem;

      @media (max-width: 714px) {
          font-size: 3.5rem;
      }

      @media (max-width: 428px) {
          font-size: 3rem;
      }

      @media (max-width: 289px) {
          font-size: 2.7rem;
      }
    }
  }
`;

export const ArticleGridMuestras = styled.article`
  padding: 5rem 1rem 0rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  justify-items: center;

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }

  .muestra {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 399px) {
      flex-direction: column;
    }

    .imgPlato {
      flex: 1 1 20rem;
    }

    .textPlatos {
      
      h3 {
        font-size: 3rem;
        margin-bottom: 1rem;

        @media (max-width: 844px) {
          font-size: 2.5rem;
        }
      }
      
      span {
        font-size: 1.9rem;
        font-weight: 700;

        @media (max-width: 844px) {
          font-size: 1.6rem;
        }
      }
      
      p {
        margin-top: 2rem;
        font-size: 1.3rem;
      }
    }
  }
`;