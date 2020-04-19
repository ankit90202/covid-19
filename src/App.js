import React from "react";
import DataContextProvider from "./context/DataContext";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Pages/Home/Home";
import India from "./components/Pages/India/India";
import State from "./components/Pages/State/State";
import Resources from "./components/Pages/Resources/Resources";
import ThemeContextProvider from "./context/ThemeContext";
import styled from "styled-components";
import SingleCountry from "./components/Pages/Home/singlecountry/singlecountry";
import SingleState from "./components/Pages/State/SingleState";
import HospitalBeds from "./components/Pages/State/HospitalBeds";

const StyledMain = styled.div`
  // background: #f6f6fe;
  background: #7c59f6;
  padding: 30px 20px;
  border-radius: 20px 0 0 20px;
`;

function App() {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <div className="App">
          <div className="row cus-row">
            <div className="col-md-2">
              <Navbar />
            </div>
            <StyledMain className="col-md-10">
              <Switch>
                <Route path="/not-found" component={NotFound} />
                <Route path="/india/hospital-beds" component={HospitalBeds} />
                <Route path="/world/country/:slug/:id" component={SingleCountry} />
                <Route path="/world/india/:state" component={SingleState} />
                <Route path="/india" component={India} />
                <Route path="/india-state" component={State} />
                <Route path="/resources" component={Resources} />
                <Route path="/" exact component={Home} />
                <Redirect to="not-found" />
              </Switch>
            </StyledMain>
          </div>
        </div>
      </ThemeContextProvider>
    </DataContextProvider>
  );
}

export default App;
