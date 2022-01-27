import React from "react";
import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const ContextAPI = createContext();
const ContextApiProvider = ({ children }) => {
  const contextValues = useFirebase();
  return (
    <ContextAPI.Provider value={contextValues}>
        {children}
    </ContextAPI.Provider>
  );
};

export default ContextApiProvider;
