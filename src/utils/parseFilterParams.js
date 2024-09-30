const parseIsFavourite = (isFavourite) => {
  const isBoolean = isFavourite === 'true' || isFavourite === 'false';

  if (!isBoolean) return;

  return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  return {
    isFavourite: parsedIsFavourite,
  };
};
