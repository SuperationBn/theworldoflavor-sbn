import styled from "styled-components";

export const PlanesSectionStyled = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ArticlePlanesGrid = styled.article`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 795px) {
    grid-template-columns: 1fr;

  } 

  .textPlanesContainer {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .textBoxPlanes {
      padding: 1rem;

      max-width: 500px;

      @media (max-width: 795px) {
        text-align: center;
      }

      h3 {
        font-size: 3rem;
        text-transform: uppercase;

        @media (max-width: 478px) {
          font-size: 2.6rem;

        }
      }

      p {
        font-size: 1.2rem;
        margin: 4rem 0rem;
      }

      button {
        background-color: #2cb5c7ee;
        border: 2px solid var(--h2-Color);
        font-weight: 800;
        color: #ffffffee;
        
        &:hover {
          background-color: #12cbe3ce;
        }
      }
    }
  }

  .imgContentPlanes {
    width: 100%;
    height: 100%;

    background-image: linear-gradient(20deg, #00000051, #00000081), url('https://images.pexels.com/photos/2323153/pexels-photo-2323153.jpeg?auto=compress&cs=tinysrgb&w=600') ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;