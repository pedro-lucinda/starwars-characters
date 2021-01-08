import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  div {
    width: 5rem;
    height: 5rem;
    border: 1px solid var(--red);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: var(--light-grey);
      font-size: 1.8rem;
      &:hover {
        cursor: pointer;
        transform: scale(0.98, 0.98);
        transition: ease-in-out 0.2s;
        color: var(--red);
      }
    }
  }
`;
