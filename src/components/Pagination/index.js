import React from "react";
import { PaginationContainer } from "./style";

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
	}

  return (
    <PaginationContainer className="animateUp">
      {pageNumbers.map((number) => (
        <div key={number} onClick={() => paginate(number)}>
          <p> {number} </p>
        </div>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
