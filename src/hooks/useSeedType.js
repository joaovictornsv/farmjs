import { useEffect, useState } from "react";
import { SeedTypes } from "../enums/SeedTypes.js";

const SEED_TYPE_STORAGE_KEY = "seedType";
export const useSeedTypeStorage = () => {
  const [seedType, setSeedType] = useState("");

  useEffect(() => {
    setSeedType(getSeedType());
  }, []);

  const getSeedType = () => {
    const seedType = localStorage.getItem(SEED_TYPE_STORAGE_KEY);
    if (!seedType) {
      saveSeedType(SeedTypes.CORN.name);
    }
    return seedType;
  };

  const saveSeedType = (seedTypeToSave) => {
    localStorage.setItem(SEED_TYPE_STORAGE_KEY, seedTypeToSave);
    setSeedType(seedTypeToSave);
  };

  return {
    seedType,
    saveSeedType,
  };
};
