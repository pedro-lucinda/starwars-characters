import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  width: 30rem;
  min-height: 15rem;
  max-height: 50rem;
  padding: 2rem;

  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;

  margin: 1rem;

  background: var(--mid-grey);

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.7rem;
  }

  p {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: #734652;
    &:hover {
      cursor: pointer;
      transform: scale(0.98, 0.98);
    }
  }

  div {
    margin-top: 1rem;
    height: 15rem;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    &:hover {
      cursor: default;
    }

    h3 {
      color: var(--light-grey);
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    hr {
      border: 1px solid var(--mid-grey);
      border-top: 1px solid var(--red);
      margin-bottom: 0.5rem;
      height: 1px;
    }

    p {
      color: var(--light-grey);
      font-size: 1.6rem;
      margin-bottom: 1rem;
      &:hover {
        cursor: default;
        transform: none;
      }
    }
  }
`;
