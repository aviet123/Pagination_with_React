import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  console.log(currentPage);
  const pageCount = Math.ceil(itemsCount / pageSize); // math.ceil to round floating number to greater or equal integer number
  if (pageCount === 1) return null; // return no pages displayed
  const pages = _.range(1, pageCount + 1); // to covert total number of page to array [1,2,3,4] if totalpage = 4 example

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
