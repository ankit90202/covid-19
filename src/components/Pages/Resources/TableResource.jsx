import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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

const TableResource = ({ data, heading }) => {
  const tableHeading = heading.map((item) => <td key={item.id}>{item.name}</td>);

  const resource =
    data.length > 0 ? (
      data.map((item) => (
        <tr key={uuidv4()}>
          <td className="font-weight-bold">{item.state}</td>
          <td className="font-weight-bold">{item.city}</td>
          <td className="font-weight-bold">{item.category}</td>
          <td className="font-weight-bold" style={{ width: "150px" }}>
            {item.nameoftheorganisation}
          </td>
          <td className="font-weight-bold" style={{ width: "200px" }}>
            {item.descriptionandorserviceprovided}
          </td>
          <td className="font-weight-bold">{item.phonenumber}</td>
          <td className="font-weight-bold">
            <a href={item.contact}>Source</a>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td>No Data Fount</td>
      </tr>
    );

  return (
    <StyledTable className="table-responsive text-center">
      <table className="table table-borderless">
        <thead>
          <tr>{tableHeading}</tr>
        </thead>
        <tbody>{resource}</tbody>
      </table>
    </StyledTable>
  );
};

export default TableResource;
