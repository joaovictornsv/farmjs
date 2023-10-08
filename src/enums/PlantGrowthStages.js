import { createEnum } from "../utils/createEnum.js";

export const PlantGrowthStages = createEnum({
  LITTLE: {
    isLittle: true,
    nextStage: "MEDIUM",
    seedTypeField: "littleStage",
  },
  MEDIUM: {
    isMedium: true,
    nextStage: "GROWN",
    seedTypeField: "mediumStage",
  },
  GROWN: {
    isGrown: true,
    seedTypeField: "grownStage",
  },
});
