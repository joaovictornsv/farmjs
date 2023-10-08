import React from "react";
import { SeedTypeProvider } from "./SeedTypeContext.jsx";

export const AppProviders = ({ children }) => (
  <SeedTypeProvider>{children}</SeedTypeProvider>
);
