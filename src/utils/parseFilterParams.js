const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  const isBoolean = (isFavourite) => ['true', 'false'].includes(isFavourite);
  const lowerIsFavourite = isFavourite.toLowerCase();
  if (isBoolean(lowerIsFavourite)) return lowerIsFavourite === 'true';
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  console.log(parsedIsFavourite);
  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
