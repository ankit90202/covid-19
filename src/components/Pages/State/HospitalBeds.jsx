import React, { useState, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import styled from "styled-components";
import Loader from "../../common/Loader";
import TableBedSummary from "./TableBed";
import TableBedRegional from "./TableBedRegional";
import { Link } from "react-router-dom";

const StyledRow = styled.div`
  margin-bottom: 20px;

  .cus-white {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
  }
  .cus-white h5 {
    padding: 20px 0;
    font-weight: 600;
  }
  .source {
    text-decoration: none;
    color: #f00;
  }
`;

const HospitalBeds = () => {
  const { bed, loading } = useContext(DataContext);
  let updatedOn;
  let url;
  if (bed.sources) {
    updatedOn = bed.sources[0].lastUpdated.split("T")[0];
    url = bed.sources[0].url;
  }
  
  const [summayrheading, setSummaryHeading] = useState([
    { id: 1, name: "Rural Hospitals" },
    { id: 2, name: "Rural Beds" },
    { id: 3, name: "Urban Hospitals" },
    { id: 4, name: "Urban Beds" },
    { id: 5, name: "Total Hospitals" },
    { id: 6, name: "Total Beds" },
  ]);
  const [regionalheading, setregionalheading] = useState([
    { id: 1, name: "State Name" },
    { id: 2, name: "Rural Hospitals" },
    { id: 3, name: "Rural Beds" },
    { id: 4, name: "Urban Hospitals" },
    { id: 5, name: "Urban Beds" },
    { id: 6, name: "Total Hospitals" },
    { id: 7, name: "Total Beds" },
  ]);

  if (loading) return <Loader />;

  return (
    <div className="hospital-beds">
      <div className="single-state">
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <h1 className="h4 m-0 font-weight-bold">Hospital Beds Count</h1>
            </div>
          </div>
        </StyledRow>
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <TableBedSummary beds={bed.summary} heading={summayrheading} />
            </div>
          </div>
        </StyledRow>
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <h1 className="h4 m-0 font-weight-bold">Each State Hospital Bed Count</h1>
            </div>
          </div>
        </StyledRow>
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <TableBedRegional regional={bed.regional} regionalheading={regionalheading} />
            </div>
          </div>
        </StyledRow>
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <h1 className="h4 m-0 font-weight-bold">Last Updated On</h1>
                <p className="m-0">{updatedOn}</p>
                <a href={url} className="source">
                  Source
                </a>
              </div>
            </div>
          </div>
        </StyledRow>
      </div>
    </div>
  );
};

export default HospitalBeds;
