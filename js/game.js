class Game {
  constructor() {}

  NewGame() {
    let cValues = new ChangeValues();
    cValues.CValues("0");
    cValues.Player1();
    p1Score = 0;
    p2Score = 0;
    p1FScore = 0;
    p2FScore = 0;
    player = 1;
  }

  ScoreCalc() {
    const dice = new Dice();

    if (player === 1 && p1FScore < 100 && p1Score < 100) {
      let i = dice.RandomDiceValue();
      dice.RandomDiceImg(i);
      if (i > 1) {
        p1Score += i;
        document.getElementById("aScore1").innerText = p1Score;
      }
    } else if (p2FScore < 100 && p2Score < 100) {
      let i = dice.RandomDiceValue();
      dice.RandomDiceImg(i);
      if (i > 1) {
        p2Score += i;
        document.getElementById("aScore2").innerText = p2Score;
      }
    } else {
      alert("Le joueur " + player + " a gagné");
    }
  }

  SaveResults() {
    let cValues = new ChangeValues();
    if (player === 1 && p1FScore < 100) {
      p1FScore += p1Score;
      document.getElementById("score1").innerText = p1FScore;
      player = 2;
      p1Score = 0;
      document.getElementById("aScore1").innerText = p1Score;
      if (p1FScore >= 100) {
        alert("Le joueur 1 a gagné");
      }
      cValues.Player2();
    } else if (player === 2 && p2FScore < 100) {
      p2FScore += p2Score;
      document.getElementById("score2").innerText = p2FScore;
      player = 1;
      p2Score = 0;
      document.getElementById("aScore2").innerText = p2Score;
      if (p2FScore >= 100) {
        alert("Le joueur 2 a gagné");
      }
      cValues.Player1();
    } else {
      alert("Une erreur est survenue");
    }
  }
}
