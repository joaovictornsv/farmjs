import React from "react";
import { Soil } from "./Soil.jsx";
import { SeedTypes } from "./enums/SeedTypes.js";

const App = () => {
  return (
    <div className="w-full flex justify-center h-screen items-center">
      <Soil seed={SeedTypes.GRAPE.name} />
      <Soil seed={SeedTypes.CORN.name} />
      <Soil seed={SeedTypes.MELON.name} />
      <Soil seed={SeedTypes.MELON.name} />
      <Soil seed={SeedTypes.MELON.name} />
      <Soil seed={SeedTypes.MELON.name} />
      <Soil seed={SeedTypes.MELON.name} />
      <Soil seed={SeedTypes.MELON.name} />
    </div>
  );
};

export default App;
