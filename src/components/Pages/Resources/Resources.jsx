import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import Loader from "../../common/Loader";
import TableResource from "./TableResource";
import { paginate } from "../../common/paginate";
import Pagination from "../../common/Pagination";

const StyledRow = styled.div`
  margin-bottom: 20px;

  .cus-white {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
  }
  .cus-white h5 {
    padding: 20px 0;
    font-weight: 600;
  }
  .pagination {
    flex-wrap: wrap;
  }
  .pagination li {
    margin-bottom: 10px;
  }
`;

const Resources = () => {
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { resource } = useContext(DataContext);
  const resouceLimit = paginate(resource, currentPage, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [resourcerheading, setResourceHeading] = useState([
    { id: 1, name: "State" },
    { id: 2, name: "Citys" },
    { id: 3, name: "Category" },
    { id: 4, name: "Name of The Organisation" },
    { id: 5, name: "Description Or Serviceprovided" },
    { id: 6, name: "Phonenumber" },
    { id: 7, name: "Website" },
  ]);

  return (
    <div className="Rsources">
      <StyledRow className="row mb-4">
        <div className="col-md-12">
          <div className="cus-white">
            <h1 className="h4 m-0 font-weight-bold">Resources</h1>
          </div>
        </div>
      </StyledRow>
      <StyledRow className="row mb-4">
        <div className="col-md-12">
          <div className="cus-white">
            <TableResource data={resouceLimit} heading={resourcerheading} />
          </div>
        </div>
      </StyledRow>
      <StyledRow>
        <div className="col-md-12 mt-3">
          <div className="cus-white">
            <Pagination
              itemsCount={resource.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </StyledRow>
    </div>
  );
};

export default Resources;
