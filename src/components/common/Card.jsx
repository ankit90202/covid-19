import React from "react";
import styled from "styled-components";

const StyledNumber = styled.p``;

const Card = ({ data, title, colSize, bgColor }) => {
  const StyledCard = styled.div`
    background: ${bgColor};
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    // border: 3px solid #fff;

    .card-title {
      margin-bottom: 0;
      font-size: 15px;
    }
    .card-text {
      // font-size: 24px;
      font-weight: bold;
    }
  `;

  return (
    <div className={`col-md-${colSize} `}>
      <StyledCard className="cus-card">
        <p className="card-title">{title}</p>
        <h2 className="card-text">{data}</h2>
      </StyledCard>
    </div>
  );
};

export default Card;
