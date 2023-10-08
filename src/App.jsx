import React from "react";
import { Soil } from "./components/Soil.jsx";
import { SeedTypes } from "./enums/SeedTypes.js";
import { Select } from "./components/Select.jsx";
import { useSeedType } from "./contexts/useSeedType.js";

const App = () => {
  const { seedType, saveSeedType } = useSeedType();
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div>
        <Select
          label="Seed"
          value={seedType}
          onChange={(e) => saveSeedType(e.target.value)}
        >
          {Object.values(SeedTypes).map(({ name, label }) => (
            <option key={name} value={name}>
              {label}
            </option>
          ))}
        </Select>
      </div>

      <div className="flex">
        <Soil seed={SeedTypes.GRAPE.name} />
        <Soil seed={SeedTypes.CORN.name} />
        <Soil seed={SeedTypes.MELON.name} />
      </div>
    </div>
  );
};

export default App;
