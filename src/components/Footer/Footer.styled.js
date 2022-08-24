import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;

  .footerSubcribete {
    padding: 1rem;
    flex: 1 1 40rem;

    display: flex;
    justify-content: center;
    align-items: center;

    .textFooterContainer {  
      text-align: center;
      /* max-width: 600px; */
      /* margin: 0 auto; */

      h2 {
        text-transform: capitalize;
        font-size: 5rem;

        @media (max-width: 402px) {
          font-size: 3rem;
        }
      }

      p {
        font-size: 1.3rem;
        margin: 3rem 0rem;

        @media (max-width: 402px) {
          font-size: 1.2rem;

        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input{
          padding: 1.5rem 0.7rem;
          font-size: 1.5rem;
          color: #ffffffda;
          background: #2e2e2e;
          border-radius: 5px;
          box-shadow: 0px 5px 10px #0000004e;
        }
      }
    }
  }

  .derechos {
    background-color: #171617;
    padding: 1rem;
    text-align: center;

    span {
      font-size: 1.3rem;
      color: #ffffff68;
    }
  }
`;