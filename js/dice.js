class Dice {
  RandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
    //pour eviter de avoir une valeur de 0
  }

  RandomDiceImg(dice) {
    let cValues = new ChangeValues();
    switch (dice) {
      case 1:
        document.getElementById("diceImg").src = "/img des/1.png";
        if (player === 1) {
          player = 2;
          p1Score = 0;
          document.getElementById("aScore1").innerText = p1Score;
          cValues.Player2();
        } else {
          player = 1;
          p2Score = 0;
          document.getElementById("aScore2").innerText = p1Score;
          cValues.Player1();
        }
        break;

      case 2:
        document.getElementById("diceImg").src = "/img des/2.png";
        break;

      case 3:
        document.getElementById("diceImg").src = "/img des/3.png";
        break;

      case 4:
        document.getElementById("diceImg").src = "/img des/4.png";
        break;

      case 5:
        document.getElementById("diceImg").src = "/img des/5.png";
        break;

      case 6:
        document.getElementById("diceImg").src = "/img des/6.png";
        break;
    }
    return dice;
  }
  constructor() {}
}
