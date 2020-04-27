import fp from 'lodash/fp'
import React from "react";
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

const getTableBody = (data, heading) => {

  if (fp.isArray(data)) {

    return fp.map(item => (
      <tr key={item.state}>
        {fp.map(({ className, key }) => {

          return <td key={key} className={className}>{item[key]}</td>
        }, heading)}
      </tr>
    ), data)
  }

  return (
    <tr>{fp.map(({ className, key }) => {

      return <td key={key} className={className}>{data[key]}</td>
    }, heading)}</tr>
  );
}

const TableBedSummary = ({ body, heading }) => {

  const tableHead = fp.map(item => <th key={item.key}>{item.name}</th>, heading);
  const tableBody = getTableBody(body, heading)

  return (
    <StyledTable className="table-responsive text-center">
      <table className="table table-borderless">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>
          {heading.map}
          {tableBody}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default TableBedSummary;
