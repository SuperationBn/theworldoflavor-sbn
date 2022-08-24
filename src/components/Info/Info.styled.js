import styled from "styled-components";

export const SectionInfoStyled = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ArticleGridInfo = styled.article`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  .textContainer{
    grid-column-start: 1;
    grid-row: span 2;

    padding: 1rem;

    @media (max-width: 1004px) {
      grid-column-start: 1;
      grid-column: span 1;
      grid-row-start: 1;
      grid-row: span 1;
    }

    @media (max-width: 640px) {
      grid-column-start: 1;
      grid-column: span 2;
      grid-row-start: 1;
      grid-row: span 1;

      padding: 4rem 2rem;
    }

    @media (max-width: 370px) {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 4rem;
      margin-bottom: 2rem;
      text-transform: capitalize;

      @media (max-width: 804px) {
        font-size: 3.2rem;
        margin-bottom: 1rem;
      }

      @media (max-width: 370px) {
        font-size: 2.8rem;
        margin-bottom: 2rem;
      }
    }

    span {
      font-size: 1.3rem;
    }

    p{
      max-width: 500px;
      line-height: 1.6;
      font-size: 1.4rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      
      @media (max-width: 804px) {
        margin-bottom: 1rem;
        margin-top: 1rem;
      }

      @media (max-width: 438px) {
        margin-bottom: 3rem;
        margin-top: 3rem;
      }
    }

    button {
      
    }
  }

  .imgGrandeModelo {
    grid-column-start: 2;
    grid-row: span 3;

    background-image: linear-gradient(#00000021, #00000061), url('https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 1004px) {
      grid-column-start: 2;
      grid-row-start: 2;
      grid-row: span 1;

    }

    @media (max-width: 640px) {
      display: none;
    }
  }
  
  .imgminiModelo {
    grid-column-start: 1;
    grid-column: span 1;
    grid-row: span 3;

    width: 100%;
    background-image: linear-gradient(#00000021, #00000061), url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;

    background-color: red;

    @media (max-width: 1004px) {
      width: 100%;
      height: 100%;
      grid-column-start: 1;
      grid-column: span 2;
      grid-row-start: 2;
      grid-row: span 2;


    }
  }

`;