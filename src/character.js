/* eslint-disable no-return-assign */
const Character = (name, centerXY, radiusLength) => {
  let found = false;

  const updateFoundStatus = () => !found && (found = true);
  const checkFound = queryCoords => {
    const [centerX, centerY] = centerXY;
    const [queryX, queryY] = queryCoords;

    const distance = Math.sqrt((queryX - centerX) ** 2 + (queryY - centerY) ** 2);
    const isFound = distance <= radiusLength;

    if (isFound) {
      updateFoundStatus();
    }

    return isFound;
  };

  const getCheckFound = coord => checkFound(coord);
  const charObject = { pubName: () => name, pubFound: () => found };

  // public properties / methods
  return { charObject, getCheckFound };
};

export default Character;
