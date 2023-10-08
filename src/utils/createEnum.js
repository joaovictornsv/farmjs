export const createEnum = (obj) =>
  Object.entries(obj).reduce(
    (acc, [key, value], index) => ({
      ...acc,
      [key]: {
        ...value,
        name: key,
        index,
      },
    }),
    {},
  );
