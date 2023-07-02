const domMethods = {
  createBoard() {
    const container = document.querySelector('.container');
    const board = document.createElement('div');
    board.className = 'board--cont';
    container.appendChild(board);
  },
};
export default domMethods;
