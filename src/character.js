const Character = (name, centerXY, radiusLength) => {
  const checkFound = queryCoords => {
    const [centerX, centerY] = centerXY;
    const [queryX, queryY] = queryCoords;

    const distance = Math.sqrt((queryX - centerX) ** 2 + (queryY - centerY) ** 2);

    return distance <= radiusLength;
  };
  return { name, checkFound };
};

export default Character;
