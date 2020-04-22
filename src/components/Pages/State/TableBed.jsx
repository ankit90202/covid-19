import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  thead tr {
    background: #f4f8fb;
    color: #9898a1;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }

  tbody tr:hover {
    background: #f4f8fb;
    color: #9898a1;
    cursor: pointer;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }
  a {
    color: #000;
  }
`;

const TableBedSummary = ({ beds, heading }) => {
  const tableHead = heading.map((item) => <th key={item.id}>{item.name}</th>);
  const [bed, setBed] = useState({});

  useEffect(() => {
    if (beds) {
      setBed(beds);
    }
  }, [beds]);
  return (
    <StyledTable className="table-responsive text-center">
      <table className="table table-borderless">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>
          <tr>
            <td>{bed.ruralHospitals}</td>
            <td>{bed.ruralBeds}</td>
            <td>{bed.urbanHospitals}</td>
            <td>{bed.urbanBeds}</td>
            <td className="font-weight-bold">{bed.totalHospitals}</td>
            <td className="font-weight-bold">{bed.totalBeds}</td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
};

export default TableBedSummary;
