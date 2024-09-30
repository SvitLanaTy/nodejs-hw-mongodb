const parseIsFavourite = (isFavourite) => {
  const isBoolean = isFavourite === 'true' || isFavourite === 'false';

  if (!isBoolean) return;

  return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);

  const allowedContactTypes = ['home', 'personal', 'work'];
  const parsedType = allowedContactTypes.includes(type) ? type : undefined;
  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedType,
  };
};
