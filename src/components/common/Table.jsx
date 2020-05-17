import React from "react";
import fp from 'lodash/fp'
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

const TABLE_HEAD = [
  'Country',
  'Total Confirmed',
  'Total Death',
  'Total Recovered',
  'New Confirmed',
  'New Deaths',
  'New Recovered'
]

const TABLE_DATA = [{
  className: 'font-weight-bold',
  children: ({ Slug, Country }) => <Link to={`world/country/${Slug}/${Country}`}>{Country}</Link>
},
...fp.map(children => ({ className: '', children: item => item[children.replace(' ', '')] }), fp.tail(TABLE_HEAD))
]

const Table = ({ country }) => {
  
  const countryRow = country.map((item, i) => (
    <tr key={item.CountryCode} data-href={item.CountryCode}>
      {TABLE_DATA.map(({ children, className }, index) => {
        return <td key={`${index}-table-data`} className={className} children={children(item)} />
      })}
    </tr>
  ));

  return (
    <StyledTable className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            {TABLE_HEAD.map((title, index) => <th key={`${index}-table-head`} children={title} />)}
          </tr>
        </thead>
        <tbody>{countryRow}</tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
