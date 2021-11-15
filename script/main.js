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
  let playerScore = 0;

  displayPlayerData = (disName, disSymbol, disScore) => {
    disName.textContent = name;
    disSymbol.textContent = symbol;
    disScore.textContent = playerScore;
  }
  return {name, symbol, playerScore, displayPlayerData}
}



const game =(() => {

  let counter = 0;

  const player1 = createPlayer('PlayerX', 'X');

  const player2 = createPlayer( 'PlayerO', 'O');

  let currentPlayer = player1;

  const board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];

  const winnigCombinations = 
    board[0] === 'X' && board[1] === 'X' && board[2] === 'X' ||
    board[3] === 'X' && board[4] === 'X' && board[5] === 'X' ||
    board[6] === 'X' && board[7] === 'X' && board[8] === 'X' ||
    board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
    board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
    board[6] === 'O' && board[7] === 'O' && board[8] === 'O';

  const switchPlayers = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
      return currentPlayer;
    } else {
      currentPlayer = player1;
      return currentPlayer;
    };
  };

  const cells = () => {
      return  document.querySelectorAll('.cells');;
  };

  const displayBoard = () => {
    for (let i = 0; i < board.length; i++){
      boardContainer.innerHTML += `
      <div class="cells cell-1" id="${i}">${board[i]}</div>`
    };
  };

  const playRound = () => {
    displayBoard();
   
  };

  const playGame = () => {
    while (!winnigCombinations) {
      displayBoard();
      switchPlayers();
      break
    };
    updateBoard(cells(), currentPlayer.symbol);
  };

  const updateBoard = (elements, symbol) =>{
    elements.forEach(cell => {
    cell.addEventListener('click', (e)=>{
        game.board[e.target.id] = symbol
        e.target.innerHTML = symbol;
        });
    });
  };

  const emptyBoard = () => {
    for (let i = 0; i < board.length; i++){
      board[i] = " ";
    }
  }
  


  return { board, player1, player2, currentPlayer, displayBoard, cells, winnigCombinations, switchPlayers, playGame}
})();

game.playGame();

gameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  game.player1 = createPlayer(dataPlyOneName.value, dataPlyOneSymbol.value)
  game.player2 = createPlayer(dataPlyTwoName.value, dataPlyTwoSymbol.value);

  game.player1.displayPlayerData(playerOneName, playerOneSymbol, playerOneScore);
  game.player2.displayPlayerData(playerTwoName, playerTwoSymbol, playerTwoScore);
  game.currentPlayer = game.player1;
  game.displayBoard();

  gameForm.reset();

  popUpContainer.style.display = 'none';
  wrapper.style.background = "none";
  wrapper.style.filter = 'none';
});
    