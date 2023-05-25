document.addEventListener('DOMContentLoaded', () => {
  let audio = new Audio();
  audio.src = './mixkit-video-game-win-2016.wav';
  let board = document.createElement("div");
  board.className = "board";
  document.body.appendChild(board);
  //set styles for board
  let stylesForBoard = {
    "position": "absolute",
    "right": "40%",
    "background-color": "blue",
    "width": "330px",
    "display": "grid",
    "grid-template-columns": "repeat(3, 110px)",
    "gap": "2px"
  };
  Object.assign(board.style, stylesForBoard);
  let cells = new Array();
  for (let i = 0; i <= 8; i++) {
    cells[i] = document.createElement("div");
    cells[i].className = "cell";
    board.appendChild(cells[i]);
  }
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
      document.body.style.backgroundColor="red";
      audio.play();
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