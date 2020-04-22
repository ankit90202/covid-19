import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [light, setLight] = useState({
    color: "#c4c5c7",
    background: "#fff",
  });
  const [dark, setDark] = useState({
    color: "#fff",
    background: "#000",
  });

  return (
    <ThemeContext.Provider value={{ theme, light, dark }}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
