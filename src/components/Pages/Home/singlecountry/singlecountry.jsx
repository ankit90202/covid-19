import React, { useContext, useState, useEffect } from "react";
import Card from "../../../common/Card";
import { DataContext } from "../../../../context/DataContext";
import styled from "styled-components";
import LineChart from "../../../common/LineChart";
import Axios from "axios";
import Loader from "../../../common/Loader";

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
`;

const initialData = {
  labels: [],
  datasets: [{ label: "", backgroundColor: "", borderWidth: 0, data: [] }],
};

const SingleCountry = ({ match }) => {
  const [singleCountry, setSingleCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const { country } = useContext(DataContext);
  const [dailyData, setdailyData] = useState([]);
  const [confirmed, setConfirmed] = useState(initialData);
  const [recovered, setRecovered] = useState(initialData);
  const [deaths, setDeaths] = useState(initialData);
  const id = match.params.id;
  const slug = match.params.slug;
  const [pageupdate, setpageupdate] = useState(true);

  const fetchDailyData = async () => {
    setpageupdate(false);
    setLoading(true);
    const { data } = await Axios.get(`https://api.covid19api.com/country/${slug}`);
    setdailyData(data);
    setLoading(false);
    setpageupdate(true);
  };

  useEffect(() => {
    const singleData = country.filter((item) => {
      return item.Country === id;
    });

    setSingleCountry(singleData);
    fetchDailyData();
    // chart start
    const date = dailyData.map((item) => item.Date.split("T")[0]);
    const totalConfirmed = dailyData.map((item) => item.Confirmed);
    const totalRecovered = dailyData.map((item) => item.Recovered);
    const totalDeaths = dailyData.map((item) => item.Deaths);

    var updatedConfiremd = {
      labels: [...date],
      datasets: [
        {
          label: "Total Confirmed",
          backgroundColor: "rgba(243, 101, 113,1)",
          borderWidth: 0,
          data: [...totalConfirmed],
        },
      ],
    };
    var updatedRecovered = {
      labels: [...date],
      datasets: [
        {
          label: "Total Recovered",
          backgroundColor: "#7add4e",
          borderWidth: 2,
          data: [...totalRecovered],
        },
      ],
    };
    var updatedDeath = {
      labels: [...date],
      datasets: [
        {
          label: "Total Deaths",
          backgroundColor: "RGB(167, 166, 180)",
          borderWidth: 0,
          data: [...totalDeaths],
        },
      ],
    };

    setConfirmed(updatedConfiremd);
    setRecovered(updatedRecovered);
    setDeaths(updatedDeath);
    setpageupdate(true);
  }, [country]);

  if (loading) return <Loader />;

  return (
    <div className="SingleCountry">
      <StyledRow className="row mb-4">
        <div className="col-md-12">
          <div className="cus-white">
            <h1 className="h4 m-0">{id}</h1>
          </div>
        </div>
      </StyledRow>
      {singleCountry.length > 0 ? (
        <div className="row">
          <Card
            data={singleCountry[0].TotalConfirmed}
            colSize={2}
            type="warning"
            title={"Total Cases"}
            bgColor={"#f36571"}
          />
          <Card
            data={singleCountry[0].TotalRecovered}
            colSize={2}
            type="success"
            title={"Total Recovered"}
            bgColor={"#ffac4e"}
          />
          <Card
            data={singleCountry[0].TotalDeaths}
            colSize={2}
            type="danger"
            title={"Total Deaths"}
            bgColor={"#a7a6b4"}
          />
          <Card
            data={singleCountry[0].NewConfirmed}
            colSize={2}
            type="warning"
            title={"New Confirmed"}
            bgColor={"#7add4f"}
          />
          <Card
            data={singleCountry[0].NewDeaths}
            colSize={2}
            type="warning"
            title={"New Deaths"}
            bgColor={"#bfd4ff"}
          />
          <Card
            data={singleCountry[0].NewRecovered}
            colSize={2}
            type="warning"
            title={"New Recovered"}
            bgColor={"#4caf50"}
          />
        </div>
      ) : null}
      <StyledRow className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="cus-white">
            <LineChart data={confirmed} slug={slug} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="cus-white">
            <LineChart data={recovered} slug={slug} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="cus-white">
            <LineChart data={deaths} slug={slug} />
          </div>
        </div>
      </StyledRow>
    </div>
  );
};

export default SingleCountry;
