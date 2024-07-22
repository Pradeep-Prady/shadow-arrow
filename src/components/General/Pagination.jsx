import React from "react";

const Pagination = ({
  totalpages,
  itemsPerpage,
  currentPageNumber,
  setCurrentPageNumber,
}) => {
  const pages = [];
  for (let index = 1; index <= totalpages; index++) {
    pages.push(index);
  }
  return (
    <div className="flex justify-center items-center gap-3 scale-[0.6] sml:scale-[0.7] md:scale-[0.8] mdl:scale-[0.9] lgl:scale-100">
      <button
        className={
          currentPageNumber === 1 ? "paginateBtnDisabled" : "paginateBtn"
        }
        disabled={currentPageNumber === 1}
        onClick={() => {
          window.scrollTo(0, 250);
          setCurrentPageNumber(currentPageNumber - 1);
        }}
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          className={
            currentPageNumber === page
              ? "px-3 py-1 border border-primary bg-primary text-white"
              : "paginateBtn"
          }
          key={index}
          onClick={() => {
            window.scrollTo(0, 250);
            setCurrentPageNumber(page);
          }}
        >
          {page}
        </button>
      ))}

      <button
        className={
          currentPageNumber === pages.length
            ? "paginateBtnDisabled"
            : "paginateBtn"
        }
        disabled={currentPageNumber === pages.length}
        onClick={() => {
          window.scrollTo(0, 250);
          setCurrentPageNumber(currentPageNumber + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
