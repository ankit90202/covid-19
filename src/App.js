import React from "react";
import DataContextProvider from "./context/DataContext";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import routes from './routes'
import styled from "styled-components";

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
                {routes.map(({ component, path }, index) => {
                  return <Route key={`${index}-route`} path={path} component={component} />
                })}
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
