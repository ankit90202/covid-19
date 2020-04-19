import React, { createContext, useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [worldStatus, setWorldStatus] = useState([]); // world summary
  const [country, setCountry] = useState([]); //each country
  const [states, setStates] = useState([]);
  const [bed, setBed] = useState([]);
  const [resource, setresource] = useState([]);

  const fetchWorldStatus = async () => {
    setLoading(true);
    const { data: countryList } = await Axios.get("https://api.covid19api.com/summary");
    setWorldStatus(countryList.Global);
    setCountry(countryList.Countries);
    const { data: stateData } = await Axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    setStates(stateData.data.regional);
    const { data: beds } = await Axios.get("https://api.rootnet.in/covid19-in/hospitals/beds");
    setBed(beds.data);
    const { data: resources } = await Axios.get(
      "	https://api.covid19india.org/resources/resources.json"
    );
    setresource(resources.resources);
    setLoading(false);
  };
  useEffect(() => {
    fetchWorldStatus();
  }, []);

  return (
    <DataContext.Provider value={{ loading, worldStatus, country, states, bed, resource }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
