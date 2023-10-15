import { createEnum } from "../utils/createEnum.js";
import { randomIntFromInterval } from "../utils/randomIntFromInterval.js";
import { PlantGrowthStages } from "./PlantGrowthStages.js";

const generateGrownCropResult = ({ seed }) => {
  const seedType = SeedTypes[seed];
  const { minSeedsOnCrop, maxSeedsOnCrop, minCropResult, maxCropResult } =
    seedType;

  return {
    seeds: {
      type: seed,
      quantity: randomIntFromInterval(minSeedsOnCrop, maxSeedsOnCrop),
    },
    crops: {
      type: seed,
      quantity: randomIntFromInterval(minCropResult, maxCropResult),
    },
  };
};

const generatePrecociousCropResult = ({ seed }) => {
  return {
    seeds: {
      type: seed,
      quantity: 1,
    },
    crops: {
      type: seed,
      quantity: 0,
    },
  };
};

export const SeedTypes = createEnum({
  CORN: {
    label: "Corn",
    stages: {
      [PlantGrowthStages.LITTLE.name]: ".",
      [PlantGrowthStages.MEDIUM.name]: "🌱",
      [PlantGrowthStages.GROWN.name]: "🌽",
    },
    timeToBeMedium: 1000,
    timeToBeGrown: 4000,
    minSeedsOnCrop: 1,
    maxSeedsOnCrop: 3,
    minCropResult: 1,
    maxCropResult: 2,
    onCrop({ growthStage }) {
      const seed = this.name;
      if (PlantGrowthStages[growthStage].isGrown) {
        return generateGrownCropResult({ seed });
      }
      return generatePrecociousCropResult({ seed });
    },
  },
  GRAPE: {
    label: "Grape",
    stages: {
      [PlantGrowthStages.LITTLE.name]: "*",
      [PlantGrowthStages.MEDIUM.name]: "🌱",
      [PlantGrowthStages.GROWN.name]: "🍇",
    },
    timeToBeMedium: 3000,
    timeToBeGrown: 4000,
    minSeedsOnCrop: 1,
    maxSeedsOnCrop: 3,
    minCropResult: 1,
    maxCropResult: 2,
    onCrop({ growthStage }) {
      const seed = this.name;
      if (PlantGrowthStages[growthStage].isGrown) {
        return generateGrownCropResult({ seed });
      }
      return generatePrecociousCropResult({ seed });
    },
  },
  MELON: {
    label: "Melon",
    stages: {
      [PlantGrowthStages.LITTLE.name]: "o",
      [PlantGrowthStages.MEDIUM.name]: "🌱",
      [PlantGrowthStages.GROWN.name]: "🍈",
    },
    timeToBeMedium: 3000,
    timeToBeGrown: 4000,
    minSeedsOnCrop: 1,
    maxSeedsOnCrop: 3,
    minCropResult: 1,
    maxCropResult: 2,
    onCrop({ growthStage }) {
      const seed = this.name;
      if (PlantGrowthStages[growthStage].isGrown) {
        return generateGrownCropResult({ seed });
      }
      return generatePrecociousCropResult({ seed });
    },
  },
});
