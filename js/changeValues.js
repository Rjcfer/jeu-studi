class ChangeValues {
  CValues(score) {
    let ids = ["score1", "score2", "aScore1", "aScore2"];
    ids.forEach((id) => {
      document.getElementById(id).innerText = score;
    });
  }

  Player1() {
    document.getElementById("p2").classList.remove("greenShadow");
    document.getElementById("p1").classList.remove("redShadow");
    document.getElementById("p1").classList.add("greenShadow");
    document.getElementById("p2").classList.add("redShadow");
  }
  Player2() {
    document.getElementById("p1").classList.remove("greenShadow");
    document.getElementById("p2").classList.remove("redShadow");
    document.getElementById("p2").classList.add("greenShadow");
    document.getElementById("p1").classList.add("redShadow");
  }
}
