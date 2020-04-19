import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.ul`
  li a {
    font-weight: bold;
  }
  li a img {
    max-width: 25px;
    margin-right: 25px;
  }
`;

const NavView = ({ pages }) => {
  const page = pages.map((page) => (
    <li key={page.id}>
      <Link to={page.link}>
        <img src={page.icon} />
        <div className="navname"> {page.name}</div>
      </Link>
    </li>
  ));
  return <StyledNavbar>{page}</StyledNavbar>;
};

export default NavView;
