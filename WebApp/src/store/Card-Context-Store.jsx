import { createContext, useState } from "react";

export const CardContext = createContext([]);

const CardContextProvider = ({ children }) => {
  const [tabName, setTabName] = useState("Home");

  let handleClick = (Name) => {
    setTabName(Name);
  };

  return (
    <CardContext.Provider value={{ tabName, setTabName, handleClick}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
