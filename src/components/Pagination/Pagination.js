import React from 'react';
import "./Pagination.scss";

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  paginate,
}) => {
  // creating array of noumber of pages
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="btn-container">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        <i className="fa-solid fa-angle-left"></i> Previous
      </button>
      <span>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className="page_num"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </span>

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};


export default Pagination;