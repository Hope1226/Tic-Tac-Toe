const gameForm = document.querySelector('#gameForm');
const playerOneName = document.querySelector('#playerOneName');
const playerOneSymbol = document.querySelector('#playerOneSymbol');
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoName = document.querySelector('#playerTwoName');
const playerTwoSymbol = document.querySelector('#playerTwoSymbol');
const playerTwoScore = document.querySelector('#playerTwoScore');
const dataPlyOneName = document.querySelector('#firstPlyName');
const dataPlyOneSymbol = document.querySelector('#firstPlySymbol');
const dataPlyTwoName = document.querySelector('#secondPlyName');
const dataPlyTwoSymbol = document.querySelector('#secondPlySymbol');
const boardContainer = document.querySelector('.board');



const createPlayer = (name, symbol) => {
  const playerScore = 0;

  displayPlayerData = (disName, disSymbol, disScore) => {
    disName.textContent = name;
    disSymbol.textContent = symbol;
    disScore.textContent = playerScore;
  }
  return {name, symbol, playerScore, displayPlayerData}
}



const game =((player1, player2, currentPlayer, boardCells)=> {
  const board = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " ",
  ];

  const displayBoard = () => {
    for (let i = 0; i < board.length; i++){
      boardContainer.innerHTML += `
      <div class="cells cell-1" id="${i}">${board[i]}</div>`
    };
  };

  const updateBoard = (elements, symbol) =>{
    elements.forEach(cell => {
    cell.addEventListener('click', (e)=>{
        game.board[e.target.id] = symbol
        e.target.innerHTML = symbol;
        });
    });
  };

  


  return { board, player1, player2, currentPlayer,displayBoard, boardCells, updateBoard}
})();






gameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  game.player1 = createPlayer(dataPlyOneName.value, dataPlyOneSymbol.value)
  game.player2 = createPlayer(dataPlyTwoName.value, dataPlyTwoSymbol.value);

  game.player1.displayPlayerData(playerOneName, playerOneSymbol, playerOneScore);
  game.player2.displayPlayerData(playerTwoName, playerTwoSymbol, playerTwoScore);
  game.currentPlayer = game.player1;
  game.switch = () => {
    if (game.currentPlayer == game.player1){
      game.currentPlayer = game.player2
    } else {
      game.currentPlayer = game.player1
    }
  }
  game.displayBoard();
  game.boardCells = boardContainer.querySelectorAll('.cells');
  game.updateBoard(game.boardCells);

  gameForm.reset();

  popUpContainer.style.display = 'none';
  wrapper.style.background = "none";
  wrapper.style.filter = 'none';
});
    