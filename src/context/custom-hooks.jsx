import React from "react";
import Axios from "axios";


const initialState = {
  country: [],
  worldStatus: {},
  loading: false,
  states: [],
  bed: {},
  resource: []
};

const fetchAPIReducer = (state, { payload, type }) => {

  switch (type) {
    case 'SET_WORLD_STATUS':
      return { ...state, worldStatus: payload };
    case 'SET_COUNTRIES':
      return { ...state, country: payload };
    case 'SET_STATES':
      return { ...state, states: payload };
    case 'SET_BEDS':
      return { ...state, bed: payload };
    case 'SET_RESOURCES':
      return { ...state, resource: payload };
    case 'FETCHING_API':
      return { ...state, loading: payload };
    default:
      throw new Error();
  }
}

export const useFetchAPI = () => {

  const [data, dispatch] = React.useReducer(fetchAPIReducer, initialState);

  const fetchWorldStatus = async () => {
    dispatch({ type: 'FETCHING_API', payload: true });

    const [{ data: countryList }, { data: stateData }, { data: beds }, { data: resources }] = await Promise.all([
      Axios.get("https://api.covid19api.com/summary"),
      Axios.get("https://api.rootnet.in/covid19-in/stats/latest"),
      Axios.get("https://api.rootnet.in/covid19-in/hospitals/beds"),
      Axios.get("	https://api.covid19india.org/resources/resources.json")]);

    dispatch({ type: 'SET_WORLD_STATUS', payload: countryList.Global });
    dispatch({ type: 'SET_COUNTRIES', payload: countryList.Countries });
    dispatch({ type: 'SET_STATES', payload: stateData.data.regional });
    dispatch({ type: 'SET_BEDS', payload: beds.data });
    dispatch({ type: 'SET_RESOURCES', payload: resources.resources });

    dispatch({ type: 'FETCHING_API', payload: false });
  };

  React.useEffect(() => {

    (async () => { await fetchWorldStatus(); })();
  }, []);

  return data
}