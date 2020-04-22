import React from "react";
import _ from "lodash";
import styled from "styled-components";

const StyledPagination = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .page-link {
    border: none;
    height: 30px;
    width: 30px;
    display: block;
    padding: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border: 2px solid transparent;
    color: #7d58fe;
    transition: all 0.5s;
  }
  .page-link:hover {
    border: 2px solid #7d58fe;
    background: transparent;
    color: #7d58fe;
  }
  li.active .page-link {
    background: #7d58fe;
    color: #fff;
    outline: none;
    border-color: transparent;
  }
`;

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 0) return 0;

  return (
    <StyledPagination>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
            <a
              style={{ cursor: " pointer" }}
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
