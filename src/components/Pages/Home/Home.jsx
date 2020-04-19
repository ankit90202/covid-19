import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import Card from "../../common/Card";
import styled from "styled-components";
import Loader from "../../common/Loader";
import Table from "../../common/Table";
import Pagination from "../../common/Pagination";
import { paginate } from "../../common/paginate";

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
`;

const Home = () => {
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, worldStatus, country } = useContext(DataContext);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const countries = paginate(country, currentPage, pageSize);

  if (loading) return <Loader />;

  return (
    <div className="Home">
      <StyledRow className="row ">
        <Card
          data={worldStatus.TotalConfirmed}
          colSize={2}
          type="warning"
          title={"Total Cases"}
          bgColor={"#f36571"}
        />
        <Card
          data={worldStatus.TotalRecovered}
          colSize={2}
          type="success"
          title={"Total Recovered"}
          bgColor={"#ffac4e"}
        />
        <Card
          data={worldStatus.TotalDeaths}
          colSize={2}
          type="danger"
          title={"Total Deaths"}
          bgColor={"#a7a6b4"}
        />
        <Card
          data={worldStatus.NewConfirmed}
          colSize={2}
          type="warning"
          title={"New Confirmed"}
          bgColor={"#7add4f"}
        />
        <Card
          data={worldStatus.NewDeaths}
          colSize={2}
          type="warning"
          title={"New Deaths"}
          bgColor={"#bfd4ff"}
        />
        <Card
          data={worldStatus.NewRecovered}
          colSize={2}
          type="warning"
          title={"New Recovered"}
          bgColor={"#4caf50"}
        />
      </StyledRow>

      {/* table */}
      <StyledRow className="row mt-2">
        <div className="col-md-12">
          <div className="cus-white">
            <h5>Country Status</h5>
            <Table country={countries} />
          </div>
        </div>
        {/* pagination */}
        <div className="col-md-12 mt-3">
          <div className="cus-white">
            <Pagination
              itemsCount={country.length}
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

export default Home;
