import React, {useState} from "react";
import { Soil } from "./components/Soil.jsx";
import { SeedTypes } from "./enums/SeedTypes.js";
import { Select } from "./components/Select.jsx";
import { useSeedTypeStorage } from "./contexts/useSeedTypeStorage.js";

const App = () => {
  const { seedType, saveSeedType } = useSeedTypeStorage();
  const [inventory, setInventory] = useState({
    seeds: {},
    crops: {}
  })

  const onCrop = ({ seeds, crops }) => {
    setInventory({
      seeds: {
        ...inventory.seeds,
        ...(seeds.quantity && {
          [seeds.type]: (inventory.seeds[seeds.type] || 0) + seeds.quantity,
        })
      },
      crops: {
        ...inventory.crops,
        ...(crops.quantity && {
          [crops.type]: (inventory.crops[crops.type] || 0) + crops.quantity,
        })
      }
    })
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl">Inventory</h1>
          <h2 className="text-lg">Seeds:</h2>
          <ul>
            {Object.entries(inventory.seeds).map(([seedType, quantity]) => (
              <li>
                {SeedTypes[seedType].stages.GROWN} {SeedTypes[seedType].label}: {quantity}
              </li>
            ))}
          </ul>
          <h2 className="text-lg">Crops:</h2>
          <ul>
            {Object.entries(inventory.crops).map(([seedType, quantity]) => (
              <li>
                {SeedTypes[seedType].stages.GROWN} {SeedTypes[seedType].label}: {quantity}
              </li>
            ))}
          </ul>
        </div>
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
          <Soil onCrop={onCrop} />
          <Soil onCrop={onCrop} />
          <Soil onCrop={onCrop} />
        </div>
      </div>

    </div>
  );
};

export default App;
