import React, { useState, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import Loader from "../../common/Loader";
import styled from "styled-components";
import TableState from "./TableState";

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

const State = () => {
  const { states, loading } = useContext(DataContext);
  const [tableHeading, setTableHeading] = useState([
    { id: "1", name: "State" },
    { id: "2", name: "Total Confirmed" },
    { id: "3", name: "Total Death" },
    { id: "4", name: "Total Recoverd" },
    { id: "5", name: "New Foreign Cases" },
  ]);

  if (loading) return <Loader />;
  return (
    <div className="State">
      <StyledRow className="row mb-4">
        <div className="col-md-12">
          <div className="cus-white">
            <h1 className="h4 m-0 font-weight-bold">Indian States</h1>
          </div>
        </div>
      </StyledRow>
      <StyledRow className="row">
        <div className="col-md-12">
          <div className="cus-white">
            <TableState state={states} heading={tableHeading} />
          </div>
        </div>
      </StyledRow>
    </div>
  );
};

export default State;
