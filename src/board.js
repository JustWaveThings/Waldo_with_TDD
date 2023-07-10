const Board = characters => {
  // keeps track of the number of not found character instances to determine endgame
  const numberOfNotFoundCharacters = () => characters.filter(chars => chars.charObject.pubFound() === false).length;

  return { characters, numberOfNotFoundCharacters };
};

export default Board;
