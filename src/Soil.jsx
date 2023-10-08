import React, { useEffect, useState } from "react";
import { SeedTypes } from "./enums/SeedTypes.js";
import { PlantGrowthStages } from "./enums/PlantGrowthStages.js";

export const Soil = ({ seed }) => {
  const [planted, setPlanted] = useState(false);
  const [growthStage, setGrowthStage] = useState(null);

  const reset = () => {
    setPlanted(false);
    setGrowthStage(null);
  };

  const onClick = () => {
    if (!seed) {
      return;
    }

    if (!planted) {
      setGrowthStage(PlantGrowthStages.LITTLE.name);
      setPlanted(true);
      return;
    }

    console.log(SeedTypes[seed].onCrop({ growthStage }));
    reset();
  };

  const nextStep = () => {
    const { isMedium } = PlantGrowthStages[growthStage];
    const { timeToBeGrown, timeToBeMedium } = SeedTypes[seed];

    const timeToNextStage = isMedium ? timeToBeGrown : timeToBeMedium;

    const handle = setTimeout(() => {
      const nextStage = PlantGrowthStages[growthStage].nextStage;
      setGrowthStage(nextStage);
    }, timeToNextStage);

    return () => clearTimeout(handle);
  };

  useEffect(() => {
    if (!planted || PlantGrowthStages[growthStage].isGrown) {
      return;
    }

    return nextStep();
  }, [planted, growthStage]);

  return (
    <div
      onClick={onClick}
      className="w-10 cursor-pointer h-10 text-lg border border-dashed border-zinc-500 rounded flex items-center justify-center p-2"
    >
      {seed && planted && (
        <span className="leading-none">
          {SeedTypes[seed][PlantGrowthStages[growthStage].seedTypeField]}
        </span>
      )}
    </div>
  );
};
