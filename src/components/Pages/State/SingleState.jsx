import React from "react";
import styled from "styled-components";

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

const SingleState = ({ match }) => {
  
  const stateName = match.params.state;

  return (
    <div className="single-state">
      <StyledRow className="row mb-4">
        <div className="col-md-12">
          <div className="cus-white">
            <h1 className="h4 m-0 font-weight-bold">{stateName}</h1>
          </div>
        </div>
      </StyledRow>
    </div>
  );
};

export default SingleState;
