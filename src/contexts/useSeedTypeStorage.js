import { useContext } from "react";
import { SeedTypeContext } from "./SeedTypeContext.jsx";

export const useSeedTypeStorage = () => {
  const context = useContext(SeedTypeContext);

  if (!context) {
    throw new Error("useTask must be used within an SettingsProvider");
  }

  return context;
};
