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

const Table = ({ country }) => {
  const countryRow = country.map((item, i) => (
    <tr key={item.CountryCode} data-href={item.CountryCode}>
      {/* <td>{i}</td> */}
      <td className="font-weight-bold">
        <Link to={`world/country/${item.Slug}/${item.Country}`}>{item.Country}</Link>
      </td>
      <td>{item.TotalConfirmed}</td>
      <td>{item.TotalDeaths}</td>
      <td>{item.TotalRecovered}</td>
      <td>{item.NewConfirmed}</td>
      <td>{item.NewDeaths}</td>
      <td>{item.NewRecovered}</td>
    </tr>
  ));

  return (
    <StyledTable className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Death</th>
            <th>Total Recoverd</th>
            <th>New Confirmed</th>
            <th>New Death</th>
            <th>New Recoverd</th>
          </tr>
        </thead>
        <tbody>{countryRow}</tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
