const game = new Game();
let p1Score = 0;
let p2Score = 0;
let p1FScore = 0;
let p2FScore = 0;
let player = 1;

document.getElementById("newGame").addEventListener("click", game.NewGame);

document.getElementById("dice").addEventListener("click", game.ScoreCalc);

document
  .getElementById("saveResults")
  .addEventListener("click", game.SaveResults);
