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


const createPlayer = (name, symbol) => {
  const playerScore = 0;
  displayPlayerData = (disName, disSymbol, disScore) => {
    disName.textContent = name;
    disSymbol.textContent = symbol;
    disScore.textContent = playerScore;
  }
  return {symbol, playerScore, displayPlayerData}
}

const game =(()=> {
  let board = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " ",
  ];

  const player1 = createPlayer();
  const player2 = createPlayer();




  setUpGame = () => {

   
  }

  return { board, player1, player2 }
 

})();



gameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  game.player1.name = dataPlyOneName.value; 
  game.player1.symbol = dataPlyOneSymbol.value;
  game.player2.name = dataPlyTwoName.value; 
  game.player2.symbol = dataPlyTwoSymbol.value;

  game.player1.displayPlayerData(playerOneName, playerOneSymbol, playerOneScore);
  game.player2.displayPlayerData(playerTwoName, playerTwoSymbol, playerTwoScore);
  gameForm.reset();

  popUpContainer.style.display = 'none';
  wrapper.style.background = "none";
  wrapper.style.filter = 'none';
});
    