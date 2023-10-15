import React, { useEffect, useState } from "react";
import { SeedTypes } from "../enums/SeedTypes.js";
import { PlantGrowthStages } from "../enums/PlantGrowthStages.js";
import { useSeedTypeStorage } from "../contexts/useSeedTypeStorage.js";

export const Soil = ({ onCrop }) => {
  const { seedType } = useSeedTypeStorage();
  const [seedTypePlanted, setSeedTypePlanted] = useState(false);
  const [planted, setPlanted] = useState(false);
  const [growthStage, setGrowthStage] = useState(null);

  const reset = () => {
    setPlanted(false);
    setGrowthStage(null);
  };

  const onClick = () => {
    if (!seedType) {
      return;
    }

    if (!planted) {
      setGrowthStage(PlantGrowthStages.LITTLE.name);
      setPlanted(true);
      setSeedTypePlanted(seedType);
      return;
    }

    const cropResult  = SeedTypes[seedTypePlanted].onCrop({ growthStage })
    onCrop(cropResult)
    reset();
  };

  const nextStep = () => {
    const { isMedium } = PlantGrowthStages[growthStage];
    const { timeToBeGrown, timeToBeMedium } = SeedTypes[seedTypePlanted];

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

  useEffect(() => {

  }, []);

  return (
    <div
      onClick={onClick}
      className="w-10 cursor-pointer h-10 text-lg border border-dashed border-zinc-500 rounded flex items-center justify-center p-2"
    >
      {seedTypePlanted && planted && (
        <span className="leading-none">
          {SeedTypes[seedTypePlanted].stages[growthStage]}
        </span>
      )}
    </div>
  );
};
