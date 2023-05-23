document.addEventListener('DOMContentLoaded', () => {
  let board = document.getElementsByClassName("board");
  //set styles for board
  let stylesForBoard = {
    "background-color": "blue",
    "width": "330px",
    "display": "grid",
    "grid-template-columns": "repeat(3, 110px)",
    "gap": "2px"
  };
  Object.assign(board[0].style, stylesForBoard);

  cells = document.querySelectorAll(".cell");
  //set styles for cells
  let stylesForCells = {
    "background-color": "aqua",
    "border": "1px solid #000",
    "width": "100px",
    "height": "100px",
    "text-align": "center",
    "font-size": "36px",
    "cursor": "pointer"
  };
  cells.forEach(cell => { Object.assign(cell.style, stylesForCells); })
  let current_player = "x";
// Function for click event
  function cellClick(e) {
    const cell = e.target;
    if (cell.textContent !== '') {
      return;
    }
    cell.textContent = current_player;
    if (CheckWin()) {
      alert(`Player ${current_player} wins!`)
      resetGame();
      return;
    }
    current_player = current_player === 'x' ? '0' : 'x'
  }
  // Add click event listener to each cell
  cells.forEach(cell => {
    cell.addEventListener('click', cellClick)
  });
  //Function for check win combinations
  function CheckWin() {
    const wincombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ]
    for (let combination of wincombinations) {
      const [a, b, c] = combination;
      if (cells[a].textContent === current_player &&
        cells[b].textContent === current_player &&
        cells[c].textContent === current_player
      ) {
        return true;
      }
    }
    return false;
  }
  function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
    });
    current_player = 'x';
  }
})