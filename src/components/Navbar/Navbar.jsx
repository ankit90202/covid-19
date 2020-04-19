import React, { useState } from "react";
import NavView from "./NavView";
import classes from "../../style/style.module.css";
import logo from "../../utils/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import support from "../../utils/support.svg";
import patient from "../../utils/patient.svg";
import journey from "../../utils/journey.svg";
import pin from "../../utils/pin.svg";
import world from "../../utils/world.svg";

const StyledLogoWrapper = styled.div`
  margin-bottom: 50px;
  a {
    text-decoration: none;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #7d58fe;
  }
`;

const StyledImg = styled.img`
  max-width: 80px;
  margin-right: 10px;
`;
const StyledTitle = styled.h2`
  font-size: 46px;
  font-weight: bold;
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState([
    { id: 1, name: "World", link: "/", icon: world },
    { id: 2, name: "India", link: "/world/country/india/India", icon: pin },
    { id: 3, name: "Indian State", link: "/india-state", icon: journey },
    { id: 4, name: "Hospital Beds", link: "/india/hospital-beds", icon: patient },
    { id: 5, name: "Resources", link: "/resources", icon: support },
  ]);
  return (
    <div className={classes.Navbar}>
      <StyledLogoWrapper className="logo-wrapper">
        <Link to="/">
          <StyledImg src={logo} alt="" />
          <StyledTitle>Covid</StyledTitle>
        </Link>
      </StyledLogoWrapper>
      <NavView pages={navbar} />
    </div>
  );
};

export default Navbar;
