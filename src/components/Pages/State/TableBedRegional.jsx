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

const TableBedRegional = ({ regionalheading, regional }) => {
  const tableHead = regionalheading.map((item) => <th key={item.id}>{item.name}</th>);
  const [bed, setBed] = useState([]);

  useEffect(() => {
    if (regional) {
      setBed([...regional]);
    }
  }, [regional]);

  const beds = bed.map((item) => (
    <tr key={item.state}>
      <td className="font-weight-bold">{item.state}</td>
      <td>{item.ruralHospitals}</td>
      <td>{item.ruralBeds}</td>
      <td>{item.urbanHospitals}</td>
      <td>{item.urbanBeds}</td>
      <td className="font-weight-bold">{item.totalHospitals}</td>
      <td className="font-weight-bold">{item.totalBeds}</td>
    </tr>
  ));

  return (
    <StyledTable className="table-responsive text-center">
      <table className="table table-borderless">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>{beds}</tbody>
      </table>
    </StyledTable>
  );
};

export default TableBedRegional;
