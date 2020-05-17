import React, { useContext } from "react";
import fp from 'lodash/fp'
import { DataContext } from "../../../context/DataContext";
import styled from "styled-components";
import Loader from "../../common/Loader";
import TableBed from "./TableBed";

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

const getLastUpdatedOn = fp.flow(
  fp.getOr([], 'sources.[0].lastUpdated'),
  fp.split('T'),
  fp.head
)

const summayrheading = [
  { key: 'ruralHospitals', name: "Rural Hospitals" },
  { key: 'ruralBeds', name: "Rural Beds" },
  { key: 'urbanHospitals', name: "Urban Hospitals" },
  { key: 'urbanBeds', name: "Urban Beds" },
  { className: 'font-weight-bold', key: 'totalHospitals', name: "Total Hospitals" },
  { className: 'font-weight-bold', key: 'totalBeds', name: "Total Beds" },
];

const regionalheading = [
  { className: 'font-weight-bold', key: 'state', name: "State Name" },
  ...summayrheading
];

const HospitalBeds = () => {
  const { bed, loading } = useContext(DataContext);
  const url = fp.getOr('', 'sources.[0].url', bed);

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
              <TableBed body={bed.summary || {}} heading={summayrheading} />
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
              <TableBed body={bed.regional || []} heading={regionalheading} />
            </div>
          </div>
        </StyledRow>
        <StyledRow className="row mb-4">
          <div className="col-md-12">
            <div className="cus-white">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <h1 className="h4 m-0 font-weight-bold">Last Updated On</h1>
                <p className="m-0">{getLastUpdatedOn(bed)}</p>
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
