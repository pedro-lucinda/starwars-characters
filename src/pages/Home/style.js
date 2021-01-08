import styled from "styled-components";

export const Logo = styled.img`
  width: 15rem;
  margin-top: 3rem;
`;

export const HomeWrapper = styled.div`
  background: var(--dark-grey);
`
export const HomeContainer = styled.div`
  background-image : url(${props => props.bg});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 30rem auto;

  width: 100vw;
  min-height: 100vh;
  min-width: 350px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  main {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    margin: 2rem auto;
    max-width: 1120px;
    min-width: 350px;
  }
`;
