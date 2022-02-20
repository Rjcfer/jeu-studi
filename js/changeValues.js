class ChangeValues {
  CValues(score) {
    let ids = ["score1", "score2", "aScore1", "aScore2"];
    ids.forEach((id) => {
      document.getElementById(id).innerText = score;
    });
  }

  Player1() {
    document.getElementById("p1").className = "col-4 text-center greenShadow";
    document.getElementById("p2").className = "col-4 text-center redShadow";
  }
  Player2() {
    document.getElementById("p2").className = "col-4 text-center greenShadow";
    document.getElementById("p1").className = "col-4 text-center redShadow";
  }
}
