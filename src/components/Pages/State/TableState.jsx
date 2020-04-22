import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const TableState = ({ state, heading }) => {
  const tableHead = heading.map((item) => <th key={item.id}>{item.name}</th>);
  const states = state.map((item) => (
    <tr key={item.loc}>
      <td className="font-weight-bold">
        <Link to={`world/india/${item.loc}`}>{item.loc}</Link>
      </td>
      <td>{item.totalConfirmed}</td>
      <td>{item.deaths}</td>
      <td>{item.discharged}</td>
      <td>{item.confirmedCasesForeign}</td>
    </tr>
  ));

  return (
    <StyledTable className="table-responsive text-center">
      <table className="table table-borderless">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>{states}</tbody>
      </table>
    </StyledTable>
  );
};

export default TableState;
