import React, { createContext } from "react";
import { useSeedTypeStorage } from "../hooks/useSeedType.js";

export const SeedTypeContext = createContext({});

export const SeedTypeProvider = ({ children }) => {
  const values = useSeedTypeStorage();

  return (
    <SeedTypeContext.Provider value={{ ...values }}>
      {children}
    </SeedTypeContext.Provider>
  );
};
