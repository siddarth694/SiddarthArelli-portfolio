import { createContext, useState } from "react";

export let MyContext = createContext();

let MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  let handleTheme=()=>{
    setTheme(!theme)
  }

  return (
    <MyContext.Provider value={{ theme, setTheme,handleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
