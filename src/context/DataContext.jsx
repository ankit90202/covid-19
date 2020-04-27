import React from "react";
import { useFetchAPI } from './custom-hooks'


export const DataContext = React.createContext();

const DataContextProvider = (props) => {

  const { country, loading, worldStatus, states, bed, resource } = useFetchAPI();

  return (
    <DataContext.Provider value={{ loading, worldStatus, country, states, bed, resource }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
