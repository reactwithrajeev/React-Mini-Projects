import { createContext, useState } from "react";


export const CardContext = createContext([]);

const CardContextProvider = ({ children }) => {
  const [tabName, setTabName] = useState("Home");

  let handleClick = (Name) => {
    setTabName(Name);
  };

  const deletePost =(itemID)=>{
    console.log(`deleted post ${itemID}`)
  }

  return (
    <CardContext.Provider value={{ tabName, setTabName, handleClick,deletePost}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
